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
    function goBack() {
        Ti.API.info("going back now");
        Alloy.Globals.navgroup.close($.tdv, {
            animated: true
        });
    }
    function onClose() {
        Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
        $.destroy();
    }
    function applyOrientiation() {
        var deviceheight;
        deviceheight = Ti.Platform.displayCaps.platformHeight;
        if (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) {
            $.addClass($.scrollView, "landscape");
            Ti.API.info("openieng in landscape mode " + deviceheight);
            $.thing.height = deviceheight - 20 - 44 - 40;
            $.thing.width = "50%";
            $.detail.width = "50%";
            $.commentScroller.height = deviceheight - 20 - 44 - 18 - 20 - 18 - 40 - 40;
        } else {
            $.removeClass($.scrollView, "landscape");
            Ti.API.info("openieng in portrait mode " + deviceheight);
            $.thing.height = 200;
            $.thing.width = "100%";
            $.detail.width = "100%";
            Ti.API.info("$.thing.height" + $.thing.size.height);
            $.commentScroller.height = deviceheight - 200 - 20 - 44 - 18 - 20 - 18 - 40 - 40;
        }
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
            nxtArgs.popUpLabel = "Confirm as inappropriate?";
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
        id: "tdv",
        backgroundColor: "#F5F5F5",
        modal: "true",
        navBarHidden: "true"
    });
    $.__views.tdv && $.addTopLevelView($.__views.tdv);
    onClose ? $.__views.tdv.addEventListener("close", onClose) : __defers["$.__views.tdv!close!onClose"] = true;
    $.__views.navview = Ti.UI.createView({
        top: "0",
        left: "0",
        height: "44",
        backgroundColor: "#E9E9E9",
        zIndex: "5",
        id: "navview"
    });
    $.__views.tdv.add($.__views.navview);
    $.__views.leftButton = Ti.UI.createButton({
        backgroundImage: "/images/btn_back.png",
        left: "10",
        top: "15",
        width: "30",
        height: "14",
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
        text: "Thing Detail",
        id: "viewHeaderLabel"
    });
    $.__views.navview.add($.__views.viewHeaderLabel);
    $.__views.scrollView = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        layout: "vertical",
        bottom: 40,
        top: 44,
        apiName: "Ti.UI.ScrollView",
        classes: [ "portrait" ],
        id: "scrollView",
        horizontalWrap: "false"
    });
    $.__views.tdv.add($.__views.scrollView);
    $.__views.thing = Ti.UI.createView({
        backgroundColor: "#fff",
        apiName: "Ti.UI.View",
        id: "thing",
        top: "0",
        classes: []
    });
    $.__views.scrollView.add($.__views.thing);
    $.__views.thingImage = Ti.UI.createImageView({
        top: 0,
        id: "thingImage"
    });
    $.__views.thing.add($.__views.thingImage);
    showFullImage ? $.__views.thingImage.addEventListener("dblclick", showFullImage) : __defers["$.__views.thingImage!dblclick!showFullImage"] = true;
    $.__views.__alloyId100 = Ti.UI.createView({
        width: Ti.UI.FILL,
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: "#5000",
        backgroundImage: null,
        opacity: 1,
        id: "__alloyId100"
    });
    $.__views.thing.add($.__views.__alloyId100);
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
        id: "thingDetailsLabel"
    });
    $.__views.__alloyId100.add($.__views.thingDetailsLabel);
    $.__views.detail = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical",
        apiName: "Ti.UI.View",
        classes: [ "pt_detail" ],
        id: "detail"
    });
    $.__views.scrollView.add($.__views.detail);
    $.__views.__alloyId101 = Ti.UI.createView({
        height: "18",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId101"
    });
    $.__views.detail.add($.__views.__alloyId101);
    $.__views.imageLabel = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "imageLabel",
        text: "Lorem Ipsum is dummy text",
        left: "8",
        top: "0"
    });
    $.__views.__alloyId101.add($.__views.imageLabel);
    $.__views.hypen = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "hypen",
        text: " - ",
        top: "0"
    });
    $.__views.__alloyId101.add($.__views.hypen);
    $.__views.price = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "price",
        text: "$150.",
        top: "0"
    });
    $.__views.__alloyId101.add($.__views.price);
    $.__views.tags = Ti.UI.createScrollView({
        height: "20",
        layout: "horizontal",
        horizontalWrap: "false",
        contentWidth: "100%",
        contentHeight: "20",
        id: "tags"
    });
    $.__views.detail.add($.__views.tags);
    $.__views.__alloyId102 = Ti.UI.createView({
        height: "18",
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId102"
    });
    $.__views.detail.add($.__views.__alloyId102);
    $.__views.scoreLabel = Ti.UI.createLabel({
        color: "#4f4f4f",
        font: {
            fontSize: "14",
            fontWeight: "bold"
        },
        id: "scoreLabel",
        text: "Cool Score: ",
        left: "8"
    });
    $.__views.__alloyId102.add($.__views.scoreLabel);
    $.__views.score = Ti.UI.createLabel({
        color: "#1683af",
        font: {
            fontSize: "14",
            fontWeight: "bold"
        },
        id: "score",
        text: "35.6"
    });
    $.__views.__alloyId102.add($.__views.score);
    $.__views.statBegin = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "statBegin",
        text: " ("
    });
    $.__views.__alloyId102.add($.__views.statBegin);
    $.__views.win = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "win",
        text: "4"
    });
    $.__views.__alloyId102.add($.__views.win);
    $.__views.winText = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "winText",
        text: " wins / "
    });
    $.__views.__alloyId102.add($.__views.winText);
    $.__views.loss = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "loss",
        text: "0"
    });
    $.__views.__alloyId102.add($.__views.loss);
    $.__views.lossText = Ti.UI.createLabel({
        color: "#808080",
        font: {
            fontSize: "14"
        },
        id: "lossText",
        text: " losses)"
    });
    $.__views.__alloyId102.add($.__views.lossText);
    $.__views.commentScroller = Ti.UI.createTableView({
        id: "commentScroller",
        separatorColor: "#FFFFFF"
    });
    $.__views.detail.add($.__views.commentScroller);
    $.__views.__alloyId103 = Ti.UI.createView({
        bottom: "0",
        height: "40",
        backgroundColor: "#E9E9E9",
        id: "__alloyId103"
    });
    $.__views.detail.add($.__views.__alloyId103);
    $.__views.commentField = Ti.UI.createTextField({
        color: "#808080",
        id: "commentField",
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        autocorrect: "false",
        hintText: "comment",
        paddingLeft: "20",
        left: "10",
        height: "30",
        top: "5",
        bottom: "5",
        right: "90",
        borderRadius: "15",
        backgroundColor: "#FFF"
    });
    $.__views.__alloyId103.add($.__views.commentField);
    $.__views.postButton = Ti.UI.createButton({
        backgroundImage: "/images/btn_post.png",
        width: "60",
        height: "30",
        top: "5",
        bottom: "5",
        right: "10",
        id: "postButton"
    });
    $.__views.__alloyId103.add($.__views.postButton);
    postComment ? $.__views.postButton.addEventListener("click", postComment) : __defers["$.__views.postButton!click!postComment"] = true;
    $.__views.__alloyId104 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 40,
        bottom: 0,
        backgroundColor: "#6dcff6",
        layout: "vertical",
        id: "__alloyId104"
    });
    $.__views.tdv.add($.__views.__alloyId104);
    $.__views.bottomBarButtons = Ti.UI.createView({
        width: Ti.UI.SIZE,
        id: "bottomBarButtons",
        layout: "horizontal"
    });
    $.__views.__alloyId104.add($.__views.bottomBarButtons);
    $.__views.__alloyId105 = Ti.UI.createButton({
        top: "7",
        left: "20",
        width: "25",
        height: "25",
        backgroundImage: "/images/icon_fav.png",
        id: "__alloyId105"
    });
    $.__views.bottomBarButtons.add($.__views.__alloyId105);
    favThisThing ? $.__views.__alloyId105.addEventListener("click", favThisThing) : __defers["$.__views.__alloyId105!click!favThisThing"] = true;
    $.__views.__alloyId106 = Ti.UI.createButton({
        top: "7",
        left: "20",
        width: "31",
        height: "25",
        backgroundImage: "/images/icon_email.png",
        id: "__alloyId106"
    });
    $.__views.bottomBarButtons.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createButton({
        top: "7",
        left: "20",
        width: "20",
        height: "25",
        backgroundImage: "/images/icon_flag.png",
        id: "__alloyId107"
    });
    $.__views.bottomBarButtons.add($.__views.__alloyId107);
    flagThisThing ? $.__views.__alloyId107.addEventListener("click", flagThisThing) : __defers["$.__views.__alloyId107!click!flagThisThing"] = true;
    $.__views.cartButton = Ti.UI.createButton({
        top: "7",
        left: "20",
        width: "26",
        height: "25",
        id: "cartButton",
        backgroundImage: "/images/icon_cart.png"
    });
    $.__views.bottomBarButtons.add($.__views.cartButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var iOS7 = Alloy.Globals.isiOS7Plus();
    $.tdv.top = iOS7 ? 20 : 0;
    Ti.UI.setBackgroundColor("#E9E9E9");
    Ti.Gesture.addEventListener("orientationchange", applyOrientiation);
    applyOrientiation();
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
                top: "0",
                bottom: "0",
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
    __defers["$.__views.__alloyId105!click!favThisThing"] && $.__views.__alloyId105.addEventListener("click", favThisThing);
    __defers["$.__views.__alloyId107!click!flagThisThing"] && $.__views.__alloyId107.addEventListener("click", flagThisThing);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;