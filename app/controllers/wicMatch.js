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

function flagThisThing(e) {
	if (e.source.thingId) {
		var args = {};
		args.popUpLabel = "Confirm as inappropriate?";
		args.but1Label = "Confirm";
		args.but2label = "Cancel";
		args.but1handler = function() {
			Alloy.Globals.loading.show('Flagging now, Please wait..', true);
			Alloy.Globals.removeCurrentMatch();
			var xhr = Ti.Network.createHTTPClient();
			xhr.open('POST', Alloy.Globals.serverPath + '/api/things/' + e.source.thingId + '/flag');
			xhr.send();
			xhr.onload = function(e) {
				Alloy.Globals.loading.hide();
				popUpWindow.close();
				Alloy.Globals.fetchNextMatch();
			};
			xhr.onerror = function(e) {
				Alloy.Globals.loading.hide();
				popUpWindow.close();
			};

		};
		args.but2handler = function() {
			popUpWindow.close();
		};
		var popUpWindow = Alloy.createController('popUpWindow', args).getView();
		popUpWindow.open();

	}

};

function goToDetailThing(e) {
	if (matchup) {
		var thing = 'thing' + e.source.id.replace(/^\D+/g, '');
		var args = {};
		if (matchup)
			args.thing = matchup[thing];
		var controller = Alloy.createController('thingDetailView', args);
		var thingDetailView = controller.getView();

		if (OS_IOS)
			Alloy.Globals.navgroup.open(thingDetailView);
		else
			thingDetailView.open();
	}

};

function voteMe(e) {
	if (matchup) {
		$.score1.text = isNaN(parseFloat(matchup.thing1.cool_score)) ? "?" : parseFloat(matchup.thing1.cool_score).toFixed(2);
		if (isNaN(parseInt(matchup.thing1.wins)) || isNaN(parseInt(matchup.thing1.losses)))
			$.winslose1.text = "Not enough data yet.";
		else
			$.winslose1.text = matchup.thing1.wins + " wins / " + matchup.thing1.losses + " losses";
		$.scoreCard1.visible = true;

		$.score2.text = isNaN(parseFloat(matchup.thing2.cool_score)) ? "?" : parseFloat(matchup.thing2.cool_score).toFixed(2);
		;
		if (isNaN(parseInt(matchup.thing2.wins)) || isNaN(parseInt(matchup.thing2.losses)))
			$.winslose2.text = "Not enough data yet.";
		else
			$.winslose2.text = matchup.thing2.wins + " wins / " + matchup.thing2.losses + " losses";
		$.scoreCard2.visible = true;

		var data = {};
		data["losing_thing_id"] = e.source.loosingId;
		data["winning_thing_id"] = e.source.winningId;
		Ti.API.info(JSON.stringify(data));
		Alloy.Globals.loading.show('Voting, Please wait..', true);

		var xhr = Ti.Network.createHTTPClient();
		xhr.open('POST', Alloy.Globals.serverPath + 'api/vote');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function(e) {
			if(OS_IOS)
				Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
			setTimeout(function() {
				Alloy.Globals.fetchNextMatch();
			}, Alloy.Globals.votingIdealTimer);
			Alloy.Globals.loading.hide();
		};
		xhr.onerror = function(e) {
			Ti.API.info("error--" + JSON.stringify(e));
			Alloy.Globals.loading.hide();
		};
		xhr.send(JSON.stringify(data));
	}

}

var matchup;
function fetchMatch() {
	Alloy.Globals.loading.show('Loading, Please wait..', true);
	var xhr = Ti.Network.createHTTPClient();
	xhr.open('GET', Alloy.Globals.serverPath + '/api/things/matchup');
	xhr.send();
	xhr.onload = function(e) {
		matchup = JSON.parse(this.responseText);
		//		Alloy.Globals.matches.push(matchup);
		//		Alloy.Globals.currentMatchIndex = Alloy.Globals.matches.length - 1;

		$.img1.setImage(matchup.thing1.url);
		$.img1.winningId = matchup.thing1.id;
		$.img1.loosingId = matchup.thing2.id;
		$.flag1.thingId = matchup.thing1.id;

		$.img2.setImage(matchup.thing2.url);
		$.img2.winningId = matchup.thing2.id;
		$.img2.loosingId = matchup.thing1.id;
		$.flag2.thingId = matchup.thing2.id;

		$.scoreCard1.visible = false;
		$.scoreCard2.visible = false;

		Alloy.Globals.loading.hide();
	};
	xhr.onerror = function(e) {
		Ti.API.info("got some error");
		Alloy.Globals.loading.hide();
	};

}

fetchMatch();

function applyOrientiation() {
	if ((Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT) || (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT)) {

		$.removeClass($.info1, "info");
		$.removeClass($.info2, "info");
		$.removeClass($.flag1, "flag");
		$.removeClass($.flag2, "flag");
		$.removeClass($.portrait, "portrait");
		$.addClass($.thing1, "half");
		$.addClass($.thing2, "half");
		$.addClass($.info1, "linfo");
		$.addClass($.info2, "linfo");
		$.addClass($.flag1, "lflag");
		$.addClass($.flag2, "lflag");
	} else {
		$.addClass($.portrait, "landscape portrait");
		$.removeClass($.thing1, "half");
		$.removeClass($.thing2, "half");
		$.removeClass($.info1, "linfo");
		$.removeClass($.info2, "linfo");
		$.removeClass($.flag1, "lflag");
		$.removeClass($.flag2, "lflag");
		$.addClass($.info1, "info");
		$.addClass($.info2, "info");
		$.addClass($.flag1, "flag");
		$.addClass($.flag2, "flag");
	}
}

if(OS_IOS)
	Ti.Gesture.addEventListener('orientationchange', applyOrientiation);

applyOrientiation();

