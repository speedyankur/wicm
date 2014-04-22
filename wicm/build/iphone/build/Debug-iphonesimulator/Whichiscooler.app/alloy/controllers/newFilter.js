function Controller() {
    function goBack() {
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    function save() {
        filterData["filterName"] = $.filterName.value;
        Ti.API.info(JSON.stringify(filterData));
        var filter = Alloy.createModel("filter", filterData);
        filters.add(filter);
        filter.save();
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newFilter";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        backgroundColor: "#FFFFFF",
        modal: "false",
        navBarHidden: "true"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.navview = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "44",
        backgroundColor: "#E9E9E9",
        zIndex: "5",
        id: "navview"
    });
    $.__views.window.add($.__views.navview);
    $.__views.leftButton = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "/images/btn_back.png",
        backgroundSelectedImage: "none",
        height: "14",
        left: "10",
        top: "15",
        width: "30",
        zIndex: "10",
        id: "leftButton"
    });
    $.__views.navview.add($.__views.leftButton);
    goBack ? $.__views.leftButton.addEventListener("click", goBack) : __defers["$.__views.leftButton!click!goBack"] = true;
    $.__views.viewHeaderLabel = Ti.UI.createLabel({
        left: "10%",
        right: "10%",
        top: "0",
        height: "44",
        color: "#808080",
        textAlign: "center",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Filters",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.__alloyId79 = Ti.UI.createView({
        top: "44",
        bottom: "0",
        id: "__alloyId79"
    });
    $.__views.window.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        height: "50",
        top: "0",
        backgroundColor: "#CCDDE4",
        left: "0",
        right: "0",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.filterName = Ti.UI.createTextField({
        id: "filterName",
        value: "",
        hintText: "Filter name",
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        autocorrect: "false",
        paddingLeft: "20",
        left: "10",
        height: "30",
        right: "10",
        borderRadius: "5",
        backgroundColor: "#DBE7EC"
    });
    $.__views.__alloyId80.add($.__views.filterName);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        top: "50",
        bottom: "50",
        separatorColor: "#fff"
    });
    $.__views.__alloyId79.add($.__views.tableView);
    $.__views.__alloyId81 = Ti.UI.createView({
        height: "50",
        bottom: "0",
        backgroundColor: "#E7E7E7",
        left: "0",
        right: "0",
        id: "__alloyId81"
    });
    $.__views.__alloyId79.add($.__views.__alloyId81);
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
        backgroundSelectedColor: "#B8D9E5",
        title: "Save",
        width: "150"
    });
    $.__views.__alloyId81.add($.__views.next);
    save ? $.__views.next.addEventListener("click", save) : __defers["$.__views.next!click!save"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var filters = Alloy.Collections.filters;
    var filterData = {
        filterName: "",
        following: false,
        followers: false,
        everyone: false,
        last24hours: false,
        last7days: false,
        last30days: false,
        allTime: false,
        animals: false,
        architecture: false,
        automotive: false,
        design: false,
        gadgets: false,
        gaming: false,
        men: false,
        military: false,
        music: false,
        people: false,
        photography: false,
        places: false,
        science: false,
        sports: false,
        tattoos: false,
        technology: false,
        toys: false,
        weddings: false,
        women: false
    };
    var tags = [ {
        key: "animals",
        value: "Animals"
    }, {
        key: "architecture",
        value: "Architecture"
    }, {
        key: "automotive",
        value: "Automotive"
    }, {
        key: "design",
        value: "Design"
    }, {
        key: "gadgets",
        value: "Gadgets"
    }, {
        key: "gaming",
        value: "Gaming Literature"
    }, {
        key: "men",
        value: "Men’s Fashion"
    }, {
        key: "military",
        value: "Military & Weapons"
    }, {
        key: "music",
        value: "Music, Film, & Entertainment Nautical"
    }, {
        key: "people",
        value: "People"
    }, {
        key: "photography",
        value: "Photography"
    }, {
        key: "places",
        value: "Places"
    }, {
        key: "science",
        value: "Science & Nature"
    }, {
        key: "science",
        value: "Science & Nature"
    }, {
        key: "sports",
        value: "Sports & Outdoors"
    }, {
        key: "tattoos",
        value: "Tattoos"
    }, {
        key: "technology",
        value: "Technology"
    }, {
        key: "toys",
        value: "Toys"
    }, {
        key: "weddings",
        value: "Weddings"
    }, {
        key: "women",
        value: "Women’s Fashion"
    } ];
    var people = [ {
        key: "following",
        value: "Following"
    }, {
        key: "followers",
        value: "Followers"
    }, {
        key: "everyone",
        value: "Everyone"
    } ];
    var time = [ {
        key: "last7hours",
        value: "Last 24 Hours"
    }, {
        key: "last7days",
        value: "Last 7 Days"
    }, {
        key: "last30days",
        value: "Last 30 Days"
    }, {
        key: "allTime",
        value: "All Time"
    } ];
    var section2 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
        text: "People",
        backgroundColor: "#B8D9E5",
        backgroundImage: "/images/icon_people.png"
    });
    section2.collapse = false;
    for (var i = 0; people.length > i; i++) section2.add(Alloy.createController("accordianRows", {
        title: people[i].value,
        key: people[i].key,
        backgroundColor: "#ECF5F8"
    }).getView());
    data.push(section2);
    var section3 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
        text: "Time",
        backgroundColor: "#B8D9E5",
        backgroundImage: "/images/icon_time.png"
    });
    section3.collapse = false;
    for (var i = 0; time.length > i; i++) section3.add(Alloy.createController("accordianRows", {
        title: time[i].value,
        key: time[i].key,
        backgroundColor: "#ECF5F8"
    }).getView());
    data.push(section3);
    var section1 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
        text: "Tags",
        backgroundColor: "#B8D9E5",
        backgroundImage: "/images/icon_tags.png"
    });
    section1.collapse = false;
    for (var i = 0; tags.length > i; i++) section1.add(Alloy.createController("accordianRows", {
        title: tags[i].value,
        key: tags[i].key,
        backgroundColor: "#ECF5F8"
    }).getView());
    data.push(section1);
    $.tableView.setData(data);
    $.tableView.addEventListener("click", function(e) {
        if (e.row.selected) {
            e.row.setBackgroundColor(Alloy.Globals.normalFilterRowColor);
            e.row.selected = false;
            filterData[e.row.key] = false;
        } else {
            e.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
            e.row.selected = true;
            filterData[e.row.key] = true;
        }
    });
    __defers["$.__views.leftButton!click!goBack"] && $.__views.leftButton.addEventListener("click", goBack);
    __defers["$.__views.next!click!save"] && $.__views.next.addEventListener("click", save);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;