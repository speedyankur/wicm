function Controller() {
    function goBack() {
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    function save() {
        var filter = filters.get(filterToEdit.id);
        filterToEdit["filterName"] = $.filterName.value;
        filter.set(filterToEdit).save();
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    function deleteFilter() {
        var alertDelete = Titanium.UI.createAlertDialog({
            title: "Confirm deletion",
            message: 'Are you sure you want to delete this filter named "' + filterToEdit.filterName + '" ?',
            buttonNames: [ "Yes", "No" ],
            cancel: 1
        });
        alertDelete.show();
        alertDelete.addEventListener("click", function(eInner) {
            if (eInner.cancel === eInner.index || true === eInner.cancel) return;
            var filter = filters.get(filterToEdit.id);
            filter.destroy();
            Alloy.Globals.navgroup.close($.window, {
                animated: true
            });
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "editFilter";
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
        text: "Edit Filter",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.__alloyId18 = Ti.UI.createView({
        top: "44",
        bottom: "0",
        id: "__alloyId18"
    });
    $.__views.window.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        height: "50",
        top: "0",
        backgroundColor: "#CCDDE4",
        left: "0",
        right: "0",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.filterName = Ti.UI.createTextField({
        id: "filterName",
        value: "All Time Womens Fashion",
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        autocorrect: "false",
        paddingLeft: "20",
        left: "10",
        height: "30",
        right: "40",
        borderRadius: "5",
        backgroundColor: "#DBE7EC"
    });
    $.__views.__alloyId19.add($.__views.filterName);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        right: "10",
        image: "/images/icon_del.png",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    deleteFilter ? $.__views.__alloyId20.addEventListener("click", deleteFilter) : __defers["$.__views.__alloyId20!click!deleteFilter"] = true;
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        top: "50",
        bottom: "50",
        separatorColor: "#fff"
    });
    $.__views.__alloyId18.add($.__views.tableView);
    $.__views.__alloyId21 = Ti.UI.createView({
        height: "50",
        bottom: "0",
        backgroundColor: "#E7E7E7",
        left: "0",
        right: "0",
        id: "__alloyId21"
    });
    $.__views.__alloyId18.add($.__views.__alloyId21);
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
    $.__views.__alloyId21.add($.__views.next);
    save ? $.__views.next.addEventListener("click", save) : __defers["$.__views.next!click!save"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.window.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#E9E9E9");
    var data = [];
    var filters = Alloy.Collections.filters;
    var filterToEdit = arguments[0] || {};
    Ti.API.info(JSON.stringify(filterToEdit));
    filterToEdit && ($.filterName.value = filterToEdit.filterName);
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
        selected: filterToEdit[tags[i].key] ? true : false,
        backgroundColor: filterToEdit[people[i].key] ? Alloy.Globals.activeFilterRowColor : Alloy.Globals.normalFilterRowColor
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
        selected: filterToEdit[tags[i].key] ? true : false,
        backgroundColor: filterToEdit[time[i].key] ? Alloy.Globals.activeFilterRowColor : Alloy.Globals.normalFilterRowColor
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
        selected: filterToEdit[tags[i].key] ? true : false,
        backgroundColor: filterToEdit[tags[i].key] ? Alloy.Globals.activeFilterRowColor : Alloy.Globals.normalFilterRowColor
    }).getView());
    data.push(section1);
    $.tableView.setData(data);
    $.tableView.addEventListener("click", function(e) {
        if (e.row.selected) {
            e.row.setBackgroundColor(Alloy.Globals.normalFilterRowColor);
            e.row.selected = false;
            filterToEdit[e.row.key] = false;
        } else {
            e.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
            e.row.selected = true;
            filterToEdit[e.row.key] = true;
        }
    });
    __defers["$.__views.leftButton!click!goBack"] && $.__views.leftButton.addEventListener("click", goBack);
    __defers["$.__views.__alloyId20!click!deleteFilter"] && $.__views.__alloyId20.addEventListener("click", deleteFilter);
    __defers["$.__views.next!click!save"] && $.__views.next.addEventListener("click", save);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;