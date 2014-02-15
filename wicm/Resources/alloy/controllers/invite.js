function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "invite";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.invite = Ti.UI.createView({
        id: "invite"
    });
    $.__views.invite && $.addTopLevelView($.__views.invite);
    $.__views.__alloyId45 = Ti.UI.createView({
        height: "52",
        width: Ti.UI.SIZE,
        top: "50",
        layout: "horizontal",
        id: "__alloyId45"
    });
    $.__views.invite.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/fb_icon_sel.png",
        width: "52",
        height: "52",
        backgroundImage: "/images/fb_icon.png",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createButton({
        backgroundSelectedImage: "/images/twt_icon_sel.png",
        width: "52",
        height: "52",
        left: "32",
        backgroundImage: "/images/twt_icon.png",
        id: "__alloyId47"
    });
    $.__views.__alloyId45.add($.__views.__alloyId47);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;