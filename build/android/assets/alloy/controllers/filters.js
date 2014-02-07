function Controller() {
    function __alloyId33(e) {
        if (e && e.fromAdapter) return;
        __alloyId33.opts || {};
        var models = __alloyId32.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId29 = models[i];
            __alloyId29.__transform = {};
            var __alloyId31 = Alloy.createController("filterRowItem", {
                $model: __alloyId29,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId31.getViewEx({
                recurse: true
            }));
        }
        $.__views.tableView.setData(rows);
    }
    function editFilter(filter) {
        var editFilterWindow = Alloy.createController("editFilter", filter).getView();
        editFilterWindow.open();
    }
    function newFilter() {
        var editFilterWindow = Alloy.createController("newFilter").getView();
        editFilterWindow.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "filters";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.filters = Ti.UI.createView({
        id: "filters",
        bottom: "45"
    });
    $.__views.filters && $.addTopLevelView($.__views.filters);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        bottom: "50",
        separatorColor: "#fff"
    });
    $.__views.filters.add($.__views.tableView);
    var __alloyId32 = Alloy.Collections["filters"] || filters;
    __alloyId32.on("fetch destroy change add remove reset", __alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        height: "50",
        bottom: "0",
        backgroundColor: "#E7E7E7",
        left: "0",
        right: "0",
        id: "__alloyId34"
    });
    $.__views.filters.add($.__views.__alloyId34);
    $.__views.next = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "40",
        top: "5",
        id: "next",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        title: "Create New Filter",
        width: "150"
    });
    $.__views.__alloyId34.add($.__views.next);
    newFilter ? $.__views.next.addEventListener("click", newFilter) : __defers["$.__views.next!click!newFilter"] = true;
    exports.destroy = function() {
        __alloyId32.off("fetch destroy change add remove reset", __alloyId33);
    };
    _.extend($, $.__views);
    var filters = Alloy.Collections.filters;
    filters.fetch();
    $.tableView.addEventListener("click", function(e) {
        switch (e.source.id) {
          case "filterEdit":
            Ti.API.info("edit filter -" + e.row.model.filterName);
            editFilter(e.row.model);
            break;

          case "filterLabel":
          case "row":
            Ti.API.info("label or row clicked-" + e.source.id);
            Alloy.Globals.activeFilterRow.setBackgroundColor(Alloy.Globals.normalFilterRowColor);
            e.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
            Alloy.Globals.activeFilterRow = e.row;
            Alloy.Globals.setSelectedFilter(e.row.model.id);
        }
    });
    __defers["$.__views.next!click!newFilter"] && $.__views.next.addEventListener("click", newFilter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;