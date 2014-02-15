function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "thing";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.thing = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: "5",
        right: "5",
        top: "5",
        backgroundColor: "#EEEEEE",
        borderRadius: "5",
        layout: "vertical",
        id: "thing"
    });
    $.__views.thing && $.addTopLevelView($.__views.thing);
    $.__views.thingImage = Ti.UI.createImageView({
        top: "4",
        left: "4",
        right: "4",
        id: "thingImage",
        "with": "100%"
    });
    $.__views.thing.add($.__views.thingImage);
    $.__views.thingScore = Ti.UI.createLabel({
        height: "30",
        textAlign: "center",
        width: Ti.UI.FILL,
        color: "#000",
        font: {
            fontSize: "13",
            fontFamily: "Helvetica"
        },
        id: "thingScore"
    });
    $.__views.thing.add($.__views.thingScore);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.thingImage.image = args.image;
    $.thingScore.text = args.score || "";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;