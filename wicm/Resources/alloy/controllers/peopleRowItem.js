function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "peopleRowItem";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        color: "#808080",
        font: {
            fontSize: "16"
        },
        backgroundColor: "#eef5f8",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.leftImage && ($.row.leftImage = args.leftImage);
    args.action && ($.row.action = args.action);
    $.row.title = args.title || "";
    $.row.height = 50;
    $.row.rightImage = args.rightImage ? args.rightImage : "/images/arrow_right.png";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;