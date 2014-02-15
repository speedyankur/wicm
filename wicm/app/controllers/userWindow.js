var iOS7 = Alloy.Globals.isiOS7Plus();
$.window.top = iOS7 ? 20 : 0;
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

for ( i = 0; i < 10; i++) {
	var score = "   CS : " + i;

	if ((i) % 2 == 0) {
		var args = {
			score : score,
			image : "/images/thing1.jpg"
		};
		$.col1.add(Alloy.createController('thing', args).getView());

	} else {
		var args = {
			score : score,
			image : "/images/thing2.jpg"
		};		
		$.col2.add(Alloy.createController('thing', args).getView());
	}
}
