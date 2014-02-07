function Controller() {
    function closeFullView() {
        $.imageFullview.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "imagefullview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.imageFullview = Ti.UI.createWindow({
        backgroundColor: "#000",
        id: "imageFullview",
        navbar: "false",
        modal: "true"
    });
    $.__views.imageFullview && $.addTopLevelView($.__views.imageFullview);
    $.__views.fullImage = Ti.UI.createImageView({
        id: "fullImage",
        width: Ti.UI.FILL
    });
    $.__views.imageFullview.add($.__views.fullImage);
    $.__views.__alloyId42 = Ti.UI.createButton({
        right: "10",
        top: "10",
        width: "32",
        height: "32",
        backgroundImage: "/images/btn_cancel.png",
        id: "__alloyId42"
    });
    $.__views.imageFullview.add($.__views.__alloyId42);
    closeFullView ? $.__views.__alloyId42.addEventListener("click", closeFullView) : __defers["$.__views.__alloyId42!click!closeFullView"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.fullImage.image = args.image;
    __defers["$.__views.__alloyId42!click!closeFullView"] && $.__views.__alloyId42.addEventListener("click", closeFullView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;