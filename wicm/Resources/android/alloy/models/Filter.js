exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY AUTOINCREMENT",
            filterName: "TEXT",
            following: "boolean",
            followers: "boolean",
            everyone: "boolean",
            last24hours: "boolean",
            last7days: "boolean",
            last30days: "boolean",
            allTime: "boolean",
            animals: "boolean",
            architecture: "boolean",
            automotive: "boolean",
            design: "boolean",
            gadgets: "boolean",
            gaming: "boolean",
            men: "boolean",
            military: "boolean",
            music: "boolean",
            people: "boolean",
            photography: "boolean",
            places: "boolean",
            science: "boolean",
            sports: "boolean",
            tattoos: "boolean",
            technology: "boolean",
            toys: "boolean",
            weddings: "boolean",
            women: "boolean"
        },
        adapter: {
            type: "sql",
            collection_name: "filter",
            idAttribute: "id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("filter", exports.definition, [ function(migration) {
    migration.name = "filter";
    migration.id = "201309031703882";
    var filters = [ {
        filterName: "All Things",
        following: true,
        followers: true,
        everyone: true,
        last24hours: true,
        last7days: true,
        last30days: true,
        allTime: true,
        animals: true,
        architecture: true,
        automotive: true,
        design: true,
        gadgets: true,
        gaming: true,
        men: true,
        military: true,
        music: true,
        people: true,
        photography: true,
        places: true,
        science: true,
        sports: true,
        tattoos: true,
        technology: true,
        toys: true,
        weddings: true,
        women: true
    }, {
        filterName: "Technology & Gadgets",
        following: false,
        followers: false,
        everyone: false,
        last24hours: false,
        last7days: false,
        last30days: false,
        allTime: false,
        animals: false,
        architecture: false,
        automotive: false,
        design: false,
        gadgets: false,
        gaming: false,
        men: false,
        military: false,
        music: false,
        people: false,
        photography: false,
        places: false,
        science: false,
        sports: true,
        tattoos: true,
        technology: true,
        toys: true,
        weddings: true,
        women: true
    }, {
        filterName: "All Time Women's Fashion",
        following: false,
        followers: false,
        everyone: false,
        last24hours: false,
        last7days: false,
        last30days: false,
        allTime: false,
        animals: false,
        architecture: false,
        automotive: false,
        design: false,
        gadgets: false,
        gaming: false,
        men: false,
        military: false,
        music: false,
        people: false,
        photography: false,
        places: false,
        science: false,
        sports: true,
        tattoos: true,
        technology: true,
        toys: true,
        weddings: true,
        women: true
    } ];
    migration.up = function(db) {
        db.createTable({
            columns: {
                id: "INTEGER PRIMARY KEY AUTOINCREMENT",
                filterName: "TEXT",
                following: "INTEGER",
                followers: "INTEGER",
                everyone: "INTEGER",
                last24hours: "INTEGER",
                last7days: "INTEGER",
                last30days: "INTEGER",
                allTime: "INTEGER",
                animals: "INTEGER",
                architecture: "INTEGER",
                automotive: "INTEGER",
                design: "INTEGER",
                gadgets: "INTEGER",
                gaming: "INTEGER",
                men: "INTEGER",
                military: "INTEGER",
                music: "INTEGER",
                people: "INTEGER",
                photography: "INTEGER",
                places: "INTEGER",
                science: "INTEGER",
                sports: "INTEGER",
                tattoos: "INTEGER",
                technology: "INTEGER",
                toys: "INTEGER",
                weddings: "INTEGER",
                women: "INTEGER"
            }
        });
        for (var i = 0; filters.length > i; i++) db.insertRow(filters[i]);
    };
    migration.down = function(db) {
        for (var i = 0; filters.length > i; i++) db.deleteRow(filters[i]);
    };
} ]);

collection = Alloy.C("filter", exports.definition, model);

exports.Model = model;

exports.Collection = collection;