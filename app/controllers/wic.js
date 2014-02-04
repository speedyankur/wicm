Alloy.Globals.fetchNextMatch = function(){
	var controller = Alloy.createController('wicMatch');
	var matchView = controller.getView();
	$.scrollableView.addView(matchView);
	$.scrollableView.scrollToView(matchView);
}
Alloy.Globals.removeCurrentMatch = function(){	
	Ti.API.info("total views before--"+$.scrollableView.views.length);
	$.scrollableView.removeView($.scrollableView.views.length - 1);
	Ti.API.info("total views after--"+$.scrollableView.views.length);
	
}
function onTouchmove(e) {
	e.cancelBubble = true;
}
function onTouchstart(e) {
	e.cancelBubble = true;
}
function onTouchend(e) {
	e.cancelBubble = true;
}
