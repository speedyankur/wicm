function Controller() {
    function goBack() {
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    function postIt(e) {
        var args = {};
        args.image = e.source.image;
        var postImageWindow = Alloy.createController("postImageWindow", args).getView();
        Alloy.Globals.navgroup.open(postImageWindow);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "whichThing";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        backgroundColor: "#FFF",
        modal: "false",
        navBarHidden: "true"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.navview = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "44",
        backgroundColor: "#E9E9E9",
        zIndex: "5",
        id: "navview"
    });
    $.__views.window.add($.__views.navview);
    $.__views.viewHeaderLabel = Ti.UI.createLabel({
        left: "10%",
        right: "10%",
        top: "0",
        height: "44",
        color: "#808080",
        textAlign: "center",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Which thing?",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.cancel = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "12",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "30",
        right: "10",
        id: "cancel",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        title: "Cancel",
        width: "60"
    });
    $.__views.navview.add($.__views.cancel);
    goBack ? $.__views.cancel.addEventListener("click", goBack) : __defers["$.__views.cancel!click!goBack"] = true;
    $.__views.__alloyId111 = Ti.UI.createScrollView({
        layout: "vertical",
        top: "60",
        id: "__alloyId111"
    });
    $.__views.window.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createImageView({
        top: "5",
        left: "5",
        right: "5",
        image: "/images/thing1.png",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    postIt ? $.__views.__alloyId112.addEventListener("click", postIt) : __defers["$.__views.__alloyId112!click!postIt"] = true;
    try {
        $.__views.__alloyId112.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.__alloyId112!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.__alloyId112.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId112!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    $.__views.__alloyId113 = Ti.UI.createImageView({
        top: "5",
        left: "5",
        right: "5",
        image: "/images/thing2.png",
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    postIt ? $.__views.__alloyId113.addEventListener("click", postIt) : __defers["$.__views.__alloyId113!click!postIt"] = true;
    try {
        $.__views.__alloyId113.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.__alloyId113!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.__alloyId113.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId113!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    $.__views.__alloyId114 = Ti.UI.createImageView({
        top: "5",
        left: "5",
        right: "5",
        image: "/images/thing1.png",
        id: "__alloyId114"
    });
    $.__views.__alloyId111.add($.__views.__alloyId114);
    postIt ? $.__views.__alloyId114.addEventListener("click", postIt) : __defers["$.__views.__alloyId114!click!postIt"] = true;
    try {
        $.__views.__alloyId114.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.__alloyId114!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.__alloyId114.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId114!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    $.__views.__alloyId115 = Ti.UI.createImageView({
        top: "5",
        left: "5",
        right: "5",
        image: "/images/thing2.png",
        id: "__alloyId115"
    });
    $.__views.__alloyId111.add($.__views.__alloyId115);
    postIt ? $.__views.__alloyId115.addEventListener("click", postIt) : __defers["$.__views.__alloyId115!click!postIt"] = true;
    try {
        $.__views.__alloyId115.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.__alloyId115!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.__alloyId115.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId115!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    $.__views.__alloyId116 = Ti.UI.createImageView({
        top: "5",
        left: "5",
        right: "5",
        image: "/images/thing1.png",
        id: "__alloyId116"
    });
    $.__views.__alloyId111.add($.__views.__alloyId116);
    postIt ? $.__views.__alloyId116.addEventListener("click", postIt) : __defers["$.__views.__alloyId116!click!postIt"] = true;
    try {
        $.__views.__alloyId116.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.__alloyId116!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.__alloyId116.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId116!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    $.__views.__alloyId117 = Ti.UI.createImageView({
        top: "5",
        left: "5",
        right: "5",
        image: "/images/thing2.png",
        id: "__alloyId117"
    });
    $.__views.__alloyId111.add($.__views.__alloyId117);
    postIt ? $.__views.__alloyId117.addEventListener("click", postIt) : __defers["$.__views.__alloyId117!click!postIt"] = true;
    try {
        $.__views.__alloyId117.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.__alloyId117!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.__alloyId117.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.__alloyId117!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.window.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#E9E9E9");
    __defers["$.__views.cancel!click!goBack"] && $.__views.cancel.addEventListener("click", goBack);
    __defers["$.__views.__alloyId112!click!postIt"] && $.__views.__alloyId112.addEventListener("click", postIt);
    __defers["$.__views.__alloyId112!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.__alloyId112.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.__alloyId112!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.__alloyId112.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    __defers["$.__views.__alloyId113!click!postIt"] && $.__views.__alloyId113.addEventListener("click", postIt);
    __defers["$.__views.__alloyId113!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.__alloyId113.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.__alloyId113!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.__alloyId113.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    __defers["$.__views.__alloyId114!click!postIt"] && $.__views.__alloyId114.addEventListener("click", postIt);
    __defers["$.__views.__alloyId114!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.__alloyId114.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.__alloyId114!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.__alloyId114.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    __defers["$.__views.__alloyId115!click!postIt"] && $.__views.__alloyId115.addEventListener("click", postIt);
    __defers["$.__views.__alloyId115!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.__alloyId115.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.__alloyId115!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.__alloyId115.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    __defers["$.__views.__alloyId116!click!postIt"] && $.__views.__alloyId116.addEventListener("click", postIt);
    __defers["$.__views.__alloyId116!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.__alloyId116.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.__alloyId116!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.__alloyId116.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    __defers["$.__views.__alloyId117!click!postIt"] && $.__views.__alloyId117.addEventListener("click", postIt);
    __defers["$.__views.__alloyId117!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.__alloyId117.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.__alloyId117!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.__alloyId117.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;