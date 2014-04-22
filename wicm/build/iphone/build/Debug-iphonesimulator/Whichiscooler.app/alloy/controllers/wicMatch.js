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
    function flagThisThing(e) {
        if (e.source.thingId) {
            var args = {};
            args.popUpLabel = "Confirm as inappropriate?";
            args.but1Label = "Confirm";
            args.but2label = "Cancel";
            args.but1handler = function() {
                Alloy.Globals.loading.show("Flagging now, Please wait..", true);
                Alloy.Globals.removeCurrentMatch();
                var xhr = Ti.Network.createHTTPClient();
                xhr.open("POST", Alloy.Globals.serverPath + "/api/things/" + e.source.thingId + "/flag");
                xhr.send();
                xhr.onload = function() {
                    Alloy.Globals.loading.hide();
                    popUpWindow.close();
                    Alloy.Globals.fetchNextMatch();
                };
                xhr.onerror = function() {
                    Alloy.Globals.loading.hide();
                    popUpWindow.close();
                };
            };
            args.but2handler = function() {
                popUpWindow.close();
            };
            var popUpWindow = Alloy.createController("popUpWindow", args).getView();
            popUpWindow.open();
        }
    }
    function goToDetailThing(e) {
        if (matchup) {
            var thing = "thing" + e.source.id.replace(/^\D+/g, "");
            var args = {};
            matchup && (args.thing = matchup[thing]);
            var controller = Alloy.createController("thingDetailView", args);
            var thingDetailView = controller.getView();
            Alloy.Globals.navgroup.open(thingDetailView);
        }
    }
    function voteMe(e) {
        if (matchup) {
            $.score1.text = isNaN(parseFloat(matchup.thing1.cool_score)) ? "?" : parseFloat(matchup.thing1.cool_score).toFixed(2);
            $.winslose1.text = isNaN(parseInt(matchup.thing1.wins)) || isNaN(parseInt(matchup.thing1.losses)) ? "Not enough data yet." : matchup.thing1.wins + " wins / " + matchup.thing1.losses + " losses";
            $.scoreCard1.visible = true;
            $.score2.text = isNaN(parseFloat(matchup.thing2.cool_score)) ? "?" : parseFloat(matchup.thing2.cool_score).toFixed(2);
            $.winslose2.text = isNaN(parseInt(matchup.thing2.wins)) || isNaN(parseInt(matchup.thing2.losses)) ? "Not enough data yet." : matchup.thing2.wins + " wins / " + matchup.thing2.losses + " losses";
            $.scoreCard2.visible = true;
            var data = {};
            data["losing_thing_id"] = e.source.loosingId;
            data["winning_thing_id"] = e.source.winningId;
            Ti.API.info(JSON.stringify(data));
            Alloy.Globals.loading.show("Voting, Please wait..", true);
            var xhr = Ti.Network.createHTTPClient();
            xhr.open("POST", Alloy.Globals.serverPath + "api/vote");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function() {
                Ti.Gesture.removeEventListener("orientationchange", applyOrientiation);
                setTimeout(function() {
                    Alloy.Globals.fetchNextMatch();
                }, Alloy.Globals.votingIdealTimer);
                Alloy.Globals.loading.hide();
            };
            xhr.onerror = function(e) {
                Ti.API.info("error--" + JSON.stringify(e));
                Alloy.Globals.loading.hide();
            };
            xhr.send(JSON.stringify(data));
        }
    }
    function fetchMatch() {
        Alloy.Globals.loading.show("Loading, Please wait..", true);
        var xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", Alloy.Globals.serverPath + "/api/things/matchup");
        xhr.send();
        xhr.onload = function() {
            matchup = JSON.parse(this.responseText);
            $.img1.setImage(matchup.thing1.url);
            $.img1.winningId = matchup.thing1.id;
            $.img1.loosingId = matchup.thing2.id;
            $.flag1.thingId = matchup.thing1.id;
            $.img2.setImage(matchup.thing2.url);
            $.img2.winningId = matchup.thing2.id;
            $.img2.loosingId = matchup.thing1.id;
            $.flag2.thingId = matchup.thing2.id;
            $.scoreCard1.visible = false;
            $.scoreCard2.visible = false;
            Alloy.Globals.loading.hide();
        };
        xhr.onerror = function() {
            Ti.API.info("got some error");
            Alloy.Globals.loading.hide();
        };
    }
    function applyOrientiation() {
        if (Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT) {
            $.removeClass($.info1, "info");
            $.removeClass($.info2, "info");
            $.removeClass($.flag1, "flag");
            $.removeClass($.flag2, "flag");
            $.removeClass($.portrait, "portrait");
            $.addClass($.thing1, "half");
            $.addClass($.thing2, "half");
            $.addClass($.info1, "linfo");
            $.addClass($.info2, "linfo");
            $.addClass($.flag1, "lflag");
            $.addClass($.flag2, "lflag");
        } else {
            $.addClass($.portrait, "landscape portrait");
            $.removeClass($.thing1, "half");
            $.removeClass($.thing2, "half");
            $.removeClass($.info1, "linfo");
            $.removeClass($.info2, "linfo");
            $.removeClass($.flag1, "lflag");
            $.removeClass($.flag2, "lflag");
            $.addClass($.info1, "info");
            $.addClass($.info2, "info");
            $.addClass($.flag1, "flag");
            $.addClass($.flag2, "flag");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "wicMatch";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.portrait = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        apiName: "Ti.UI.View",
        id: "portrait",
        classes: [ "landscape", "portrait" ]
    });
    $.__views.portrait && $.addTopLevelView($.__views.portrait);
    $.__views.thing1 = Ti.UI.createView({
        height: "50%",
        width: "100%",
        apiName: "Ti.UI.View",
        id: "thing1",
        classes: [ "thing" ]
    });
    $.__views.portrait.add($.__views.thing1);
    $.__views.img1 = Ti.UI.createImageView({
        apiName: "Ti.UI.ImageView",
        id: "img1",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        classes: []
    });
    $.__views.thing1.add($.__views.img1);
    showFullImage ? $.__views.img1.addEventListener("doubletap", showFullImage) : __defers["$.__views.img1!doubletap!showFullImage"] = true;
    voteMe ? $.__views.img1.addEventListener("singletap", voteMe) : __defers["$.__views.img1!singletap!voteMe"] = true;
    try {
        $.__views.img1.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.img1!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.img1.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.img1!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    $.__views.flag1 = Ti.UI.createButton({
        right: 10,
        width: 32,
        height: 32,
        backgroundImage: "/images/flag.png",
        top: 10,
        apiName: "Ti.UI.Button",
        id: "flag1",
        classes: [ "flagbasic", "flag" ]
    });
    $.__views.thing1.add($.__views.flag1);
    flagThisThing ? $.__views.flag1.addEventListener("click", flagThisThing) : __defers["$.__views.flag1!click!flagThisThing"] = true;
    $.__views.info1 = Ti.UI.createButton({
        bottom: 10,
        width: 32,
        height: 32,
        backgroundImage: "/images/info.png",
        right: 10,
        apiName: "Ti.UI.Button",
        id: "info1",
        classes: [ "infobasic", "info" ]
    });
    $.__views.thing1.add($.__views.info1);
    goToDetailThing ? $.__views.info1.addEventListener("click", goToDetailThing) : __defers["$.__views.info1!click!goToDetailThing"] = true;
    $.__views.scoreCard1 = Ti.UI.createView({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        visible: false,
        backgroundColor: "#7000",
        backgroundImage: null,
        opacity: 1,
        layout: "vertical",
        apiName: "Ti.UI.View",
        classes: [ "scoreCard" ],
        id: "scoreCard1"
    });
    $.__views.thing1.add($.__views.scoreCard1);
    $.__views.score1 = Ti.UI.createLabel({
        textAlign: "center",
        top: 90,
        color: "#fff",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        id: "score1",
        classes: [ "thingScore" ]
    });
    $.__views.scoreCard1.add($.__views.score1);
    $.__views.winslose1 = Ti.UI.createLabel({
        textAlign: "center",
        color: "#fff",
        font: {
            fontSize: 18
        },
        apiName: "Ti.UI.Label",
        id: "winslose1",
        classes: [ "thingWinsLose" ]
    });
    $.__views.scoreCard1.add($.__views.winslose1);
    $.__views.thing2 = Ti.UI.createView({
        height: "50%",
        width: "100%",
        apiName: "Ti.UI.View",
        id: "thing2",
        classes: [ "thing" ]
    });
    $.__views.portrait.add($.__views.thing2);
    $.__views.img2 = Ti.UI.createImageView({
        apiName: "Ti.UI.ImageView",
        id: "img2",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        classes: []
    });
    $.__views.thing2.add($.__views.img2);
    showFullImage ? $.__views.img2.addEventListener("doubletap", showFullImage) : __defers["$.__views.img2!doubletap!showFullImage"] = true;
    voteMe ? $.__views.img2.addEventListener("singletap", voteMe) : __defers["$.__views.img2!singletap!voteMe"] = true;
    try {
        $.__views.img2.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    } catch (e) {
        __defers["$.__views.img2!touchstart!Alloy.Globals.objectOpacityOnFocused"] = true;
    }
    try {
        $.__views.img2.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    } catch (e) {
        __defers["$.__views.img2!touchend!Alloy.Globals.objectOpacityOnBlurred"] = true;
    }
    $.__views.flag2 = Ti.UI.createButton({
        right: 10,
        width: 32,
        height: 32,
        backgroundImage: "/images/flag.png",
        top: 10,
        apiName: "Ti.UI.Button",
        id: "flag2",
        classes: [ "flagbasic", "flag" ]
    });
    $.__views.thing2.add($.__views.flag2);
    flagThisThing ? $.__views.flag2.addEventListener("click", flagThisThing) : __defers["$.__views.flag2!click!flagThisThing"] = true;
    $.__views.info2 = Ti.UI.createButton({
        bottom: 10,
        width: 32,
        height: 32,
        backgroundImage: "/images/info.png",
        right: 10,
        apiName: "Ti.UI.Button",
        id: "info2",
        classes: [ "infobasic", "info" ]
    });
    $.__views.thing2.add($.__views.info2);
    goToDetailThing ? $.__views.info2.addEventListener("click", goToDetailThing) : __defers["$.__views.info2!click!goToDetailThing"] = true;
    $.__views.scoreCard2 = Ti.UI.createView({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        visible: false,
        backgroundColor: "#7000",
        backgroundImage: null,
        opacity: 1,
        layout: "vertical",
        apiName: "Ti.UI.View",
        classes: [ "scoreCard" ],
        id: "scoreCard2"
    });
    $.__views.thing2.add($.__views.scoreCard2);
    $.__views.score2 = Ti.UI.createLabel({
        textAlign: "center",
        top: 90,
        color: "#fff",
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        id: "score2",
        classes: [ "thingScore" ]
    });
    $.__views.scoreCard2.add($.__views.score2);
    $.__views.winslose2 = Ti.UI.createLabel({
        textAlign: "center",
        color: "#fff",
        font: {
            fontSize: 18
        },
        apiName: "Ti.UI.Label",
        id: "winslose2",
        classes: [ "thingWinsLose" ]
    });
    $.__views.scoreCard2.add($.__views.winslose2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var matchup;
    fetchMatch();
    Ti.Gesture.addEventListener("orientationchange", applyOrientiation);
    applyOrientiation();
    __defers["$.__views.img1!doubletap!showFullImage"] && $.__views.img1.addEventListener("doubletap", showFullImage);
    __defers["$.__views.img1!singletap!voteMe"] && $.__views.img1.addEventListener("singletap", voteMe);
    __defers["$.__views.img1!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.img1.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.img1!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.img1.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    __defers["$.__views.flag1!click!flagThisThing"] && $.__views.flag1.addEventListener("click", flagThisThing);
    __defers["$.__views.info1!click!goToDetailThing"] && $.__views.info1.addEventListener("click", goToDetailThing);
    __defers["$.__views.img2!doubletap!showFullImage"] && $.__views.img2.addEventListener("doubletap", showFullImage);
    __defers["$.__views.img2!singletap!voteMe"] && $.__views.img2.addEventListener("singletap", voteMe);
    __defers["$.__views.img2!touchstart!Alloy.Globals.objectOpacityOnFocused"] && $.__views.img2.addEventListener("touchstart", Alloy.Globals.objectOpacityOnFocused);
    __defers["$.__views.img2!touchend!Alloy.Globals.objectOpacityOnBlurred"] && $.__views.img2.addEventListener("touchend", Alloy.Globals.objectOpacityOnBlurred);
    __defers["$.__views.flag2!click!flagThisThing"] && $.__views.flag2.addEventListener("click", flagThisThing);
    __defers["$.__views.info2!click!goToDetailThing"] && $.__views.info2.addEventListener("click", goToDetailThing);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;