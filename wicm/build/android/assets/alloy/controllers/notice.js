function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notice";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.notice = Ti.UI.createView({
        id: "notice"
    });
    $.__views.notice && $.addTopLevelView($.__views.notice);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        separatorColor: "#fff"
    });
    $.__views.notice.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var section1 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
        text: "Create Filters"
    });
    section1.collapse = false;
    var args = {};
    args.title = "Be sure to create filters to control the content that is displayed in game mode.";
    var row = Alloy.createController("accordianRows", args).getView();
    section1.add(row);
    data.push(section1);
    var section2 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
        text: "Welcome"
    });
    section2.collapse = false;
    for (i = 0; 3 > i; i++) {
        var args = {};
        args.title = "Welcome Message " + i;
        var row = Alloy.createController("accordianRows", args).getView();
        section2.add(row);
    }
    data.push(section2);
    $.tableView.setData(data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;