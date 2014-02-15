function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "profile";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.profile = Ti.UI.createView({
        id: "profile",
        layout: "vertical"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.__alloyId91 = Ti.UI.createView({
        layout: "horizontal",
        height: "140",
        top: "10",
        backgroundColor: "#fff",
        id: "__alloyId91"
    });
    $.__views.profile.add($.__views.__alloyId91);
    $.__views.column1 = Ti.UI.createView({
        width: "40%",
        id: "column1",
        layout: "vertical"
    });
    $.__views.__alloyId91.add($.__views.column1);
    $.__views.holder = Ti.UI.createImageView({
        top: "5",
        id: "holder",
        width: "100",
        height: "100",
        image: "/images/img_holder.png"
    });
    $.__views.column1.add($.__views.holder);
    $.__views.column2 = Ti.UI.createView({
        width: "60%",
        id: "column2",
        layout: "vertical",
        top: "20"
    });
    $.__views.__alloyId91.add($.__views.column2);
    $.__views.__alloyId92 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId92"
    });
    $.__views.column2.add($.__views.__alloyId92);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Following :",
        id: "label"
    });
    $.__views.__alloyId92.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "483",
        id: "value"
    });
    $.__views.__alloyId92.add($.__views.value);
    $.__views.__alloyId93 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId93"
    });
    $.__views.column2.add($.__views.__alloyId93);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Follower :",
        id: "label"
    });
    $.__views.__alloyId93.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "100",
        id: "value"
    });
    $.__views.__alloyId93.add($.__views.value);
    $.__views.__alloyId94 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId94"
    });
    $.__views.column2.add($.__views.__alloyId94);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Things Shared :",
        id: "label"
    });
    $.__views.__alloyId94.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "4858",
        id: "value"
    });
    $.__views.__alloyId94.add($.__views.value);
    $.__views.__alloyId95 = Ti.UI.createView({
        top: "5",
        layout: "horizontal",
        height: "20",
        id: "__alloyId95"
    });
    $.__views.column2.add($.__views.__alloyId95);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "Avg. Cool Score :",
        id: "label"
    });
    $.__views.__alloyId95.add($.__views.label);
    $.__views.value = Ti.UI.createLabel({
        color: "#30D1F4",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        text: "8",
        id: "value"
    });
    $.__views.__alloyId95.add($.__views.value);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        top: "0",
        bottom: "44",
        layout: "horizontal",
        backgroundColor: "#fff"
    });
    $.__views.profile.add($.__views.scrollView);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;