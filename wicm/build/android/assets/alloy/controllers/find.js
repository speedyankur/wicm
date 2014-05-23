function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "find";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.find = Ti.UI.createView({
        id: "find",
        layout: "vertical",
        bottom: "45"
    });
    $.__views.find && $.addTopLevelView($.__views.find);
    $.__views.__alloyId35 = Ti.UI.createView({
        top: "1",
        height: "50",
        backgroundColor: "#E9E9E9",
        id: "__alloyId35"
    });
    $.__views.find.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTextField({
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
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.searchButton = Ti.UI.createButton({
        backgroundImage: "/images/btn_search.png",
        width: "60",
        height: "30",
        top: "10",
        bottom: "10",
        right: "10",
        id: "searchButton"
    });
    $.__views.__alloyId35.add($.__views.searchButton);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        separatorColor: "#fff"
    });
    $.__views.find.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var followingSection = Alloy.Globals.createTableSectionHeaderView("Following");
    for (i = 0; 3 > i; i++) {
        var args = {};
        args.leftImage = i % 2 ? "/images/image_holder_fem.png" : "/images/image_holder_mal.png";
        args.title = "Username " + i;
        var row = Alloy.createController("peopleRowItem", args).getView();
        followingSection.add(row);
    }
    data.push(followingSection);
    var followerSection = Alloy.Globals.createTableSectionHeaderView("Follower");
    for (i = 0; 3 > i; i++) {
        var args = {};
        args.leftImage = i % 2 ? "/images/image_holder_fem.png" : "/images/image_holder_mal.png";
        args.title = "Username " + i;
        var row = Alloy.createController("peopleRowItem", args).getView();
        followerSection.add(row);
    }
    data.push(followerSection);
    var otherSection = Alloy.Globals.createTableSectionHeaderView("Other Users");
    for (i = 0; 4 > i; i++) {
        var args = {};
        args.leftImage = i % 2 ? "/images/image_holder_fem.png" : "/images/image_holder_mal.png";
        args.title = "Username " + i;
        var row = Alloy.createController("peopleRowItem", args).getView();
        otherSection.add(row);
    }
    data.push(otherSection);
    $.tableView.setData(data);
    $.tableView.addEventListener("click", function() {
        var userWindow = Alloy.createController("userWindow").getView();
        userWindow.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;