function Controller() {
    function onTouchmove(e) {
        e.cancelBubble = true;
    }
    function onTouchstart(e) {
        e.cancelBubble = true;
    }
    function onTouchend(e) {
        e.cancelBubble = true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "wic";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.wic = Ti.UI.createView({
        id: "wic",
        bottom: "44"
    });
    $.__views.wic && $.addTopLevelView($.__views.wic);
    onTouchmove ? $.__views.wic.addEventListener("touchmove", onTouchmove) : __defers["$.__views.wic!touchmove!onTouchmove"] = true;
    onTouchstart ? $.__views.wic.addEventListener("touchstart", onTouchstart) : __defers["$.__views.wic!touchstart!onTouchstart"] = true;
    onTouchend ? $.__views.wic.addEventListener("touchend", onTouchend) : __defers["$.__views.wic!touchend!onTouchend"] = true;
    var __alloyId120 = [];
    $.__views.__alloyId121 = Alloy.createController("wicMatch", {
        id: "__alloyId121",
        __parentSymbol: __parentSymbol
    });
    __alloyId120.push($.__views.__alloyId121.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId120,
        id: "scrollableView",
        showPagingControl: "false"
    });
    $.__views.wic.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.fetchNextMatch = function() {
        var controller = Alloy.createController("wicMatch");
        var matchView = controller.getView();
        $.scrollableView.addView(matchView);
        $.scrollableView.scrollToView(matchView);
    };
    Alloy.Globals.removeCurrentMatch = function() {
        Ti.API.info("total views before--" + $.scrollableView.views.length);
        $.scrollableView.removeView($.scrollableView.views.length - 1);
        Ti.API.info("total views after--" + $.scrollableView.views.length);
    };
    __defers["$.__views.wic!touchmove!onTouchmove"] && $.__views.wic.addEventListener("touchmove", onTouchmove);
    __defers["$.__views.wic!touchstart!onTouchstart"] && $.__views.wic.addEventListener("touchstart", onTouchstart);
    __defers["$.__views.wic!touchend!onTouchend"] && $.__views.wic.addEventListener("touchend", onTouchend);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;