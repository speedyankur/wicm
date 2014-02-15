function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "following";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.following = Ti.UI.createView({
        id: "following",
        layout: "vertical",
        bottom: "45"
    });
    $.__views.following && $.addTopLevelView($.__views.following);
    $.__views.__alloyId39 = Ti.UI.createView({
        top: "1",
        height: "50",
        backgroundColor: "#E9E9E9",
        id: "__alloyId39"
    });
    $.__views.following.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTextField({
        color: "#808080",
        autocorrect: "false",
        hintText: "Search",
        left: "10",
        height: "35",
        top: "7",
        bottom: "7",
        right: "90",
        borderRadius: "30",
        backgroundColor: "#FFF",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.searchButton = Ti.UI.createButton({
        backgroundImage: "/images/btn_search.png",
        width: "60",
        height: "30",
        top: "10",
        bottom: "10",
        right: "10",
        id: "searchButton"
    });
    $.__views.__alloyId39.add($.__views.searchButton);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        separatorColor: "#fff"
    });
    $.__views.following.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (i = 0; 10 > i; i++) {
        var args = {};
        args.leftImage = i % 2 ? "/images/image_holder_fem.png" : "/images/image_holder_mal.png";
        args.title = "Username " + i;
        var row = Alloy.createController("peopleRowItem", args).getView();
        data.push(row);
    }
    $.tableView.setData(data);
    $.tableView.addEventListener("click", function() {
        var userWindow = Alloy.createController("userWindow").getView();
        userWindow.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;