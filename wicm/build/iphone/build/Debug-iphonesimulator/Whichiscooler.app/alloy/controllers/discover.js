function Controller() {
    function goToPostScreen() {
        var controller = Alloy.createController("post");
        var win = controller.getView();
        Alloy.Globals.navgroup.open(win);
    }
    function handleSwipeEvent(e) {
        "left" == e.direction && goToPostScreen();
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
    this.__controllerPath = "discover";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#fff",
        modal: false,
        navBarHidden: true,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    onClose ? $.__views.win.addEventListener("close", onClose) : __defers["$.__views.win!close!onClose"] = true;
    handleSwipeEvent ? $.__views.win.addEventListener("swipe", handleSwipeEvent) : __defers["$.__views.win!swipe!handleSwipeEvent"] = true;
    $.__views.portrait = Ti.UI.createView({
        height: Ti.UI.FILL,
        visible: "false",
        id: "portrait"
    });
    $.__views.win.add($.__views.portrait);
    $.__views.logo = Ti.UI.createImageView({
        width: "276",
        height: "38",
        image: "/images/logo.png",
        id: "logo",
        top: "10"
    });
    $.__views.portrait.add($.__views.logo);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "center",
        height: Ti.UI.SIZE,
        color: "#808080",
        font: {
            fontSize: "20",
            fontFamily: "Helvetica Neue"
        },
        text: "Discover cool things\nshared by others.",
        top: "60",
        id: "__alloyId14"
    });
    $.__views.portrait.add($.__views.__alloyId14);
    $.__views.sampleApp = Ti.UI.createImageView({
        image: "/images/discover_sample_app.png",
        width: "204",
        height: "270",
        top: "130",
        id: "sampleApp"
    });
    $.__views.portrait.add($.__views.sampleApp);
    $.__views.__alloyId15 = Ti.UI.createButton({
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
        id: "__alloyId15"
    });
    $.__views.portrait.add($.__views.__alloyId15);
    goToPostScreen ? $.__views.__alloyId15.addEventListener("click", goToPostScreen) : __defers["$.__views.__alloyId15!click!goToPostScreen"] = true;
    try {
        $.__views.__alloyId15.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.__alloyId15!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.__alloyId15.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId15!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    $.__views.landscape = Ti.UI.createView({
        visible: "false",
        id: "landscape",
        layout: "horizontal"
    });
    $.__views.win.add($.__views.landscape);
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
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "center",
        height: Ti.UI.SIZE,
        color: "#808080",
        font: {
            fontSize: "20",
            fontFamily: "Helvetica Neue"
        },
        text: "Discover Cool Things \n Shared by others.",
        top: "110",
        id: "__alloyId16"
    });
    $.__views.column1.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createButton({
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
        id: "__alloyId17"
    });
    $.__views.column1.add($.__views.__alloyId17);
    goToPostScreen ? $.__views.__alloyId17.addEventListener("click", goToPostScreen) : __defers["$.__views.__alloyId17!click!goToPostScreen"] = true;
    try {
        $.__views.__alloyId17.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.__alloyId17!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.__alloyId17.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId17!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    $.__views.column2 = Ti.UI.createView({
        width: "45%",
        id: "column2"
    });
    $.__views.landscape.add($.__views.column2);
    $.__views.sampleApp = Ti.UI.createImageView({
        image: "/images/discover_sample_app.png",
        width: "204",
        height: "270",
        id: "sampleApp",
        top: "10"
    });
    $.__views.column2.add($.__views.sampleApp);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.win.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#FFF");
    Ti.Gesture.addEventListener("orientationchange", applyOrientiation);
    applyOrientiation();
    __defers["$.__views.win!close!onClose"] && $.__views.win.addEventListener("close", onClose);
    __defers["$.__views.win!swipe!handleSwipeEvent"] && $.__views.win.addEventListener("swipe", handleSwipeEvent);
    __defers["$.__views.__alloyId15!click!goToPostScreen"] && $.__views.__alloyId15.addEventListener("click", goToPostScreen);
    __defers["$.__views.__alloyId15!touchstart!Alloy.Globals.buttonFocused"] && $.__views.__alloyId15.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.__alloyId15!touchend!Alloy.Globals.buttonBlurred"] && $.__views.__alloyId15.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    __defers["$.__views.__alloyId17!click!goToPostScreen"] && $.__views.__alloyId17.addEventListener("click", goToPostScreen);
    __defers["$.__views.__alloyId17!touchstart!Alloy.Globals.buttonFocused"] && $.__views.__alloyId17.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.__alloyId17!touchend!Alloy.Globals.buttonBlurred"] && $.__views.__alloyId17.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;