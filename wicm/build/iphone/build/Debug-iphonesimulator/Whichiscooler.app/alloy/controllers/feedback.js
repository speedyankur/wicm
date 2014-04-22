function Controller() {
    function goToUV() {
        Ti.Platform.openURL("http://wic.uservoice.com");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "feedback";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feedback = Ti.UI.createView({
        id: "feedback",
        height: "auto"
    });
    $.__views.feedback && $.addTopLevelView($.__views.feedback);
    $.__views.portrait = Ti.UI.createView({
        id: "portrait",
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "50"
    });
    $.__views.feedback.add($.__views.portrait);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "24"
        },
        color: "#808080",
        text: "Please visit",
        textAlign: "center",
        id: "__alloyId22"
    });
    $.__views.portrait.add($.__views.__alloyId22);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        image: "/images/feedback_txt_v.png",
        width: "184",
        height: "22",
        id: "__alloyId24"
    });
    $.__views.portrait.add($.__views.__alloyId24);
    goToUV ? $.__views.__alloyId24.addEventListener("click", goToUV) : __defers["$.__views.__alloyId24!click!goToUV"] = true;
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: "24"
        },
        color: "#808080",
        text: "to post new ideas",
        textAlign: "center",
        id: "__alloyId25"
    });
    $.__views.portrait.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontSize: "24"
        },
        color: "#808080",
        text: "and leave feedback.",
        textAlign: "center",
        id: "__alloyId26"
    });
    $.__views.portrait.add($.__views.__alloyId26);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId23!click!goToUV"] && $.__views.__alloyId23.addEventListener("click", goToUV);
    __defers["$.__views.__alloyId24!click!goToUV"] && $.__views.__alloyId24.addEventListener("click", goToUV);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;