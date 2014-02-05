function Controller() {
    function loginNow() {
        var username = $.email_p.value;
        var password = $.pass_p.value;
        var data = "auth_key=" + Ti.Network.encodeURIComponent(username) + "&password=" + password;
        Alloy.Globals.loading.show("Login now, Please wait..", true);
        var xhr = Ti.Network.createHTTPClient();
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.open("POST", "http://limitless-eyrie-1080.herokuapp.com/auth/identity/callback/");
        xhr.onload = function() {
            var response = JSON.parse(this.responseText);
            Alloy.Globals.APIKey = response.current_user.api_key;
            Alloy.Globals.loading.hide();
            $.login.close();
        };
        xhr.onerror = function() {
            Alloy.Globals.loading.hide();
            0 == this.status ? alert("Network not avaiable, please try again later") : 2 == this.status ? alert("The request timed out, please try again later") : (500 == this.status || 404 == this.status) && animation.shake($.fieldsView_p, 500, function() {
                alert("Invalid Email/Password, please try again");
            });
        };
        xhr.send(data);
    }
    function skipNow() {
        $.login.close();
    }
    function goToMain() {
        var controller = Alloy.createController("baseWindow");
        var baseWindow = controller.getView();
        Alloy.Globals.navgroup.open(baseWindow);
    }
    function closingWindowAnimationforAndroid() {
        $.login.close({
            activityExitAnimation: Ti.Android.R.anim.slide_out_right
        });
    }
    function onClose() {
        Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
    }
    function applyOrientiation() {
        var orientName = "portrait", lastOrientName = "landscape";
        if (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) {
            orientName = "landscape";
            lastOrientName = "portrait";
        }
        if ("landscape" == orientName) {
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
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow({
        id: "login",
        backgroundColor: "#FFF",
        modal: "false",
        navBarHidden: "true"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    onClose ? $.__views.login.addEventListener("close", onClose) : __defers["$.__views.login!close!onClose"] = true;
    onOpen ? $.__views.login.addEventListener("open", onOpen) : __defers["$.__views.login!open!onOpen"] = true;
    closingWindowAnimationforAndroid ? $.__views.login.addEventListener("android:back", closingWindowAnimationforAndroid) : __defers["$.__views.login!android:back!closingWindowAnimationforAndroid"] = true;
    $.__views.portrait = Ti.UI.createScrollView({
        layout: "vertical",
        id: "portrait",
        visible: "false"
    });
    $.__views.login.add($.__views.portrait);
    $.__views.__alloyId48 = Ti.UI.createImageView({
        image: "/images/logo.png",
        top: "20",
        width: "276",
        height: "38",
        id: "__alloyId48"
    });
    $.__views.portrait.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        color: "#808080",
        fontSize: "18",
        top: "10",
        text: "Sign in or create account with:",
        id: "__alloyId49"
    });
    $.__views.portrait.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: "52",
        width: Ti.UI.SIZE,
        top: "10",
        layout: "horizontal",
        id: "__alloyId50"
    });
    $.__views.portrait.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createButton({
        width: "52",
        height: "52",
        backgroundImage: "/images/fb_icon.png",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createButton({
        width: "52",
        height: "52",
        left: "32",
        backgroundImage: "/images/twt_icon.png",
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: "20",
        width: Ti.UI.SIZE,
        top: "10",
        layout: "horizontal",
        id: "__alloyId53"
    });
    $.__views.portrait.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        width: "52",
        height: "2",
        image: "/images/hrzntl1.png",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        color: "#808080",
        fontSize: "18",
        top: "-3",
        left: "8",
        text: "or",
        id: "__alloyId55"
    });
    $.__views.__alloyId53.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createImageView({
        width: "52",
        height: "2",
        left: "8",
        image: "/images/hrzntl1.png",
        id: "__alloyId56"
    });
    $.__views.__alloyId53.add($.__views.__alloyId56);
    $.__views.fieldsView_p = Ti.UI.createView({
        id: "fieldsView_p",
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL
    });
    $.__views.portrait.add($.__views.fieldsView_p);
    $.__views.__alloyId57 = Ti.UI.createView({
        height: "40",
        width: "72%",
        layout: "absolute",
        top: "0",
        id: "__alloyId57"
    });
    $.__views.fieldsView_p.add($.__views.__alloyId57);
    $.__views.emailIcon = Ti.UI.createImageView({
        id: "emailIcon",
        width: "40",
        height: "40",
        image: "/images/email_icon.png",
        left: "0"
    });
    $.__views.__alloyId57.add($.__views.emailIcon);
    $.__views.email_p = Ti.UI.createTextField({
        id: "email_p",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "39",
        value: "",
        borderRadius: "2",
        hintText: "Email",
        color: "black",
        fontSize: "16",
        borderColor: "#ccc",
        borderWidth: "1",
        paddingLeft: "10"
    });
    $.__views.__alloyId57.add($.__views.email_p);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: "40",
        width: "72%",
        layout: "absolute",
        top: "8",
        id: "__alloyId58"
    });
    $.__views.fieldsView_p.add($.__views.__alloyId58);
    $.__views.passIcon = Ti.UI.createImageView({
        id: "passIcon",
        width: "40",
        height: "40",
        image: "/images/pass_icon.png",
        left: "0"
    });
    $.__views.__alloyId58.add($.__views.passIcon);
    $.__views.pass_p = Ti.UI.createTextField({
        id: "pass_p",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "39",
        borderRadius: "2",
        hintText: "*********",
        color: "black",
        fontSize: "16",
        borderColor: "#ccc",
        borderWidth: "1",
        paddingLeft: "10",
        passwordMask: "true"
    });
    $.__views.__alloyId58.add($.__views.pass_p);
    $.__views.__alloyId60 = Ti.UI.createImageView({
        image: "/images/forgot_pass.png",
        top: "10",
        width: "111",
        height: "15",
        id: "__alloyId60"
    });
    $.__views.portrait.add($.__views.__alloyId60);
    $.__views.__alloyId62 = Ti.UI.createImageView({
        image: "/images/toc.png",
        top: "20",
        width: "220",
        height: "27",
        id: "__alloyId62"
    });
    $.__views.portrait.add($.__views.__alloyId62);
    $.__views.continue_button = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "8",
        backgroundImage: "none",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        id: "continue_button",
        title: "Continue",
        width: "229",
        height: "46",
        top: "10"
    });
    $.__views.portrait.add($.__views.continue_button);
    loginNow ? $.__views.continue_button.addEventListener("click", loginNow) : __defers["$.__views.continue_button!click!loginNow"] = true;
    try {
        $.__views.continue_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.continue_button!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.continue_button.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.continue_button!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    $.__views.skip_button = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "8",
        backgroundImage: "none",
        backgroundColor: "#808080",
        backgroundSelectedColor: "#000",
        id: "skip_button",
        title: "Skip this step",
        width: "229",
        height: "46",
        top: "10"
    });
    $.__views.portrait.add($.__views.skip_button);
    skipNow ? $.__views.skip_button.addEventListener("click", skipNow) : __defers["$.__views.skip_button!click!skipNow"] = true;
    try {
        $.__views.skip_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.skip_button!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.skip_button.addEventListener("touchend", Alloy.Globals.buttonBlurredGray);
    } catch (e) {
        __defers["$.__views.skip_button!touchend!Alloy.Globals.buttonBlurredGray"] = true;
    }
    $.__views.landscape = Ti.UI.createScrollView({
        id: "landscape",
        layout: "horizontal",
        visible: "false"
    });
    $.__views.login.add($.__views.landscape);
    $.__views.__alloyId63 = Ti.UI.createView({
        layout: "vertical",
        width: "50%",
        id: "__alloyId63"
    });
    $.__views.landscape.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        color: "#808080",
        fontSize: "18",
        top: "20",
        text: "Sign in or create account with:",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: "52",
        width: Ti.UI.SIZE,
        top: "10",
        layout: "horizontal",
        id: "__alloyId65"
    });
    $.__views.__alloyId63.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createButton({
        width: "52",
        height: "52",
        backgroundImage: "/images/fb_icon.png",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createButton({
        width: "52",
        height: "52",
        left: "32",
        backgroundImage: "/images/twt_icon.png",
        id: "__alloyId67"
    });
    $.__views.__alloyId65.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        height: "20",
        width: Ti.UI.SIZE,
        top: "10",
        layout: "horizontal",
        id: "__alloyId68"
    });
    $.__views.__alloyId63.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createImageView({
        width: "52",
        height: "2",
        image: "/images/hrzntl1.png",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        color: "#808080",
        fontSize: "18",
        top: "-3",
        left: "8",
        text: "or",
        id: "__alloyId70"
    });
    $.__views.__alloyId68.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createImageView({
        width: "52",
        height: "2",
        left: "8",
        image: "/images/hrzntl1.png",
        id: "__alloyId71"
    });
    $.__views.__alloyId68.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        height: "40",
        width: "90%",
        layout: "absolute",
        top: "20",
        id: "__alloyId72"
    });
    $.__views.__alloyId63.add($.__views.__alloyId72);
    $.__views.emailIcon = Ti.UI.createImageView({
        id: "emailIcon",
        width: "40",
        height: "40",
        image: "/images/email_icon.png",
        left: "0"
    });
    $.__views.__alloyId72.add($.__views.emailIcon);
    $.__views.email_l = Ti.UI.createTextField({
        id: "email_l",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "39",
        borderRadius: "2",
        hintText: "Email",
        color: "black",
        fontSize: "16",
        borderColor: "#ccc",
        borderWidth: "1",
        paddingLeft: "10"
    });
    $.__views.__alloyId72.add($.__views.email_l);
    $.__views.__alloyId73 = Ti.UI.createView({
        height: "40",
        width: "90%",
        layout: "absolute",
        top: "8",
        id: "__alloyId73"
    });
    $.__views.__alloyId63.add($.__views.__alloyId73);
    $.__views.passIcon = Ti.UI.createImageView({
        id: "passIcon",
        width: "40",
        height: "40",
        image: "/images/pass_icon.png",
        left: "0"
    });
    $.__views.__alloyId73.add($.__views.passIcon);
    $.__views.pass = Ti.UI.createTextField({
        id: "pass",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "39",
        borderRadius: "2",
        hintText: "*********",
        color: "black",
        fontSize: "16",
        borderColor: "#ccc",
        borderWidth: "1",
        paddingLeft: "10",
        passwordMask: "true"
    });
    $.__views.__alloyId73.add($.__views.pass);
    $.__views.__alloyId75 = Ti.UI.createImageView({
        image: "/images/forgot_pass.png",
        top: "10",
        width: "111",
        height: "15",
        id: "__alloyId75"
    });
    $.__views.__alloyId63.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        layout: "vertical",
        width: "50%",
        id: "__alloyId76"
    });
    $.__views.landscape.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createImageView({
        image: "/images/logo.png",
        top: "40",
        width: "218",
        height: "30",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId79 = Ti.UI.createImageView({
        image: "/images/toc.png",
        top: "40",
        width: "220",
        height: "27",
        id: "__alloyId79"
    });
    $.__views.__alloyId76.add($.__views.__alloyId79);
    $.__views.continue_button = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "8",
        backgroundImage: "none",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        id: "continue_button",
        title: "Contine",
        width: "229",
        height: "46",
        top: "10"
    });
    $.__views.__alloyId76.add($.__views.continue_button);
    goToMain ? $.__views.continue_button.addEventListener("click", goToMain) : __defers["$.__views.continue_button!click!goToMain"] = true;
    try {
        $.__views.continue_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.continue_button!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.continue_button.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.continue_button!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    $.__views.skip_button = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "8",
        backgroundImage: "none",
        backgroundColor: "#808080",
        backgroundSelectedColor: "#000",
        id: "skip_button",
        title: "Skip this step",
        width: "229",
        height: "46",
        top: "10"
    });
    $.__views.__alloyId76.add($.__views.skip_button);
    goToMain ? $.__views.skip_button.addEventListener("click", goToMain) : __defers["$.__views.skip_button!click!goToMain"] = true;
    try {
        $.__views.skip_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.skip_button!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.skip_button.addEventListener("touchend", Alloy.Globals.buttonBlurredGray);
    } catch (e) {
        __defers["$.__views.skip_button!touchend!Alloy.Globals.buttonBlurredGray"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.login.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#FFF");
    var animation = require("alloy/animation");
    Ti.Gesture.addEventListener("orientationchange", applyOrientiation);
    __defers["$.__views.login!close!onClose"] && $.__views.login.addEventListener("close", onClose);
    __defers["$.__views.login!open!onOpen"] && $.__views.login.addEventListener("open", onOpen);
    __defers["$.__views.login!android:back!closingWindowAnimationforAndroid"] && $.__views.login.addEventListener("android:back", closingWindowAnimationforAndroid);
    __defers["$.__views.continue_button!click!loginNow"] && $.__views.continue_button.addEventListener("click", loginNow);
    __defers["$.__views.continue_button!touchstart!Alloy.Globals.buttonFocused"] && $.__views.continue_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.continue_button!touchend!Alloy.Globals.buttonBlurred"] && $.__views.continue_button.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    __defers["$.__views.skip_button!click!skipNow"] && $.__views.skip_button.addEventListener("click", skipNow);
    __defers["$.__views.skip_button!touchstart!Alloy.Globals.buttonFocused"] && $.__views.skip_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.skip_button!touchend!Alloy.Globals.buttonBlurredGray"] && $.__views.skip_button.addEventListener("touchend", Alloy.Globals.buttonBlurredGray);
    __defers["$.__views.continue_button!click!goToMain"] && $.__views.continue_button.addEventListener("click", goToMain);
    __defers["$.__views.continue_button!touchstart!Alloy.Globals.buttonFocused"] && $.__views.continue_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.continue_button!touchend!Alloy.Globals.buttonBlurred"] && $.__views.continue_button.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    __defers["$.__views.skip_button!click!goToMain"] && $.__views.skip_button.addEventListener("click", goToMain);
    __defers["$.__views.skip_button!touchstart!Alloy.Globals.buttonFocused"] && $.__views.skip_button.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.skip_button!touchend!Alloy.Globals.buttonBlurredGray"] && $.__views.skip_button.addEventListener("touchend", Alloy.Globals.buttonBlurredGray);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;