var iOS7 = Alloy.Globals.isiOS7Plus();
$.tdv.top = iOS7 ? 20 : 0;
Ti.UI.setBackgroundColor('#E9E9E9');
function showFullImage(e) {
	var args = {};
	args.image = e.source.image;
	var controller = Alloy.createController('imagefullview', args);
	var imagefullview = controller.getView();

	// if(OS_IOS) Alloy.Globals.navgroup.open(imagefullview);
	/* else */
	imagefullview.open({
		modal : true,
		modalTransitionStyle : Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
		modalStyle : Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN,
		navBarHidden : true
	});
}

function goBack() {
	Ti.API.info("going back now");
	if (OS_IOS)
		Alloy.Globals.navgroup.close($.tdv, {
			animated : true
		});
	else {
		$.tdv.close();
	}

}

function onClose() {
	Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
	$.destroy();
}

function applyOrientiation() {
	var deviceheight;
	if (OS_IOS)
		deviceheight = Ti.Platform.displayCaps.platformHeight;
	else
		deviceheight = (Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor) - 8;

	if ((Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT) || (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT)) {
		$.addClass($.scrollView, "landscape");
		Ti.API.info("openieng in landscape mode " + deviceheight);
		$.thing.height = deviceheight - 20 - 44 - 40;
		$.thing.width = "50%";

		$.detail.width = "50%"
		$.commentScroller.height = deviceheight - 20 - 44 - 18 - 20 - 18 - 40 - 40;

	} else {
		$.removeClass($.scrollView, "landscape");
		Ti.API.info("openieng in portrait mode " + deviceheight);

		$.thing.height = 200;
		$.thing.width = "100%";

		$.detail.width = "100%";
		Ti.API.info("$.thing.height" + $.thing.size.height);
		$.commentScroller.height = deviceheight - 200 - 20 - 44 - 18 - 20 - 18 - 40 - 40;

	}
}

Ti.Gesture.addEventListener('orientationchange', applyOrientiation);
applyOrientiation();

var args = arguments[0] || {};

if (args.thing) {
	Ti.API.info("thing--" + JSON.stringify(args.thing));
	var createdDate = new Date(args.thing.created_at);
	$.thingImage.image = args.thing.url;
	$.imageLabel.text = args.thing.description == null ? "" : args.thing.description;
	$.price.text = args.thing.buy_it == null ? "" : args.thing.buy_it;
	$.score.text = args.thing.cool_score == null ? "" : parseFloat(args.thing.cool_score).toFixed(2);
	$.win.text = args.thing.wins == null ? "" : args.thing.wins;
	$.loss.text = args.thing.losses == null ? "" : args.thing.losses;

	if (args.thing.tags.length > 0) {
		for (var i = 0; i < args.thing.tags.length; i++) {
			var tagLabel = Ti.UI.createLabel({
				left : "8",
				height : "18",
				top : "0",
				bottom : "0",
				width : Ti.UI.SIZE,
				color : "#FFF",
				backgroundColor : "#30D1F4",
				font : {
					fontWeight : 'bold'
				},
				borderRadius : 5,
				text : " " + args.thing.tags[i] + " "
			});
			$.tags.add(tagLabel);
		}
	}

	var labelText = ""
	labelText = labelText + (args.thing.user == null ? "" : "Posted by " + args.thing.user.name);
	labelText = labelText + (createdDate == null ? "" : " on " + createdDate.format('yyyy-MM-d'));
	labelText = labelText + (args.thing.original_url == null ? "" : " from " + Alloy.Globals.parseURL(args.thing.original_url));
	$.thingDetailsLabel.text = labelText;

	//Is this thing available for purchase
	if (!args.thing.buy_it)
		$.bottomBarButtons.remove($.cartButton);

	fetchComments();

}

