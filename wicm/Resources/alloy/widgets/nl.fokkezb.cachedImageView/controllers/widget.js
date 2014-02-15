function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.cachedImageView/" + s : s.substring(0, index) + "/nl.fokkezb.cachedImageView/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function setImage(image) {
        init({
            image: image
        });
        return;
    }
    function getImage(path) {
        var img = savedFile ? savedFile : $.imageView.image;
        if (path && "string" != typeof img) return img.resolve ? img.resolve() : img.nativePath ? img.nativePath : void 0;
        return img;
    }
    function init(args) {
        function saveImage() {
            $.imageView.removeEventListener("load", saveImage);
            savedFile.write(Ti.UI.createImageView({
                image: $.imageView.image,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                preventDefaultImage: true
            }).toImage());
        }
        if (!args.image || false) {
            delete args.image;
            saveFile = false;
        } else if (!args.cacheNot) {
            if (!args.cacheName) if (_.isString(args.image)) args.cacheName = args.image; else {
                if (!args.image.nativePath) throw new Error("For non-file blobs you need to set a cacheName manually.");
                args.cacheName = args.image.nativePath;
            }
            args.cacheName = Ti.Utils.md5HexDigest(args.cacheName);
            args.hires && (args.cacheName = args.cacheName + "@2x");
            if (!args.cacheExtension) {
                var re = /(?:\.([^.]+))?$/;
                var ext = re.exec(args.image)[1];
                args.cacheExtension = ext ? ext : "";
            }
            savedFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, args.cacheName + "." + args.cacheExtension);
            var saveFile = true;
            if (savedFile.exists()) {
                args.image = savedFile;
                saveFile = false;
            }
        }
        delete args.id;
        delete args.cacheName;
        delete args.cacheExtension;
        delete args.cacheHires;
        delete args.$model;
        delete args.__parentSymbol;
        $.imageView.applyProperties(args);
        true === saveFile && $.imageView.addEventListener("load", saveImage);
    }
    new (require("alloy/widget"))("nl.fokkezb.cachedImageView");
    this.__widgetId = "nl.fokkezb.cachedImageView";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.imageView = Ti.UI.createImageView({
        defaultImage: "/nl.fokkezb.cachedImageView/logo.png",
        id: "imageView"
    });
    $.__views.imageView && $.addTopLevelView($.__views.imageView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var savedFile, args = arguments[0] || {};
    "high" === Ti.Platform.displayCaps.density;
    init(args);
    Object.defineProperty($, "image", {
        get: getImage,
        set: setImage
    });
    exports.setImage = setImage;
    exports.getImage = getImage;
    exports.init = init;
    exports.applyProperties = init;
    exports.on = exports.addEventListener = function(name, callback) {
        return $.imageView.addEventListener(name, callback);
    };
    exports.off = exports.removeEventListener = function(name, callback) {
        return $.imageView.removeEventListener(name, callback);
    };
    exports.trigger = exports.fireEvent = function(name, e) {
        return $.imageView.fireEvent(name, e);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;