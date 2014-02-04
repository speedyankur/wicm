var iOS7 = Alloy.Globals.isiOS7Plus();
$.window.top  = iOS7 ? 20 : 0;
Ti.UI.setBackgroundColor('#E9E9E9');
function goBack() {
	Ti.API.info("going back now");
	if (OS_IOS)
		Alloy.Globals.navgroup.close($.window, {
			animated : true
		});
	else {
		$.window.close();
	}

}

function postIt(e) {
	var args ={};
	args.image = e.source.image;
	var postImageWindow = Alloy.createController('postImageWindow',args).getView();

	if (OS_IOS)
		Alloy.Globals.navgroup.open(postImageWindow);
	else
		postImageWindow.open();
}
