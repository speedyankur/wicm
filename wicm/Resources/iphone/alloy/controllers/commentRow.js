function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "commentRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.commentRow = Ti.UI.createTableViewRow({
        height: "50",
        id: "commentRow"
    });
    $.__views.commentRow && $.addTopLevelView($.__views.commentRow);
    $.__views.picView = Ti.UI.createView({
        width: Ti.UI.FILL,
        id: "picView",
        layout: "horizontal"
    });
    $.__views.commentRow.add($.__views.picView);
    $.__views.imageView = Ti.UI.createImageView({
        id: "imageView",
        top: "0",
        right: "10",
        bottom: "10",
        left: "10",
        defaultImage: "/images/user.jpg",
        width: "35",
        height: "35"
    });
    $.__views.picView.add($.__views.imageView);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId15"
    });
    $.__views.commentRow.add($.__views.__alloyId15);
    $.__views.username = Ti.UI.createLabel({
        color: "#4f4f4f",
        font: {
            fontSize: "14",
            fontWeight: "bold"
        },
        id: "username",
        left: "60",
        text: ""
    });
    $.__views.__alloyId15.add($.__views.username);
    $.__views.comment = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        left: "60",
        id: "comment",
        text: ""
    });
    $.__views.__alloyId15.add($.__views.comment);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0];
    if (args) {
        args.image && ($.imageView.image = args.image);
        args.comment && ($.comment.text = args.comment);
        args.username && ($.username.text = args.username);
    } else {
        $.picView.visible = false;
        $.username.text = "";
        $.comment.text = "Sorry, No Comments available";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;