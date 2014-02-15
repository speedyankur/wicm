function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "accordianRows";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        left: "20",
        right: "20",
        font: {
            fontSize: "15"
        },
        color: "#808080",
        id: "row",
        backgroundColor: "#FFFFFF",
        height: "80"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.title = args.title || "";
    args.selected && ($.row.selected = args.selected);
    args.backgroundColor && ($.row.backgroundColor = args.backgroundColor);
    args.key && ($.row.key = args.key);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;