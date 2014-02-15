function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "linkedAccounts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.linkedAccounts = Ti.UI.createView({
        id: "linkedAccounts"
    });
    $.__views.linkedAccounts && $.addTopLevelView($.__views.linkedAccounts);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        separatorColor: "#fff"
    });
    $.__views.linkedAccounts.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var args = {};
    args.title = "Twitter";
    var row = Alloy.createController("peopleRowItem", args).getView();
    row.height = "50";
    data.push(row);
    args = {};
    args.title = "Facebook";
    var row = Alloy.createController("peopleRowItem", args).getView();
    row.height = "50";
    data.push(row);
    $.tableView.setData(data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;