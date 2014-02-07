function Controller() {
    function createSection(i) {
        var section = Alloy.Globals.createTableSectionHeaderView(menuData[i].item.header);
        var length = menuData[i].item.rows.length;
        for (var j = 0; length > j; j++) {
            var args = {
                title: menuData[i].item.rows[j],
                customView: menuData[i].item.views[j]
            };
            section.add(Alloy.createController("menurow", args).getView());
        }
        return section;
    }
    function rowSelect(e) {
        lastRowSelected && lastRowSelected.setBackgroundColor("#eef5f8");
        e.row.setBackgroundColor("#CCDDE4");
        lastRowSelected = e.row;
        if ("logout" == e.row.customView) {
            Alloy.Globals.APIKey = null;
            $.win.close();
            return;
        }
        if (currentView.id != e.row.customView) {
            $.ds.contentview.remove(currentView);
            currentView = Alloy.createController(e.row.customView).getView();
            $.ds.contentview.add(currentView);
            $.ds.logo.hide();
            $.ds.viewHeaderLabel.show();
            $.ds.viewHeaderLabel.text = e.row.headerTitle;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "baseWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        modal: false,
        navBarHidden: true,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.ds = Alloy.createWidget("ds.slideMenu", "widget", {
        id: "ds",
        __parentSymbol: $.__views.win
    });
    $.__views.ds.setParent($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.win.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#E9E9E9");
    var leftData = [];
    var menuData = [ {
        item: {
            header: "Discover",
            rows: [ "Whichiscooler", "The Coolest", "My Things", "Filters" ],
            views: [ "wic", "coolest", "things", "filters" ]
        }
    }, {
        item: {
            header: "Post",
            rows: [ "Add Things" ],
            views: [ "addthings" ]
        }
    }, {
        item: {
            header: "Connect",
            rows: [ "Following", "Followers", "Find Friends", "Invite Friends", "Notifications" ],
            views: [ "following", "followers", "find", "invite", "notice" ]
        }
    }, {
        item: {
            header: "Settings",
            rows: [ "Profile", "Linked Accounts", "Feedback", "About", "Privacy & Terms", "Logout" ],
            views: [ "profile", "linkedAccounts", "feedback", "about", "privacy&Terms", "logout" ]
        }
    } ];
    var lastRowSelected;
    for (var i = 0; menuData.length > i; i++) leftData[i] = createSection(i);
    $.ds.leftTableView.data = leftData;
    $.ds.filterButton.addEventListener("click", function() {
        if ("filters" != currentView.id) {
            $.ds.contentview.remove(currentView);
            currentView = Alloy.createController("filters").getView();
            $.ds.contentview.add(currentView);
            $.ds.logo.hide();
            $.ds.viewHeaderLabel.show();
            $.ds.viewHeaderLabel.text = "Filter";
        }
    });
    var currentView = Alloy.createController("wic").getView();
    $.ds.contentview.add(currentView);
    $.ds.leftTableView.addEventListener("click", function(e) {
        rowSelect(e);
        $.ds.toggleLeftSlider();
    });
    $.ds.rightButton.hide();
    Ti.App.addEventListener("sliderToggled", function(e) {
        if ("right" == e.direction) {
            $.ds.leftMenu.zIndex = 2;
            $.ds.rightMenu.zIndex = 1;
        } else if ("left" == e.direction) {
            $.ds.leftMenu.zIndex = 1;
            $.ds.rightMenu.zIndex = 2;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;