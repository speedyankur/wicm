function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ds.slideMenu/" + s : s.substring(0, index) + "/ds.slideMenu/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0002,
    key: "leftMenu",
    style: {
        top: "0dp",
        left: "0dp",
        width: "250dp",
        zIndex: "2",
        backgroundColor: "#FFF",
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "leftTableView",
    style: {
        separatorColor: "#FFF"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "menuHeader",
    style: {
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
        }
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "menuHeaderLabel",
    style: {
        text: "Menu"
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "rightMenu",
    style: {
        top: "0dp",
        right: "0dp",
        width: "250dp",
        zIndex: "1",
        backgroundColor: "#FFF"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "navview",
    style: {
        top: "0dp",
        left: "0dp",
        height: "44",
        backgroundColor: "#E9E9E9"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "movableview",
    style: {
        left: "0",
        zIndex: "3",
        width: Ti.Platform.displayCaps.platformWidth
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "contentview",
    style: {
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.Fill,
        top: "44",
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "shadowview",
    style: {
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5"
    }
}, {
    isId: true,
    priority: 100000.0015,
    key: "logo",
    style: {
        image: "/ds.slideMenu/logo.png",
        left: "25%",
        right: "25%",
        top: "8",
        height: "22"
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "viewHeaderLabel",
    style: {
        left: "25%",
        right: "25%",
        top: "0",
        height: "44",
        color: "#808080",
        textAlign: "center",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0017,
    key: "rightButton",
    style: {
        visible: false,
        backgroundImage: "none",
        image: "/ds.slideMenu/ButtonMenu.png",
        right: "0",
        top: "0",
        width: "60",
        height: "44",
        style: "none"
    }
}, {
    isId: true,
    priority: 100101.0012,
    key: "leftButton",
    style: {
        backgroundImage: "/ds.slideMenu/btn_menu@2x.png",
        backgroundSelectedImage: "/ds.slideMenu/btn_menu_sel@2x.png",
        left: "10",
        top: "5",
        width: "50",
        height: "31",
        style: "none"
    }
}, {
    isId: true,
    priority: 100101.0014,
    key: "filterButton",
    style: {
        backgroundImage: "/ds.slideMenu/btn_filter.png",
        backgroundSelectedImage: "/ds.slideMenu/btn_filter_sel.png",
        width: "21",
        right: "10",
        top: "10",
        height: "25"
    }
} ];