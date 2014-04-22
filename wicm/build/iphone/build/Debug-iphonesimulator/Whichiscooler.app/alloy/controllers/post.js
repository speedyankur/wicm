function Controller() {
    function goToLogin() {
        var controller = Alloy.createController("baseWindow");
        var baseWindow = controller.getView();
        Alloy.Globals.navgroup.open(baseWindow);
    }
    function closingWindowAnimationforAndroid() {
        $.post.close({
            activityExitAnimation: Ti.Android.R.anim.slide_out_right
        });
    }
    function handleSwipeEvent(e) {
        "right" == e.direction ? Alloy.Globals.navgroup.close($.post, {
            animated: true
        }) : "left" == e.direction && goToLogin();
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "post";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.post = Ti.UI.createWindow({
        backgroundColor: "#fff",
        modal: false,
        navBarHidden: true,
        id: "post"
    });
    $.__views.post && $.addTopLevelView($.__views.post);
    handleSwipeEvent ? $.__views.post.addEventListener("swipe", handleSwipeEvent) : __defers["$.__views.post!swipe!handleSwipeEvent"] = true;
    onClose ? $.__views.post.addEventListener("close", onClose) : __defers["$.__views.post!close!onClose"] = true;
    closingWindowAnimationforAndroid ? $.__views.post.addEventListener("android:back", closingWindowAnimationforAndroid) : __defers["$.__views.post!android:back!closingWindowAnimationforAndroid"] = true;
    $.__views.portrait = Ti.UI.createView({
        height: Ti.UI.FILL,
        visible: "false",
        id: "portrait"
    });
    $.__views.post.add($.__views.portrait);
    $.__views.logo = Ti.UI.createImageView({
        width: "276",
        height: "38",
        image: "/images/logo.png",
        id: "logo",
        top: "10"
    });
    $.__views.portrait.add($.__views.logo);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "center",
        height: Ti.UI.SIZE,
        color: "#808080",
        font: {
            fontSize: "20",
            fontFamily: "Helvetica Neue"
        },
        text: "Post cool things to see\nwhat others think.",
        top: "60",
        id: "__alloyId84"
    });
    $.__views.portrait.add($.__views.__alloyId84);
    $.__views.shareIcon = Ti.UI.createImageView({
        image: "/images/post_share_icon.png",
        width: "204",
        height: "270",
        top: "130",
        id: "shareIcon"
    });
    $.__views.portrait.add($.__views.shareIcon);
    $.__views.__alloyId85 = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "8",
        backgroundImage: "none",
        height: "46",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        title: "Continue",
        width: "230",
        bottom: "20",
        id: "__alloyId85"
    });
    $.__views.portrait.add($.__views.__alloyId85);
    try {
        $.__views.__alloyId85.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.__alloyId85!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.__alloyId85.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId85!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    goToLogin ? $.__views.__alloyId85.addEventListener("click", goToLogin) : __defers["$.__views.__alloyId85!click!goToLogin"] = true;
    $.__views.landscape = Ti.UI.createView({
        visible: "false",
        id: "landscape",
        layout: "horizontal"
    });
    $.__views.post.add($.__views.landscape);
    $.__views.column1 = Ti.UI.createView({
        width: "55%",
        id: "column1"
    });
    $.__views.landscape.add($.__views.column1);
    $.__views.logo = Ti.UI.createImageView({
        width: "260",
        height: "35",
        image: "/images/logo.png",
        id: "logo",
        top: "40"
    });
    $.__views.column1.add($.__views.logo);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "center",
        height: Ti.UI.SIZE,
        color: "#808080",
        font: {
            fontSize: "20",
            fontFamily: "Helvetica Neue"
        },
        text: "Post cool things and\n what others think.",
        top: "110",
        id: "__alloyId86"
    });
    $.__views.column1.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "8",
        backgroundImage: "none",
        height: "46",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        title: "Continue",
        width: "230",
        bottom: "20",
        id: "__alloyId87"
    });
    $.__views.column1.add($.__views.__alloyId87);
    try {
        $.__views.__alloyId87.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.__alloyId87!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.__alloyId87.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId87!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    goToLogin ? $.__views.__alloyId87.addEventListener("click", goToLogin) : __defers["$.__views.__alloyId87!click!goToLogin"] = true;
    $.__views.column2 = Ti.UI.createView({
        width: "45%",
        id: "column2"
    });
    $.__views.landscape.add($.__views.column2);
    $.__views.shareIcon = Ti.UI.createImageView({
        image: "/images/post_share_icon.png",
        width: "204",
        height: "270",
        id: "shareIcon",
        top: "10"
    });
    $.__views.column2.add($.__views.shareIcon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.post.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#FFF");
    Ti.Gesture.addEventListener("orientationchange", applyOrientiation);
    applyOrientiation();
    __defers["$.__views.post!swipe!handleSwipeEvent"] && $.__views.post.addEventListener("swipe", handleSwipeEvent);
    __defers["$.__views.post!close!onClose"] && $.__views.post.addEventListener("close", onClose);
    __defers["$.__views.post!android:back!closingWindowAnimationforAndroid"] && $.__views.post.addEventListener("android:back", closingWindowAnimationforAndroid);
    __defers["$.__views.__alloyId85!touchstart!Alloy.Globals.buttonFocused"] && $.__views.__alloyId85.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.__alloyId85!touchend!Alloy.Globals.buttonBlurred"] && $.__views.__alloyId85.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    __defers["$.__views.__alloyId85!click!goToLogin"] && $.__views.__alloyId85.addEventListener("click", goToLogin);
    __defers["$.__views.__alloyId87!touchstart!Alloy.Globals.buttonFocused"] && $.__views.__alloyId87.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.__alloyId87!touchend!Alloy.Globals.buttonBlurred"] && $.__views.__alloyId87.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    __defers["$.__views.__alloyId87!click!goToLogin"] && $.__views.__alloyId87.addEventListener("click", goToLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;