function fetchComments() {

	var thingId = args.thing.id;
	if (!thingId)
		return;
	Alloy.Globals.loading.show('Loading Comments, Please wait..', true);
	var xhr = Ti.Network.createHTTPClient();
	xhr.open('GET', Alloy.Globals.serverPath + '/api/things/' + thingId + '/comments');
	xhr.send();
	xhr.onload = function(e) {
		var data = JSON.parse(this.responseText);
		//alert(this.responseText)
		data = data.result;
		var rows = [];
		if (data.length == 0) {
			var row = Alloy.createController('commentRow').getView();
			rows.push(row);
		} else {
			for ( i = 0; i < data.length; i++) {
				var args = {};
				args.comment = data[i].comment;

				if (data[i].user) {
					args.username = data[i].user.name;
					args.image = data[i].user.avatar;
				} else
					args.username = "UNKNOWN";
				var row = Alloy.createController('commentRow', args).getView();
				rows.push(row);
			}
		}

		$.commentScroller.setData(rows);
		Alloy.Globals.loading.hide();
	};
	xhr.onerror = function(e) {
		Ti.API.info("got some error");
		Alloy.Globals.loading.hide();
	};
}

function postComment() {
	if (Alloy.Globals.APIKey) {
		Alloy.Globals.loading.show('Posting your comment, Please wait..', true);
		var thingId = args.thing.id;
		var data = "comment=" + $.commentField.value;

		var xhr = Ti.Network.createHTTPClient();
		Ti.API.info('Token token=' + Alloy.Globals.APIKey);

		xhr.open('POST', "http://limitless-eyrie-1080.herokuapp.com/api/things/" + thingId + "/comments");
		xhr.setRequestHeader('Authorization', 'Token token=' + Alloy.Globals.APIKey);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		Ti.API.info("url--" + "http://limitless-eyrie-1080.herokuapp.com/api/things/" + thingId + "/comments");
		Ti.API.info("token--" + 'Token token=' + Alloy.Globals.APIKey);
		xhr.onload = function(e) {
			fetchComments();
			$.commentField.value = "";
		};
		xhr.onerror = function(e) {
			Alloy.Globals.loading.hide();
			Ti.API.info("error--" + JSON.stringify(e));

			Ti.API.info("error--" + JSON.stringify(this));

			if (this.status == 0) {
				alert("Network not avaiable, please try again later");
			} else if (this.status == 2) {
				alert("The request timed out, please try again later");
			} else if (this.status == 500 || this.status == 404) {

				alert("The request timed out, please try again later");

			}

		};
		xhr.send(data);

	} else {
		Alloy.Globals.loginFirst(postComment);
	}
}

function favThisThing() {
	if (Alloy.Globals.APIKey) {
		Alloy.Globals.loading.show('Making this thing as your favourite, Please wait..', true);
		var thingId = args.thing.id;

		var xhr = Ti.Network.createHTTPClient();
		Ti.API.info('Token token=' + Alloy.Globals.APIKey);

		xhr.open('PUT', Alloy.Globals.serverPath + '/api/users/current/favorites/' + thingId);
		xhr.setRequestHeader('Authorization', 'Token token=' + Alloy.Globals.APIKey);
		xhr.onload = function(e) {
			Alloy.Globals.loading.hide();
		};
		xhr.onerror = function(e) {
			Alloy.Globals.loading.hide();
			alert("Got some error");
			Ti.API.info("error--" + JSON.stringify(e));
			Ti.API.info("error--" + JSON.stringify(this));
		};
		xhr.send();

	} else {
		Alloy.Globals.loginFirst(favThisThing);
	}
}

function flagThisThing(e) {
	var thingId = args.thing.id;
	if (thingId) {
		var nxtArgs = {};
		nxtArgs.popUpLabel = "Confirm as inappropriate";
		nxtArgs.but1Label = "Confirm";
		nxtArgs.but2label = "Cancel";
		nxtArgs.but1handler = function() {
			Alloy.Globals.loading.show('Flagging now, Please wait..', true);
			Alloy.Globals.removeCurrentMatch();
			var xhr = Ti.Network.createHTTPClient();
			xhr.open('POST', Alloy.Globals.serverPath + '/api/things/' + thingId + '/flag');
			xhr.send();
			xhr.onload = function(e) {
				Alloy.Globals.loading.hide();
				popUpWindow.close();
				$.tdv.close();
				Alloy.Globals.fetchNextMatch();
			};
			xhr.onerror = function(e) {
				Alloy.Globals.loading.hide();
				popUpWindow.close();
			};

		};
		nxtArgs.but2handler = function() {
			popUpWindow.close();
		};
		var popUpWindow = Alloy.createController('popUpWindow', nxtArgs).getView();
		popUpWindow.open();

	}

};

