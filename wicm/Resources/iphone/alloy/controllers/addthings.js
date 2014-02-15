function Controller() {
    function nowPostImage(imageData) {
        var args = {};
        args.image = imageData;
        var postImageWindow = Alloy.createController("postImageWindow", args).getView();
        Alloy.Globals.navgroup.open(postImageWindow);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addthings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.things = Ti.UI.createView({
        id: "things"
    });
    $.__views.things && $.addTopLevelView($.__views.things);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        separatorColor: "#fff"
    });
    $.__views.things.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    var args = {};
    args.title = "Take photo";
    args.action = "CAMERA";
    var row = Alloy.createController("peopleRowItem", args).getView();
    row.height = "50";
    data.push(row);
    args = {};
    args.title = "Choose an existing photo.";
    args.action = "GALLERY";
    var row = Alloy.createController("peopleRowItem", args).getView();
    row.height = "50";
    data.push(row);
    args = {};
    args.title = "From a web page";
    args.action = "WEB";
    var row = Alloy.createController("peopleRowItem", args).getView();
    row.height = "50";
    data.push(row);
    $.tableView.setData(data);
    $.tableView.addEventListener("click", function(e) {
        Ti.API.info(e.row.action);
        switch (e.row.action) {
          case "CAMERA":
            Titanium.Media.showCamera({
                success: function(event) {
                    nowPostImage(event.media);
                },
                cancel: function() {},
                error: function() {},
                saveToPhotoGallery: false
            });
            break;

          case "GALLERY":
            Titanium.Media.openPhotoGallery({
                success: function(event) {
                    nowPostImage(event.media);
                },
                cancel: function() {},
                error: function() {}
            });
            break;

          case "WEB":
            var addFromWebWindow = Alloy.createController("addFromWebWindow").getView();
            Alloy.Globals.navgroup.open(addFromWebWindow);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;