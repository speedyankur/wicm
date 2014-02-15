function Controller() {
    function showFullImage(e) {
        var args = {};
        args.image = e.source.image;
        var controller = Alloy.createController("imagefullview", args);
        var imagefullview = controller.getView();
        imagefullview.open({
            modal: true,
            modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN,
            navBarHidden: true
        });
    }
    function onClose() {
        Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
        $.destroy();
    }
    function goBack() {
        Ti.API.info("going back now");
        $.tdv.close();
    }
    function applyOrientiation() {
        var deviceheight;
        deviceheight = Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor - 5;
        if (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) {
            $.removeClass($.portrait, "portrait");
            $.thing.height = deviceheight - 20 - 44 - 40;
            $.thing.width = "50%";
            $.detail.width = "50%";
            $.commentScroller.height = deviceheight - 20 - 44 - 18 - 20 - 18 - 40 - 40;
        } else {
            $.addClass($.portrait, "landscape portrait");
            $.thing.height = 200;
            $.thing.width = "100%";
            $.detail.width = "100%";
            $.commentScroller.height = deviceheight - 200 - 20 - 44 - 18 - 20 - 18 - 40 - 40;
        }
        $.portrait.top = 44;
    }
    function fetchComments() {
        var thingId = args.thing.id;
        if (!thingId) return;
        Alloy.Globals.loading.show("Loading Comments, Please wait..", true);
        var xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", Alloy.Globals.serverPath + "/api/things/" + thingId + "/comments");
        xhr.send();
        xhr.onload = function() {
            var data = JSON.parse(this.responseText);
            data = data.result;
            var rows = [];
            if (0 == data.length) {
                var row = Alloy.createController("commentRow").getView();
                rows.push(row);
            } else for (i = 0; data.length > i; i++) {
                var args = {};
                args.comment = data[i].comment;
                if (data[i].user) {
                    args.username = data[i].user.name;
                    args.image = data[i].user.avatar;
                } else args.username = "UNKNOWN";
                var row = Alloy.createController("commentRow", args).getView();
                rows.push(row);
            }
            $.commentScroller.setData(rows);
            Alloy.Globals.loading.hide();
        };
        xhr.onerror = function() {
            Ti.API.info("got some error");
            Alloy.Globals.loading.hide();
        };
    }
    function postComment() {
        if (Alloy.Globals.APIKey) {
            Alloy.Globals.loading.show("Posting your comment, Please wait..", true);
            var thingId = args.thing.id;
            var data = "comment=" + $.commentField.value;
            var xhr = Ti.Network.createHTTPClient();
            Ti.API.info("Token token=" + Alloy.Globals.APIKey);
            xhr.open("POST", "http://limitless-eyrie-1080.herokuapp.com/api/things/" + thingId + "/comments");
            xhr.setRequestHeader("Authorization", "Token token=" + Alloy.Globals.APIKey);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            Ti.API.info("url--http://limitless-eyrie-1080.herokuapp.com/api/things/" + thingId + "/comments");
            Ti.API.info("token--Token token=" + Alloy.Globals.APIKey);
            xhr.onload = function() {
                fetchComments();
                $.commentField.value = "";
            };
            xhr.onerror = function(e) {
                Alloy.Globals.loading.hide();
                Ti.API.info("error--" + JSON.stringify(e));
                Ti.API.info("error--" + JSON.stringify(this));
                0 == this.status ? alert("Network not avaiable, please try again later") : 2 == this.status ? alert("The request timed out, please try again later") : (500 == this.status || 404 == this.status) && alert("The request timed out, please try again later");
            };
            xhr.send(data);
        } else Alloy.Globals.loginFirst(postComment);
    }
    function favThisThing() {
        if (Alloy.Globals.APIKey) {
            Alloy.Globals.loading.show("Making this thing as your favourite, Please wait..", true);
            var thingId = args.thing.id;
            var xhr = Ti.Network.createHTTPClient();
            Ti.API.info("Token token=" + Alloy.Globals.APIKey);
            xhr.open("PUT", Alloy.Globals.serverPath + "/api/users/current/favorites/" + thingId);
            xhr.setRequestHeader("Authorization", "Token token=" + Alloy.Globals.APIKey);
            xhr.onload = function() {
                Alloy.Globals.loading.hide();
            };
            xhr.onerror = function(e) {
                Alloy.Globals.loading.hide();
                alert("Got some error");
                Ti.API.info("error--" + JSON.stringify(e));
                Ti.API.info("error--" + JSON.stringify(this));
            };
            xhr.send();
        } else Alloy.Globals.loginFirst(favThisThing);
    }
    function flagThisThing() {
        var thingId = args.thing.id;
        if (thingId) {
            var nxtArgs = {};
            nxtArgs.popUpLabel = "Confirm as inappropriate";
            nxtArgs.but1Label = "Confirm";
            nxtArgs.but2label = "Cancel";
            nxtArgs.but1handler = function() {
                Alloy.Globals.loading.show("Flagging now, Please wait..", true);
                Alloy.Globals.removeCurrentMatch();
                var xhr = Ti.Network.createHTTPClient();
                xhr.open("POST", Alloy.Globals.serverPath + "/api/things/" + thingId + "/flag");
                xhr.send();
                xhr.onload = function() {
                    Alloy.Globals.loading.hide();
                    popUpWindow.close();
                    $.tdv.close();
                    Alloy.Globals.fetchNextMatch();
                };
                xhr.onerror = function() {
                    Alloy.Globals.loading.hide();
                    popUpWindow.close();
                };
            };
            nxtArgs.but2handler = function() {
                popUpWindow.close();
            };
            var popUpWindow = Alloy.createController("popUpWindow", nxtArgs).getView();
            popUpWindow.open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "thingDetailView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tdv = Ti.UI.createWindow({
        apiName: "Ti.UI.Window",
        backgroundColor: "#F5F5F5",
        modal: "true",
        navBarHidden: "true",
        id: "tdv",
        classes: []
    });
    $.__views.tdv && $.addTopLevelView($.__views.tdv);
    onClose ? $.__views.tdv.addEventListener("close", onClose) : __defers["$.__views.tdv!close!onClose"] = true;
    $.__views.navview = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "44",
        backgroundColor: "#E9E9E9",
        zIndex: "5",
        apiName: "Ti.UI.View",
        id: "navview",
        classes: []
    });
    $.__views.tdv.add($.__views.navview);
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "/images/btn_back@2x.png",
        left: "0",
        top: "7",
        width: "60",
        height: "28",
        backgroundSelectedImage: "/images/btn_back_sel@2x.png",
        zIndex: "10",
        apiName: "Ti.UI.Button",
        id: "leftButton",
        classes: []
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
        text: "Thing Detail",
        apiName: "Ti.UI.Label",
        id: "viewHeaderLabel",
        classes: []
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.portrait = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        bottom: 40,
        top: 44,
        apiName: "Ti.UI.ScrollView",
        classes: [ "portrait", "landscape" ],
        id: "portrait"
    });
    $.__views.tdv.add($.__views.portrait);
    $.__views.thing = Ti.UI.createView({
        backgroundColor: "#fff",
        apiName: "Ti.UI.View",
        id: "thing",
        classes: []
    });
    $.__views.portrait.add($.__views.thing);
    $.__views.thingImage = Ti.UI.createImageView({
        top: 0,
        apiName: "Ti.UI.ImageView",
        id: "thingImage",
        classes: []
    });
    $.__views.thing.add($.__views.thingImage);
    showFullImage ? $.__views.thingImage.addEventListener("dblclick", showFullImage) : __defers["$.__views.thingImage!dblclick!showFullImage"] = true;
    $.__views.__alloyId120 = Ti.UI.createView({
        width: Ti.UI.FILL,
        bottom: 0,
        left: 5,
        right: 5,
        height: 50,
        backgroundColor: "#5000",
        backgroundImage: null,
        opacity: 1,
        apiName: "Ti.UI.View",
        classes: [ "thing_info" ],
        id: "__alloyId120"
    });
    $.__views.thing.add($.__views.__alloyId120);
    $.__views.thingDetailsLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
        color: "#fff",
        font: {
            fontSize: "14"
        },
        horizontalWrap: true,
        apiName: "Ti.UI.Label",
        id: "thingDetailsLabel",
        classes: []
    });
    $.__views.__alloyId120.add($.__views.thingDetailsLabel);
    $.__views.detail = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical",
        apiName: "Ti.UI.View",
        classes: [ "pt_detail" ],
        id: "detail"
    });
    $.__views.portrait.add($.__views.detail);
    $.__views.__alloyId121 = Ti.UI.createView({
        apiName: "Ti.UI.View",
        height: "18",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId121",
        classes: []
    });
    $.__views.detail.add($.__views.__alloyId121);
    $.__views.imageLabel = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "imageLabel",
        text: "Lorem Ipsum is dummy text",
        left: "8",
        top: "0",
        classes: []
    });
    $.__views.__alloyId121.add($.__views.imageLabel);
    $.__views.hypen = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "hypen",
        text: " - ",
        top: "0",
        classes: []
    });
    $.__views.__alloyId121.add($.__views.hypen);
    $.__views.price = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "price",
        text: "$150.",
        top: "0",
        classes: []
    });
    $.__views.__alloyId121.add($.__views.price);
    $.__views.tags = Ti.UI.createScrollView({
        apiName: "Ti.UI.ScrollView",
        height: "20",
        layout: "horizontal",
        horizontalWrap: "false",
        contentWidth: "100%",
        contentHeight: "20",
        id: "tags",
        classes: []
    });
    $.__views.detail.add($.__views.tags);
    $.__views.__alloyId122 = Ti.UI.createView({
        apiName: "Ti.UI.View",
        height: "18",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId122",
        classes: []
    });
    $.__views.detail.add($.__views.__alloyId122);
    $.__views.scoreLabel = Ti.UI.createLabel({
        color: "#4f4f4f",
        font: {
            fontSize: "14",
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        id: "scoreLabel",
        text: "Cool Score: ",
        left: "8",
        classes: []
    });
    $.__views.__alloyId122.add($.__views.scoreLabel);
    $.__views.score = Ti.UI.createLabel({
        color: "#1683af",
        font: {
            fontSize: "14",
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        id: "score",
        text: "35.6",
        classes: []
    });
    $.__views.__alloyId122.add($.__views.score);
    $.__views.statBegin = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "statBegin",
        text: " (",
        classes: []
    });
    $.__views.__alloyId122.add($.__views.statBegin);
    $.__views.win = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "win",
        text: "4",
        classes: []
    });
    $.__views.__alloyId122.add($.__views.win);
    $.__views.winText = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "winText",
        text: " wins / ",
        classes: []
    });
    $.__views.__alloyId122.add($.__views.winText);
    $.__views.loss = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "loss",
        text: "0",
        classes: []
    });
    $.__views.__alloyId122.add($.__views.loss);
    $.__views.lossText = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.Label",
        id: "lossText",
        text: " losses)",
        classes: []
    });
    $.__views.__alloyId122.add($.__views.lossText);
    $.__views.commentScroller = Ti.UI.createTableView({
        apiName: "Ti.UI.TableView",
        id: "commentScroller",
        separatorColor: "#FFFFFF",
        classes: []
    });
    $.__views.detail.add($.__views.commentScroller);
    $.__views.__alloyId123 = Ti.UI.createView({
        apiName: "Ti.UI.View",
        bottom: "0",
        height: "40",
        backgroundColor: "#E9E9E9",
        id: "__alloyId123",
        classes: []
    });
    $.__views.detail.add($.__views.__alloyId123);
    $.__views.commentField = Ti.UI.createTextField({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        apiName: "Ti.UI.TextField",
        id: "commentField",
        autocorrect: "false",
        hintText: "Search",
        left: "10",
        height: "35",
        top: "2",
        bottom: "3",
        right: "90",
        borderRadius: "30",
        backgroundColor: "#FFF",
        classes: []
    });
    $.__views.__alloyId123.add($.__views.commentField);
    $.__views.postButton = Ti.UI.createButton({
        backgroundImage: "/images/btn_post.png",
        width: "60",
        height: "30",
        top: "5",
        bottom: "5",
        right: "10",
        apiName: "Ti.UI.Button",
        id: "postButton",
        classes: []
    });
    $.__views.__alloyId123.add($.__views.postButton);
    postComment ? $.__views.postButton.addEventListener("click", postComment) : __defers["$.__views.postButton!click!postComment"] = true;
    $.__views.__alloyId124 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 40,
        bottom: 0,
        backgroundColor: "#6dcff6",
        layout: "vertical",
        apiName: "Ti.UI.View",
        classes: [ "bottomBar" ],
        id: "__alloyId124"
    });
    $.__views.tdv.add($.__views.__alloyId124);
    $.__views.bottomBarButtons = Ti.UI.createView({
        apiName: "Ti.UI.View",
        width: Ti.UI.SIZE,
        id: "bottomBarButtons",
        layout: "horizontal",
        classes: []
    });
    $.__views.__alloyId124.add($.__views.bottomBarButtons);
    $.__views.__alloyId125 = Ti.UI.createButton({
        apiName: "Ti.UI.Button",
        top: "7",
        left: "20",
        width: "25",
        height: "25",
        backgroundImage: "/images/icon_fav.png",
        id: "__alloyId125",
        classes: []
    });
    $.__views.bottomBarButtons.add($.__views.__alloyId125);
    favThisThing ? $.__views.__alloyId125.addEventListener("click", favThisThing) : __defers["$.__views.__alloyId125!click!favThisThing"] = true;
    $.__views.__alloyId126 = Ti.UI.createButton({
        apiName: "Ti.UI.Button",
        top: "7",
        left: "20",
        width: "31",
        height: "25",
        backgroundImage: "/images/icon_email.png",
        id: "__alloyId126",
        classes: []
    });
    $.__views.bottomBarButtons.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createButton({
        apiName: "Ti.UI.Button",
        top: "7",
        left: "20",
        width: "20",
        height: "25",
        backgroundImage: "/images/icon_flag.png",
        id: "__alloyId127",
        classes: []
    });
    $.__views.bottomBarButtons.add($.__views.__alloyId127);
    flagThisThing ? $.__views.__alloyId127.addEventListener("click", flagThisThing) : __defers["$.__views.__alloyId127!click!flagThisThing"] = true;
    $.__views.cartButton = Ti.UI.createButton({
        apiName: "Ti.UI.Button",
        top: "7",
        left: "20",
        width: "26",
        height: "25",
        id: "cartButton",
        backgroundImage: "/images/icon_cart.png",
        classes: []
    });
    $.__views.bottomBarButtons.add($.__views.cartButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    applyOrientiation();
    Ti.Gesture.addEventListener("orientationchange", applyOrientiation);
    var args = arguments[0] || {};
    if (args.thing) {
        Ti.API.info("thing--" + JSON.stringify(args.thing));
        var createdDate = new Date(args.thing.created_at);
        $.thingImage.image = args.thing.url;
        $.imageLabel.text = null == args.thing.description ? "" : args.thing.description;
        $.price.text = null == args.thing.buy_it ? "" : args.thing.buy_it;
        $.score.text = null == args.thing.cool_score ? "" : parseFloat(args.thing.cool_score).toFixed(2);
        $.win.text = null == args.thing.wins ? "" : args.thing.wins;
        $.loss.text = null == args.thing.losses ? "" : args.thing.losses;
        if (args.thing.tags.length > 0) for (var i = 0; args.thing.tags.length > i; i++) {
            var tagLabel = Ti.UI.createLabel({
                left: "8",
                height: "18",
                width: Ti.UI.SIZE,
                color: "#FFF",
                backgroundColor: "#30D1F4",
                font: {
                    fontWeight: "bold"
                },
                borderRadius: 5,
                text: " " + args.thing.tags[i] + " "
            });
            $.tags.add(tagLabel);
        }
        var labelText = "";
        labelText += null == args.thing.user ? "" : "Posted by " + args.thing.user.name;
        labelText += null == createdDate ? "" : " on " + createdDate.format("yyyy-MM-d");
        labelText += null == args.thing.original_url ? "" : " from " + Alloy.Globals.parseURL(args.thing.original_url);
        $.thingDetailsLabel.text = labelText;
        args.thing.buy_it || $.bottomBarButtons.remove($.cartButton);
        fetchComments();
    }
    __defers["$.__views.tdv!close!onClose"] && $.__views.tdv.addEventListener("close", onClose);
    __defers["$.__views.leftButton!click!goBack"] && $.__views.leftButton.addEventListener("click", goBack);
    __defers["$.__views.thingImage!dblclick!showFullImage"] && $.__views.thingImage.addEventListener("dblclick", showFullImage);
    __defers["$.__views.postButton!click!postComment"] && $.__views.postButton.addEventListener("click", postComment);
    __defers["$.__views.__alloyId125!click!favThisThing"] && $.__views.__alloyId125.addEventListener("click", favThisThing);
    __defers["$.__views.__alloyId127!click!flagThisThing"] && $.__views.__alloyId127.addEventListener("click", flagThisThing);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;