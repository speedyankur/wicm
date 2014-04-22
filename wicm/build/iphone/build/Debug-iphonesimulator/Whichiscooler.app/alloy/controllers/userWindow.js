function Controller() {
    function goBack() {
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "userWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        backgroundColor: "#fff",
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
        text: "Username",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.__alloyId108 = Ti.UI.createView({
        layout: "horizontal",
        height: "150",
        top: "50",
        backgroundColor: "#fff",
        id: "__alloyId108"
    });
    $.__views.window.add($.__views.__alloyId108);
    $.__views.column1 = Ti.UI.createView({
        width: "40%",
        id: "column1",
        layout: "vertical"
    });
    $.__views.__alloyId108.add($.__views.column1);
    $.__views.holder = Ti.UI.createImageView({
        top: "5",
        id: "holder",
        width: "100",
        height: "100",
        image: "/images/img_holder.png"
    });
    $.__views.column1.add($.__views.holder);
    $.__views.follow = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "30",
        top: "5",
        id: "follow",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        title: "Follow",
        width: "70"
    });
    $.__views.column1.add($.__views.follow);
    $.__views.column2 = Ti.UI.createView({
        width: "60%",
        id: "column2",
        layout: "vertical",
        top: "20"
    });
    $.__views.__alloyId108.add($.__views.column2);
    $.__views.__alloyId109 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId109"
    });
    $.__views.column2.add($.__views.__alloyId109);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Following :",
        id: "label"
    });
    $.__views.__alloyId109.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "483",
        id: "value"
    });
    $.__views.__alloyId109.add($.__views.value);
    $.__views.__alloyId110 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId110"
    });
    $.__views.column2.add($.__views.__alloyId110);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Follower :",
        id: "label"
    });
    $.__views.__alloyId110.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "100",
        id: "value"
    });
    $.__views.__alloyId110.add($.__views.value);
    $.__views.__alloyId111 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId111"
    });
    $.__views.column2.add($.__views.__alloyId111);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Things Shared :",
        id: "label"
    });
    $.__views.__alloyId111.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "4858",
        id: "value"
    });
    $.__views.__alloyId111.add($.__views.value);
    $.__views.__alloyId112 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId112"
    });
    $.__views.column2.add($.__views.__alloyId112);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Avg. Cool Score :",
        id: "label"
    });
    $.__views.__alloyId112.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "8",
        id: "value"
    });
    $.__views.__alloyId112.add($.__views.value);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        top: "210",
        bottom: "0",
        layout: "horizontal",
        backgroundColor: "#fff"
    });
    $.__views.window.add($.__views.scrollView);
    $.__views.col1 = Ti.UI.createView({
        id: "col1",
        width: "45%",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.col1);
    $.__views.col2 = Ti.UI.createView({
        id: "col2",
        width: "55%",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.col2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.window.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#E9E9E9");
    for (i = 0; 10 > i; i++) {
        var score = "   CS : " + i;
        if (0 == i % 2) {
            var args = {
                score: score,
                image: "/images/thing1.jpg"
            };
            $.col1.add(Alloy.createController("thing", args).getView());
        } else {
            var args = {
                score: score,
                image: "/images/thing2.jpg"
            };
            $.col2.add(Alloy.createController("thing", args).getView());
        }
    }
    __defers["$.__views.leftButton!click!goBack"] && $.__views.leftButton.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;