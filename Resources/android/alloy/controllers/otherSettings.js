function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "otherSettings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.otherSettings = Ti.UI.createView({
        id: "otherSettings"
    });
    $.__views.otherSettings && $.addTopLevelView($.__views.otherSettings);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        text: "Other Settings",
        id: "__alloyId84"
    });
    $.__views.otherSettings.add($.__views.__alloyId84);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;