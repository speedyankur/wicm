function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "filterRowItem";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: 50,
        font: {
            fontSize: "16"
        },
        backgroundColor: "#eef5f8",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.filterLabel = Ti.UI.createLabel({
        left: 10,
        right: 30,
        color: "#808080",
        text: "",
        id: "filterLabel"
    });
    $.__views.row.add($.__views.filterLabel);
    $.__views.filterEdit = Ti.UI.createButton({
        right: 10,
        height: 16,
        width: 16,
        backgroundImage: "/images/icon_edit.png",
        id: "filterEdit"
    });
    $.__views.row.add($.__views.filterEdit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $model && ($.row.model = $model.toJSON());
    Ti.API.info("$.row.model.filterName-" + $.row.model.filterName);
    "All Things" == $.row.model.filterName && ($.filterEdit.visible = false);
    if ($.row.model.id == Alloy.Globals.getSelectedFilter()) {
        $.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
        Alloy.Globals.activeFilterRow = $.row;
    }
    $.filterLabel.text = $.row.model.filterName || "";
    $.row.height = 50;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;