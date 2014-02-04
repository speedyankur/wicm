function loadMyThings() {
	if (Alloy.Globals.APIKey) {
		Alloy.Globals.loading.show('Loading, Please wait..', true);
		var xhr = Ti.Network.createHTTPClient();
		xhr.open('GET', Alloy.Globals.serverPath + '/api/things/mine');
		xhr.setRequestHeader('Authorization', 'Token token=' + Alloy.Globals.APIKey);
		xhr.send();
		xhr.onload = function(e) {
			var myThings = JSON.parse(this.responseText);
			var topl = 0, topr = 0;
			_.each(myThings.result, function(element, index, list) {
				// We are looping through the returned models from the remote REST API
				// Implement your custom logic here
				var score = parseFloat(element.cool_score).toFixed(2);
				var args = {
					score : score,
					image : element.url
				};
				if ((index) % 2 == 0) {

					$.col1.add(Alloy.createController('thing', args).getView());

				} else {
					$.col2.add(Alloy.createController('thing', args).getView());
				}

			});
			Alloy.Globals.loading.hide();

		};
		xhr.onerror = function(e) {
			Ti.API.info("got some error");
			Alloy.Globals.loading.hide();

		}
	} else {
		Alloy.Globals.loginFirst(loadMyThings);
	}
}
loadMyThings();
function onTouchmove(e) {
	e.cancelBubble = true;
}

function onTouchstart(e) {
	e.cancelBubble = true;
}

function onTouchend(e) {
	e.cancelBubble = true;
}

function onSwipe(e) {
	e.cancelBubble = true;
}