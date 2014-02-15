function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menurow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundSelectedColor: "#666",
        selectedColor: "white",
        backgroundColor: "#eef5f8",
        height: "55",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId80 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId80"
    });
    $.__views.row.add($.__views.__alloyId80);
    $.__views.title = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "16"
        },
        left: "10",
        id: "title"
    });
    $.__views.__alloyId80.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title || "";
    $.row.customView = args.customView || "";
    $.row.headerTitle = args.title || "";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;