exports.definition = {
    config: {
        URL: "http://limitless-eyrie-1080.herokuapp.com/api/things/coolest",
        type: "GET",
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "things",
            idAttribute: "id"
        },
        parentNode: "result"
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("coolestThing", exports.definition, []);

collection = Alloy.C("coolestThing", exports.definition, model);

exports.Model = model;

exports.Collection = collection;