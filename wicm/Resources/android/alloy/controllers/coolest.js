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
    this.__controllerPath = "coolest";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.coolest = Ti.UI.createView({
        id: "coolest",
        layout: "vertical",
        bottom: "45"
    });
    $.__views.coolest && $.addTopLevelView($.__views.coolest);
    onTouchmove ? $.__views.coolest.addEventListener("touchmove", onTouchmove) : __defers["$.__views.coolest!touchmove!onTouchmove"] = true;
    onTouchstart ? $.__views.coolest.addEventListener("touchstart", onTouchstart) : __defers["$.__views.coolest!touchstart!onTouchstart"] = true;
    onTouchend ? $.__views.coolest.addEventListener("touchend", onTouchend) : __defers["$.__views.coolest!touchend!onTouchend"] = true;
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        layout: "horizontal"
    });
    $.__views.coolest.add($.__views.scrollView);
    $.__views.col1 = Ti.UI.createView({
        id: "col1",
        width: "45%",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.col1);
    $.__views.col2 = Ti.UI.createView({
        id: "col2",
        width: "55%",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.col2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.things;
    Alloy.Globals.loading.show("Loading, Please wait..", true);
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", Alloy.Globals.serverPath + "/api/things/coolest");
    xhr.send();
    xhr.onload = function() {
        var myThings = JSON.parse(this.responseText);
        _.each(myThings.result, function(element, index) {
            var score = parseFloat(element.cool_score).toFixed(2);
            var args = {
                score: score,
                image: element.url
            };
            0 == index % 2 ? $.col1.add(Alloy.createController("thing", args).getView()) : $.col2.add(Alloy.createController("thing", args).getView());
        });
        Alloy.Globals.loading.hide();
    };
    xhr.onerror = function() {
        Ti.API.info("got some error");
        Alloy.Globals.loading.hide();
    };
    __defers["$.__views.coolest!touchmove!onTouchmove"] && $.__views.coolest.addEventListener("touchmove", onTouchmove);
    __defers["$.__views.coolest!touchstart!onTouchstart"] && $.__views.coolest.addEventListener("touchstart", onTouchstart);
    __defers["$.__views.coolest!touchend!onTouchend"] && $.__views.coolest.addEventListener("touchend", onTouchend);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;