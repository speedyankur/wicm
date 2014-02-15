var iOS7 = Alloy.Globals.isiOS7Plus();
$.win.top  = iOS7 ? 20 : 0;
Ti.UI.setBackgroundColor('#FFF');
function goToPostScreen() {

	var controller = Alloy.createController('post');
	var win = controller.getView();
	if (OS_IOS)
		Alloy.Globals.navgroup.open(win);
	else
		win.open({
			activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right
		});

}

function handleSwipeEvent(e) {

	if (e.direction == "left")
		goToPostScreen();

}

//Add our main Orientation Event listener
Ti.Gesture.addEventListener("orientationchange", applyOrientiation);
function onClose() {
	Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
}

function applyOrientiation() {

	// defaults
	var orientName = "portrait", lastOrientName = "landscape";

	// override defaults based on orientation
	if ((Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT) || (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT)) {
		orientName = "landscape";
		lastOrientName = "portrait";
	}
	if (orientName == "landscape") {
		$.portrait.hide();
		$.landscape.show();
	} else {
		$.portrait.show();
		$.landscape.hide();
	}

}

if (OS_IOS)
	applyOrientiation();
else {
	setTimeout(function() {
		applyOrientiation();
	}, 300);
};