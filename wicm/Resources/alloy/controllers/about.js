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
        text: "What it is...",
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
        text: "A place to discover and share things from around the web. Post things to see what others think. As users answer the question “Which is cooler?” a dynamic gallery displays all things (within the filters you set) ranked on the basis of cool.",
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
        text: "Rules of Whichiscooler...",
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
        text: "1. Whichiscooler does not decide what is or isn’t cool.",
        id: "__alloyId3"
    });
    $.__views.portrait.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "2. The Golden Rule.",
        id: "__alloyId4"
    });
    $.__views.portrait.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
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
        text: "The Cool Score combines clicks with the number of times a thing is favorited. A user’s average Cool Score is based on all things Shared 1st by the user that also remain in his or her favorites. If a user removes something she/he Shared 1st from his/her favorites, the thing’s Cool Score no longer affects the user’s average Cool Score.",
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
        text: "How we make money…",
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
        text: "Not sure yet.",
        id: "__alloyId8"
    });
    $.__views.portrait.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 10,
        color: "#808080",
        font: {
            fontSize: 14
        },
        textAlign: "justified",
        apiName: "Ti.UI.Label",
        classes: [ "content" ],
        text: "In the short term, we plan to make a few cents through affiliate marketing. In other words if a user purchases something she/he found using the app, Whichiscooler gets paid a small percentage of that sale.",
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
        text: "Longer term, we hope to have enough users to generate meaningful data related to peoples’ perceptions of “cool.” We think that data may be valuable, but we’re not sure yet.",
        id: "__alloyId10"
    });
    $.__views.portrait.add($.__views.__alloyId10);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;