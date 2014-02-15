function Controller() {
    function onSwitch() {
        $.yesBtn.backgroundImage = "/images/btn_yes_sel.png";
        $.noBtn.backgroundImage = "/images/btn_no.png";
        $.saleSwitch.status = true;
    }
    function offSwitch() {
        $.yesBtn.backgroundImage = "/images/btn_yes.png";
        $.noBtn.backgroundImage = "/images/btn_no_sel.png";
        $.saleSwitch.status = false;
    }
    function onOpen() {}
    function goBack() {
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.window, {
            animated: true
        });
    }
    function hintText() {
        0 == $.textArea.value.length && $.textArea.setValue(hint);
    }
    function onWindowClick(e) {
        "textArea" != e.source.id && $.textArea.blur();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "postImageWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        backgroundColor: "#FFF",
        modal: "false",
        navBarHidden: "true"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    onOpen ? $.__views.window.addEventListener("open", onOpen) : __defers["$.__views.window!open!onOpen"] = true;
    onWindowClick ? $.__views.window.addEventListener("click", onWindowClick) : __defers["$.__views.window!click!onWindowClick"] = true;
    $.__views.navview = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "44",
        backgroundColor: "#E9E9E9",
        zIndex: "5",
        id: "navview"
    });
    $.__views.window.add($.__views.navview);
    $.__views.cancel = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "12",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "30",
        left: "10",
        id: "cancel",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        title: "Cancel",
        width: "60"
    });
    $.__views.navview.add($.__views.cancel);
    goBack ? $.__views.cancel.addEventListener("click", goBack) : __defers["$.__views.cancel!click!goBack"] = true;
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
        text: "Post",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.post = Ti.UI.createButton({
        color: "#fff",
        font: {
            fontSize: "12",
            fontFamily: "Helvetica Neue"
        },
        borderRadius: "5",
        backgroundImage: "none",
        backgroundSelectedImage: "none",
        height: "30",
        right: "10",
        id: "post",
        backgroundColor: "#30D1F4",
        backgroundSelectedColor: "#000",
        title: "Post",
        width: "60"
    });
    $.__views.navview.add($.__views.post);
    goBack ? $.__views.post.addEventListener("click", goBack) : __defers["$.__views.post!click!goBack"] = true;
    $.__views.__alloyId90 = Ti.UI.createView({
        height: "150",
        backgroundColor: "#fff",
        top: "50",
        id: "__alloyId90"
    });
    $.__views.window.add($.__views.__alloyId90);
    $.__views.column1 = Ti.UI.createView({
        id: "column1",
        width: "140",
        layout: "vertical",
        left: "15"
    });
    $.__views.__alloyId90.add($.__views.column1);
    $.__views.selectedImage = Ti.UI.createImageView({
        top: "0",
        left: "5",
        right: "5",
        id: "selectedImage"
    });
    $.__views.column1.add($.__views.selectedImage);
    $.__views.column2 = Ti.UI.createView({
        id: "column2",
        layout: "vertical",
        left: "165",
        right: "10"
    });
    $.__views.__alloyId90.add($.__views.column2);
    $.__views.textArea = Ti.UI.createTextArea({
        color: "#808080",
        id: "textArea",
        width: Ti.UI.FILL,
        height: "80",
        borderWidth: "1",
        borderColor: "#808080",
        borderRadius: "3"
    });
    $.__views.column2.add($.__views.textArea);
    $.__views.sale = Ti.UI.createLabel({
        color: "#000",
        textAlign: "center",
        font: {
            fontSize: "14"
        },
        text: "Is this thing for sale?",
        id: "sale",
        top: "10"
    });
    $.__views.column2.add($.__views.sale);
    $.__views.saleSwitch = Ti.UI.createView({
        height: "29",
        top: "10",
        width: "90",
        layout: "horizontal",
        id: "saleSwitch"
    });
    $.__views.column2.add($.__views.saleSwitch);
    $.__views.yesBtn = Ti.UI.createView({
        id: "yesBtn",
        left: "0",
        width: "45",
        backgroundImage: "/images/btn_yes.png"
    });
    $.__views.saleSwitch.add($.__views.yesBtn);
    onSwitch ? $.__views.yesBtn.addEventListener("click", onSwitch) : __defers["$.__views.yesBtn!click!onSwitch"] = true;
    $.__views.noBtn = Ti.UI.createView({
        id: "noBtn",
        right: "0",
        width: "45",
        backgroundImage: "/images/btn_no_sel.png"
    });
    $.__views.saleSwitch.add($.__views.noBtn);
    offSwitch ? $.__views.noBtn.addEventListener("click", offSwitch) : __defers["$.__views.noBtn!click!offSwitch"] = true;
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        top: "210",
        bottom: "0"
    });
    $.__views.window.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.window.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#E9E9E9");
    var args = arguments[0] || {};
    args.image && ($.selectedImage.image = args.image);
    $.saleSwitch.status = false;
    var data = [];
    var tags = [ "Animals", "Architecture", "Automotive", "Design", "Gadgets", "Gaming Literature", "Men’s Fashion", "Military & Weapons", "Music, Film, & Entertainment Nautical", "People", "Photography", "Places", "Science & Nature", "Sports & Outdoors", "Tattoos", "Technology", "Toys", "Weddings", "Women’s Fashion" ];
    var tagSection = Alloy.Globals.createTableSectionHeaderView("Tags", "/images/icon_tags.png");
    tagSection.collapse = false;
    for (var i = 0; tags.length > i; i++) tagSection.add(Alloy.createController("tagRowItem", {
        title: tags[i],
        backgroundColor: "#ECF5F8"
    }).getView());
    data.push(tagSection);
    $.tableView.setData(data);
    $.tableView.addEventListener("click", function(e) {
        if (e.row.selected) {
            e.row.setBackgroundColor("#eef5f8");
            e.row.selected = false;
        } else {
            e.row.setBackgroundColor("#CCDDE4");
            e.row.selected = true;
        }
    });
    var hint = "Description…";
    hintText(hint);
    $.textArea.addEventListener("focus", function() {
        $.textArea.value == hint && $.textArea.setValue("");
    });
    $.textArea.addEventListener("blur", function() {
        hintText();
    });
    __defers["$.__views.window!open!onOpen"] && $.__views.window.addEventListener("open", onOpen);
    __defers["$.__views.window!click!onWindowClick"] && $.__views.window.addEventListener("click", onWindowClick);
    __defers["$.__views.cancel!click!goBack"] && $.__views.cancel.addEventListener("click", goBack);
    __defers["$.__views.post!click!goBack"] && $.__views.post.addEventListener("click", goBack);
    __defers["$.__views.yesBtn!click!onSwitch"] && $.__views.yesBtn.addEventListener("click", onSwitch);
    __defers["$.__views.noBtn!click!offSwitch"] && $.__views.noBtn.addEventListener("click", offSwitch);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;