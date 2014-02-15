function Controller() {
    function toggleSection(e) {
        if (e.source.getParent()) {
            var rows = e.source.getParent().section.getRows();
            Ti.API.info("-" + rows.length);
            _.each(rows, function(row) {
                if (e.source.getParent().section.collapse) {
                    row.height = "80";
                    $.icon.image = "/images/arrow_down.png";
                } else {
                    $.icon.image = "/images/arrow_right.png";
                    row.height = "0";
                }
            });
            e.source.getParent().section.collapse = !e.source.getParent().section.collapse;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "accordianSectionHeaderView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.view = Ti.UI.createView({
        height: "36",
        backgroundColor: "#ECF5F8",
        borderColor: "#FFF",
        id: "view"
    });
    $.__views.view && $.addTopLevelView($.__views.view);
    toggleSection ? $.__views.view.addEventListener("click", toggleSection) : __defers["$.__views.view!click!toggleSection"] = true;
    $.__views.icon = Ti.UI.createImageView({
        id: "icon",
        left: "10",
        image: "/images/arrow_down.png"
    });
    $.__views.view.add($.__views.icon);
    $.__views.additionalIcon = Ti.UI.createImageView({
        id: "additionalIcon",
        left: "40"
    });
    $.__views.view.add($.__views.additionalIcon);
    $.__views.label = Ti.UI.createLabel({
        top: "6",
        bottom: "6",
        left: "40",
        right: "10",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        color: "#808080",
        id: "label"
    });
    $.__views.view.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.backgroundColor && ($.view.backgroundColor = args.backgroundColor);
    if (args.backgroundImage) {
        $.additionalIcon.image = args.backgroundImage;
        $.label.left = 60;
    }
    $.label.text = args.text || "";
    __defers["$.__views.view!click!toggleSection"] && $.__views.view.addEventListener("click", toggleSection);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;