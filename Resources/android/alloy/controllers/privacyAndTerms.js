function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "privacyAndTerms";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.about = Ti.UI.createScrollView({
        apiName: "Ti.UI.ScrollView",
        id: "about",
        height: "auto",
        bottom: "44",
        top: "0",
        classes: []
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    $.__views.portrait = Ti.UI.createView({
        apiName: "Ti.UI.View",
        id: "portrait",
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "90%",
        classes: []
    });
    $.__views.about.add($.__views.portrait);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        apiName: "Ti.UI.Label",
        classes: [ "title" ],
        text: "Privacy Policy...",
        id: "__alloyId89"
    });
    $.__views.portrait.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "We're going to sell your soul to the highest bidder.",
        id: "__alloyId90"
    });
    $.__views.portrait.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        apiName: "Ti.UI.Label",
        classes: [ "title" ],
        text: "Terms of Service...",
        id: "__alloyId91"
    });
    $.__views.portrait.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "What? We didn't think anyone would read this page.",
        id: "__alloyId92"
    });
    $.__views.portrait.add($.__views.__alloyId92);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;