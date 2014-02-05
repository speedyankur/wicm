function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "followers";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.followers = Ti.UI.createView({
        id: "followers",
        layout: "vertical",
        bottom: "45"
    });
    $.__views.followers && $.addTopLevelView($.__views.followers);
    $.__views.__alloyId38 = Ti.UI.createView({
        top: "1",
        height: "50",
        backgroundColor: "#E9E9E9",
        id: "__alloyId38"
    });
    $.__views.followers.add($.__views.__alloyId38);
    $.__views.__alloyId40 = Ti.UI.createTextField({
        color: "#808080",
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        autocorrect: "false",
        hintText: "Search",
        paddingLeft: "20",
        left: "10",
        height: "30",
        top: "10",
        bottom: "10",
        right: "90",
        borderRadius: "15",
        backgroundColor: "#FFF",
        id: "__alloyId40"
    });
    $.__views.__alloyId38.add($.__views.__alloyId40);
    $.__views.searchButton = Ti.UI.createButton({
        backgroundImage: "/images/btn_search.png",
        width: "60",
        height: "30",
        top: "10",
        bottom: "10",
        right: "10",
        id: "searchButton"
    });
    $.__views.__alloyId38.add($.__views.searchButton);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        separatorColor: "#fff"
    });
    $.__views.followers.add($.__views.tableView);
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
        Alloy.Globals.navgroup.open(userWindow);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;