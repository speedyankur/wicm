function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.cachedImageView/" + s : s.substring(0, index) + "/nl.fokkezb.cachedImageView/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0019,
    key: "ImageView",
    style: {
        defaultImage: "/nl.fokkezb.cachedImageView/logo.png"
    }
} ];