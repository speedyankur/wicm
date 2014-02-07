var iOS7 = Alloy.Globals.isiOS7Plus();
$.login.top  = iOS7 ? 20 : 0;
Ti.UI.setBackgroundColor('#FFF');
var animation = require('alloy/animation');
function loginNow() {
	var username = $.email_p.value;
	var password = $.pass_p.value;
	//var username = "test@gmail.com";
	//var password = "test123";
	var data = "auth_key=" + Ti.Network.encodeURIComponent(username) + "&password=" + password;
	Alloy.Globals.loading.show('Logging in...', true);
	var xhr = Ti.Network.createHTTPClient();
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.open('POST', "http://limitless-eyrie-1080.herokuapp.com/auth/identity/callback/");
	xhr.onload = function(e) {
		var response = JSON.parse(this.responseText);
		Alloy.Globals.APIKey = response.current_user.api_key;

		Alloy.Globals.loading.hide();
		$.login.close();
	};
	xhr.onerror = function(e) {
		Alloy.Globals.loading.hide();	
		if (this.status == 0) {
			alert("Network not avaiable, please try again later");
		} else if (this.status == 2) {
			alert("The request timed out, please try again later");
		} else if (this.status == 500 || this.status == 404) {
			animation.shake($.fieldsView_p, 500, function(e){
				alert("Invalid Email/Password, please try again");
			});
		}

	};
	xhr.send(data);

}
function skipNow(){
	$.login.close();
}
function goToMain() {
	var controller = Alloy.createController('baseWindow');
	var baseWindow = controller.getView();
	if (OS_IOS)
		Alloy.Globals.navgroup.open(baseWindow);
	else
		baseWindow.open();
};
function closingWindowAnimationforAndroid() {
	$.login.close({
		activityExitAnimation : Ti.Android.R.anim.slide_out_right
	});
}

/*
$.email_p.addEventListener('focus', function(){
$.email_p.borderColor = "#519dba";
$.emailIcon.image = "/images/email_icon_focus.png";
});
$.email_p.addEventListener('blur', function(){
$.email_p.borderColor = "#ccc";
$.emailIcon.image = "/images/email_icon.png";
});
$.email_l.addEventListener('focus', function(){
$.email_l.borderColor = "#519dba";
$.emailIcon.image = "/images/email_icon_focus.png";
});
$.email_l.addEventListener('blur', function(){
$.email_l.borderColor = "#ccc";
$.emailIcon.image = "/images/email_icon.png";
});

$.pass.addEventListener('focus', function(){
$.pass.borderColor = "#519dba";
$.passIcon.image = "/images/pass_icon_focus.png";
});
$.pass.addEventListener('blur', function(){
$.pass.borderColor = "#ccc";
$.passIcon.image = "/images/pass_icon.png";
});
*/

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

function onOpen() {
	applyOrientiation();
	setTimeout(function() {
		$.email_p.blur();
		$.email_l.blur();
	}, 100);
};
