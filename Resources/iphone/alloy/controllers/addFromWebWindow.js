function Controller() {
    function goBack() {
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    function next() {
        var whichThingWindow = Alloy.createController("whichThing").getView();
        Alloy.Globals.navgroup.open(whichThingWindow);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addFromWebWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        backgroundColor: "#F5F5F5",
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
        text: "Add From a Web Page",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.__alloyId11 = Ti.UI.createScrollView({
        id: "__alloyId11"
    });
    $.__views.window.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#fff",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.desc = Ti.UI.createLabel({
        left: "10",
        right: "10",
        color: "#808080",
        textAlign: "center",
        font: {
            fontSize: "14"
        },
        text: "Enter web address here or share directly from your brower's share button",
        id: "desc",
        top: "60"
    });
    $.__views.__alloyId12.add($.__views.desc);
    $.__views.__alloyId13 = Ti.UI.createTextField({
        top: "20",
        left: "10",
        right: "10",
        height: "33",
        hintText: "address e.g. http://www.example.com",
        paddingLeft: "20",
        borderRadius: "5",
        borderColor: "#30D1F4",
        borderWidth: "1",
        backgroundColor: "#FFF",
        color: "#000",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.paste = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "15",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "40",
        top: "10",
        right: "20",
        id: "paste",
        backgroundColor: "#808080",
        backgroundSelectedColor: "#000",
        title: "Paste",
        width: "150"
    });
    $.__views.__alloyId12.add($.__views.paste);
    $.__views.__alloyId14 = Ti.UI.createView({
        height: "50",
        bottom: "0",
        backgroundColor: "#E7E7E7",
        left: "0",
        right: "0",
        id: "__alloyId14"
    });
    $.__views.__alloyId11.add($.__views.__alloyId14);
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
        backgroundSelectedColor: "#000",
        title: "Next",
        width: "150"
    });
    $.__views.__alloyId14.add($.__views.next);
    next ? $.__views.next.addEventListener("click", next) : __defers["$.__views.next!click!next"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.window.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#E9E9E9");
    __defers["$.__views.leftButton!click!goBack"] && $.__views.leftButton.addEventListener("click", goBack);
    __defers["$.__views.next!click!next"] && $.__views.next.addEventListener("click", next);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;