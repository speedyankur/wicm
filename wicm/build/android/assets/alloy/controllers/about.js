function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "about";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.about = Ti.UI.createScrollView({
        apiName: "Ti.UI.ScrollView",
        id: "about",
        height: "auto",
        bottom: "44",
        top: "0",
        classes: []
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    $.__views.portrait = Ti.UI.createView({
        apiName: "Ti.UI.View",
        id: "portrait",
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: "90%",
        classes: []
    });
    $.__views.about.add($.__views.portrait);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 20,
        color: "#519dba",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        classes: [ "title" ],
        text: "Tips...",
        id: "__alloyId0"
    });
    $.__views.portrait.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "Long press image to learn more.",
        id: "__alloyId1"
    });
    $.__views.portrait.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 20,
        color: "#519dba",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        classes: [ "title" ],
        text: "What it is...",
        id: "__alloyId2"
    });
    $.__views.portrait.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "As users answer the question “Which is cooler?” a dynamic gallery displays things (within your custom filters) ranked on all users' perception of cool.",
        id: "__alloyId3"
    });
    $.__views.portrait.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 20,
        color: "#519dba",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        classes: [ "title" ],
        text: "Rules of Whichiscooler...",
        id: "__alloyId4"
    });
    $.__views.portrait.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "1. The Golden Rule.",
        id: "__alloyId5"
    });
    $.__views.portrait.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "2. Whichiscooler does not decide what is or isn’t cool.",
        id: "__alloyId6"
    });
    $.__views.portrait.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 20,
        color: "#519dba",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        classes: [ "title" ],
        text: "Cool Score (CS)...",
        id: "__alloyId7"
    });
    $.__views.portrait.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "The Cool Score for things combines clicks with the number of times a thing is favorited (that's a word, right?). A user’s average Cool Score is based on all things Shared 1st by the user that also remain in his or her favorites. If a user removes something she/he Shared 1st from his/her favorites, the thing’s Cool Score no longer affects the user’s average Cool Score.",
        id: "__alloyId8"
    });
    $.__views.portrait.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 20,
        color: "#519dba",
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        classes: [ "title" ],
        text: "How we make money…",
        id: "__alloyId9"
    });
    $.__views.portrait.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "Hmmm. We haven't figured that one out yet, but we promise to follow the first rule of Whichiscooler.",
        id: "__alloyId10"
    });
    $.__views.portrait.add($.__views.__alloyId10);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;