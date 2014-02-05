function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tableSectionHeaderView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId97 = Ti.UI.createView({
        height: "32",
        backgroundColor: "#bfd9e4",
        borderColor: "#FFF",
        id: "__alloyId97"
    });
    $.__views.label = Ti.UI.createLabel({
        top: "8",
        bottom: "6",
        left: "10",
        right: "10",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        color: "#808080",
        text: "",
        id: "label"
    });
    $.__views.__alloyId97.add($.__views.label);
    $.__views.tableSectionHeaderView = Ti.UI.createTableViewSection({
        headerView: $.__views.__alloyId97,
        id: "tableSectionHeaderView"
    });
    $.__views.tableSectionHeaderView && $.addTopLevelView($.__views.tableSectionHeaderView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.label.text = args.text || "";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;