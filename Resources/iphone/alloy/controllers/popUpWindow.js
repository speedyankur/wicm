function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "popUpWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.popupWindow = Ti.UI.createWindow({
        backgroundImage: "/images/transparentbg.png",
        id: "popupWindow",
        navBarHidden: "true"
    });
    $.__views.popupWindow && $.addTopLevelView($.__views.popupWindow);
    $.__views.__alloyId85 = Ti.UI.createView({
        top: "5",
        bottom: "5",
        left: "5",
        right: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        borderRadius: "5",
        id: "__alloyId85"
    });
    $.__views.popupWindow.add($.__views.__alloyId85);
    $.__views.label = Ti.UI.createLabel({
        color: "#808080",
        textAlign: "center",
        width: Ti.UI.FILL,
        font: {
            fontSize: "25",
            fontFamily: "Helvetica Neue"
        },
        top: "50",
        id: "label"
    });
    $.__views.__alloyId85.add($.__views.label);
    $.__views.but1 = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "50",
        top: "20",
        left: "20",
        right: "20",
        id: "but1",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000"
    });
    $.__views.__alloyId85.add($.__views.but1);
    $.__views.but2 = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "50",
        top: "10",
        left: "20",
        right: "20",
        id: "but2",
        backgroundColor: "#808080",
        backgroundSelectedColor: "#000"
    });
    $.__views.__alloyId85.add($.__views.but2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.label.text = args.popUpLabel;
    $.but1.title = args.but1Label;
    $.but2.title = args.but2label;
    $.but1.addEventListener("click", function() {
        args.but1handler();
    });
    $.but2.addEventListener("click", function() {
        args.but2handler();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;