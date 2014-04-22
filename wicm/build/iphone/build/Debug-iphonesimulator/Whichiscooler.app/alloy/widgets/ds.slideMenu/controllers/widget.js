function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ds.slideMenu/" + s : s.substring(0, index) + "/ds.slideMenu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function handleRotation() {
        $.movableview.width = $.navview.width = $.contentview.width = "100%";
        $.movableview.height = $.navview.height = $.contentview.height = "100%";
    }
    new (require("alloy/widget"))("ds.slideMenu");
    this.__widgetId = "ds.slideMenu";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.containerview = Ti.UI.createView({
        id: "containerview"
    });
    $.__views.containerview && $.addTopLevelView($.__views.containerview);
    $.__views.leftMenu = Ti.UI.createView({
        top: "0dp",
        left: "0dp",
        width: "250dp",
        zIndex: "2",
        backgroundColor: "#FFF",
        layout: "vertical",
        id: "leftMenu"
    });
    $.__views.containerview.add($.__views.leftMenu);
    $.__views.menuHeader = Ti.UI.createView({
        height: "44dp",
        backgroundColor: "#a3a3a3",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#FCFCFC",
                offset: "0.0"
            }, {
                color: "#a3a3a3",
                offset: "1.0"
            } ]
        },
        id: "menuHeader"
    });
    $.__views.leftMenu.add($.__views.menuHeader);
    $.__views.menuHeaderLabel = Ti.UI.createLabel({
        text: "Menu",
        id: "menuHeaderLabel"
    });
    $.__views.menuHeader.add($.__views.menuHeaderLabel);
    $.__views.leftTableView = Ti.UI.createTableView({
        separatorColor: "#FFF",
        id: "leftTableView"
    });
    $.__views.leftMenu.add($.__views.leftTableView);
    $.__views.rightMenu = Ti.UI.createView({
        top: "0dp",
        right: "0dp",
        width: "250dp",
        zIndex: "1",
        backgroundColor: "#FFF",
        id: "rightMenu"
    });
    $.__views.containerview.add($.__views.rightMenu);
    $.__views.rightTableView = Ti.UI.createTableView({
        id: "rightTableView"
    });
    $.__views.rightMenu.add($.__views.rightTableView);
    $.__views.movableview = Ti.UI.createView({
        left: "0",
        zIndex: "3",
        width: Ti.Platform.displayCaps.platformWidth,
        id: "movableview"
    });
    $.__views.containerview.add($.__views.movableview);
    $.__views.shadowview = Ti.UI.createView({
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5",
        id: "shadowview"
    });
    $.__views.movableview.add($.__views.shadowview);
    $.__views.navview = Ti.UI.createView({
        top: "0dp",
        left: "0dp",
        height: "44",
        backgroundColor: "#E9E9E9",
        id: "navview"
    });
    $.__views.shadowview.add($.__views.navview);
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "/ds.slideMenu/btn_menu.png",
        left: "10",
        top: "10",
        width: "25",
        height: "16",
        style: "none",
        id: "leftButton"
    });
    $.__views.navview.add($.__views.leftButton);
    $.__views.logo = Ti.UI.createImageView({
        image: "/ds.slideMenu/logo.png",
        left: "25%",
        right: "25%",
        top: "8",
        height: "22",
        id: "logo"
    });
    $.__views.navview.add($.__views.logo);
    $.__views.viewHeaderLabel = Ti.UI.createLabel({
        left: "25%",
        right: "25%",
        top: "0",
        height: "44",
        color: "#808080",
        textAlign: "center",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Custome Label",
        visible: "false",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.filterButton = Ti.UI.createButton({
        backgroundImage: "/ds.slideMenu/filterButton.png",
        width: "21",
        right: "10",
        top: "10",
        height: "25",
        id: "filterButton"
    });
    $.__views.navview.add($.__views.filterButton);
    $.__views.rightButton = Ti.UI.createButton({
        visible: false,
        backgroundImage: "none",
        image: "/ds.slideMenu/ButtonMenu.png",
        right: "0",
        top: "0",
        width: "60",
        height: "44",
        style: "none",
        id: "rightButton"
    });
    $.__views.navview.add($.__views.rightButton);
    $.__views.contentview = Ti.UI.createView({
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.Fill,
        top: "44",
        backgroundColor: "white",
        id: "contentview"
    });
    $.__views.shadowview.add($.__views.contentview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animateRight = Ti.UI.createAnimation({
        left: 250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateReset = Ti.UI.createAnimation({
        left: 0,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var animateLeft = Ti.UI.createAnimation({
        left: -250,
        curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
        duration: 150
    });
    var touchStartX = 0;
    var touchRightStarted = false;
    var touchLeftStarted = false;
    var buttonPressed = false;
    var hasSlided = false;
    var direction = "reset";
    $.movableview.addEventListener("touchstart", function(e) {
        touchStartX = e.x;
    });
    $.movableview.addEventListener("touchend", function() {
        if (buttonPressed) {
            buttonPressed = false;
            return;
        }
        if ($.movableview.left >= 150 && touchRightStarted) {
            direction = "right";
            $.leftButton.touchEnabled = false;
            $.movableview.animate(animateRight);
            hasSlided = true;
        } else if (-150 >= $.movableview.left && touchLeftStarted) {
            direction = "left";
            $.rightButton.touchEnabled = false;
            $.movableview.animate(animateLeft);
            hasSlided = true;
        } else {
            direction = "reset";
            $.leftButton.touchEnabled = true;
            $.rightButton.touchEnabled = true;
            $.movableview.animate(animateReset);
            hasSlided = false;
        }
        Ti.App.fireEvent("sliderToggled", {
            hasSlided: hasSlided,
            direction: direction
        });
        touchRightStarted = false;
        touchLeftStarted = false;
    });
    $.movableview.addEventListener("touchmove", function(e) {
        var coords = $.movableview.convertPointToView({
            x: e.x,
            y: e.y
        }, $.containerview);
        var newLeft = coords.x - touchStartX;
        if (-10 > newLeft || newLeft > 250) return;
        Ti.API.info("value:" + newLeft);
        touchRightStarted && 250 >= newLeft && newLeft >= 0 ? $.movableview.left = newLeft : touchRightStarted && 0 > newLeft ? $.movableview.left = 0 : touchRightStarted && newLeft > 250 && ($.movableview.left = 250);
        if (newLeft > 5 && !touchRightStarted) {
            touchRightStarted = true;
            Ti.App.fireEvent("sliderToggled", {
                hasSlided: false,
                direction: "right"
            });
        } else if (-5 > newLeft && !touchRightStarted) {
            touchLeftStarted = true;
            Ti.App.fireEvent("sliderToggled", {
                hasSlided: false,
                direction: "left"
            });
        }
    });
    $.leftButton.addEventListener("touchend", function() {
        if (!touchRightStarted && !touchLeftStarted) {
            buttonPressed = true;
            $.toggleLeftSlider();
        }
    });
    exports.toggleLeftSlider = function() {
        if (hasSlided) {
            direction = "reset";
            $.leftButton.touchEnabled = true;
            $.movableview.animate(animateReset);
            hasSlided = false;
        } else {
            direction = "right";
            $.leftButton.touchEnabled = false;
            $.movableview.animate(animateRight);
            hasSlided = true;
        }
        Ti.App.fireEvent("sliderToggled", {
            hasSlided: hasSlided,
            direction: direction
        });
    };
    exports.toggleRightSlider = function() {
        if (hasSlided) {
            direction = "reset";
            $.rightButton.touchEnabled = true;
            $.movableview.animate(animateReset);
            hasSlided = false;
        } else {
            direction = "left";
            $.rightButton.touchEnabled = false;
            $.movableview.animate(animateLeft);
            hasSlided = true;
        }
        Ti.App.fireEvent("sliderToggled", {
            hasSlided: hasSlided,
            direction: direction
        });
    };
    Ti.Gesture.addEventListener("orientationchange", function() {
        handleRotation();
    });
    handleRotation();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;