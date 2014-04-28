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
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    onClose ? $.__views.win.addEventListener("close", onClose) : __defers["$.__views.win!close!onClose"] = true;
    handleSwipeEvent ? $.__views.win.addEventListener("swipe", handleSwipeEvent) : __defers["$.__views.win!swipe!handleSwipeEvent"] = true;
    $.__views.portrait = Ti.UI.createView({
        id: "portrait"
    });
    $.__views.win.add($.__views.portrait);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        top: "10"
    });
    $.__views.portrait.add($.__views.logo);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        text: "Discover cool things\nshared by others.",
        top: "60",
        id: "__alloyId43"
    });
    $.__views.portrait.add($.__views.__alloyId43);
    $.__views.sampleApp = Ti.UI.createImageView({
        top: "130",
        id: "sampleApp"
    });
    $.__views.portrait.add($.__views.sampleApp);
    $.__views.__alloyId44 = Ti.UI.createButton({
        title: "Continue",
        width: "230",
        bottom: "20",
        id: "__alloyId44"
    });
    $.__views.portrait.add($.__views.__alloyId44);
    goToPostScreen ? $.__views.__alloyId44.addEventListener("click", goToPostScreen) : __defers["$.__views.__alloyId44!click!goToPostScreen"] = true;
    try {
        $.__views.__alloyId44.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.__alloyId44!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.__alloyId44.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId44!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    $.__views.landscape = Ti.UI.createView({
        id: "landscape",
        layout: "horizontal"
    });
    $.__views.win.add($.__views.landscape);
    $.__views.column1 = Ti.UI.createView({
        id: "column1"
    });
    $.__views.landscape.add($.__views.column1);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo",
        top: "40",
        width: "260",
        height: "35"
    });
    $.__views.column1.add($.__views.logo);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "Discover Cool Things \n Shared by others.",
        top: "110",
        id: "__alloyId45"
    });
    $.__views.column1.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createButton({
        title: "Continue",
        width: "230",
        bottom: "20",
        id: "__alloyId46"
    });
    $.__views.column1.add($.__views.__alloyId46);
    goToPostScreen ? $.__views.__alloyId46.addEventListener("click", goToPostScreen) : __defers["$.__views.__alloyId46!click!goToPostScreen"] = true;
    try {
        $.__views.__alloyId46.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    } catch (e) {
        __defers["$.__views.__alloyId46!touchstart!Alloy.Globals.buttonFocused"] = true;
    }
    try {
        $.__views.__alloyId46.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId46!touchend!Alloy.Globals.buttonBlurred"] = true;
    }
    $.__views.column2 = Ti.UI.createView({
        id: "column2"
    });
    $.__views.landscape.add($.__views.column2);
    $.__views.sampleApp = Ti.UI.createImageView({
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
    __defers["$.__views.__alloyId44!click!goToPostScreen"] && $.__views.__alloyId44.addEventListener("click", goToPostScreen);
    __defers["$.__views.__alloyId44!touchstart!Alloy.Globals.buttonFocused"] && $.__views.__alloyId44.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.__alloyId44!touchend!Alloy.Globals.buttonBlurred"] && $.__views.__alloyId44.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    __defers["$.__views.__alloyId46!click!goToPostScreen"] && $.__views.__alloyId46.addEventListener("click", goToPostScreen);
    __defers["$.__views.__alloyId46!touchstart!Alloy.Globals.buttonFocused"] && $.__views.__alloyId46.addEventListener("touchstart", Alloy.Globals.buttonFocused);
    __defers["$.__views.__alloyId46!touchend!Alloy.Globals.buttonBlurred"] && $.__views.__alloyId46.addEventListener("touchend", Alloy.Globals.buttonBlurred);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;