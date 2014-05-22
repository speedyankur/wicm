var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.serverPath = "http://limitless-eyrie-1080.herokuapp.com/";

Alloy.Globals.votingIdealTimer = 2e3;

Alloy.Globals.matches = [];

Alloy.Globals.currentMatchIndex = -1;

Alloy.Collections.filters = Alloy.createCollection("filter");

Alloy.Globals.activeFilterRowColor = "#CCDDE4";

Alloy.Globals.normalFilterRowColor = "#eef5f8";

Alloy.Globals.activeFilterRow;

Alloy.Globals.selectedFilter = -1;

Alloy.Globals.setSelectedFilter = function(selectedFilter) {
    Alloy.Globals.selectedFilter = selectedFilter;
    Titanium.App.Properties.setInt("selectedFilter", selectedFilter);
};

Alloy.Globals.getSelectedFilter = function() {
    Alloy.Globals.selectedFilter = Titanium.App.Properties.getInt("selectedFilter");
    return Alloy.Globals.selectedFilter;
};

if (!Titanium.App.Properties.getInt("settingsLoaded")) {
    Alloy.Globals.setSelectedFilter(1);
    Titanium.App.Properties.setInt("settingsLoaded", true);
}

Alloy.Globals.isiOS7Plus = function() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 7) return true;
    return false;
};

Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");

Alloy.Globals.createTableSectionHeaderViewForAccordian = function(data) {
    var customView = Alloy.createController("accordianSectionHeaderView", data).getView();
    var section = Ti.UI.createTableViewSection({
        headerView: customView
    });
    customView.section = section;
    return section;
};

Alloy.Globals.createTableSectionHeaderView = function(label, leftHeaderViewImage) {
    var customView = Ti.UI.createView({
        height: "36",
        backgroundColor: "#bfd9e4",
        borderColor: "#FFF"
    });
    var customLabel = Ti.UI.createLabel({
        top: "6",
        bottom: "6",
        left: "10",
        right: "10",
        text: label,
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        color: "#808080"
    });
    if (leftHeaderViewImage) {
        var anImageView = Ti.UI.createImageView({
            image: leftHeaderViewImage,
            left: 10
        });
        customView.add(anImageView);
        customLabel.left = 30;
    }
    customView.add(customLabel);
    var section = Ti.UI.createTableViewSection({
        headerView: customView
    });
    return section;
};

Alloy.Globals.buttonFocused = function(e) {
    e.source.setBackgroundColor("#000");
};

Alloy.Globals.buttonBlurred = function(e) {
    e.source.setBackgroundColor("#30D1F4");
};

Alloy.Globals.buttonBlurredGray = function(e) {
    e.source.setBackgroundColor("#808080");
};

Alloy.Globals.objectOpacityOnFocused = function(e) {
    e.source.setOpacity(.7);
};

Alloy.Globals.objectOpacityOnBlurred = function(e) {
    e.source.setOpacity(1);
};

Alloy.Globals.parseURL = function(url) {
    parsed_url = {};
    if (null == url || 0 == url.length) return parsed_url;
    protocol_i = url.indexOf("://");
    parsed_url.protocol = url.substr(0, protocol_i);
    remaining_url = url.substr(protocol_i + 3, url.length);
    domain_i = remaining_url.indexOf("/");
    domain_i = -1 == domain_i ? remaining_url.length - 1 : domain_i;
    parsed_url.domain = remaining_url.substr(0, domain_i);
    return parsed_url.domain;
};

Alloy.Globals.loginFirst = function(callback) {
    Ti.API.info(callback);
    var nxtArgs = {};
    nxtArgs.popUpLabel = "You need to log in to do that.";
    nxtArgs.but1Label = "Log In";
    nxtArgs.but2label = "Never mind";
    nxtArgs.but1handler = function() {
        popUpWindow.close();
        var controller = Alloy.createController("login");
        var win = controller.getView();
        win.addEventListener("close", function() {
            Alloy.Globals.APIKey && callback();
        });
        Alloy.Globals.navgroup.open(win);
    };
    nxtArgs.but2handler = function() {
        popUpWindow.close();
    };
    var popUpWindow = Alloy.createController("popUpWindow", nxtArgs).getView();
    popUpWindow.open();
};

Date.prototype.format = function(format) {
    var hours = this.getHours();
    var ttime = "AM";
    if (format.indexOf("t") > -1 && hours > 12) {
        hours -= 12;
        ttime = "PM";
    }
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": hours,
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds(),
        "t+": ttime
    };
    /(y+)/.test(format) && (format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var k in o) new RegExp("(" + k + ")").test(format) && (format = format.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
    return format;
};

Alloy.createController("index");