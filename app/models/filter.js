exports.definition = {
	config : {
		columns : {
			id : "INTEGER PRIMARY KEY AUTOINCREMENT",
			filterName : "TEXT",
			following : "boolean",
			followers : "boolean",
			everyone : "boolean",
			last24hours : "boolean",
			last7days : "boolean",
			last30days : "boolean",
			allTime : "boolean",
			animals : "boolean",
			architecture : "boolean",
			automotive : "boolean",
			design : "boolean",
			gadgets : "boolean",
			gaming : "boolean",
			men : "boolean",
			military : "boolean",
			music : "boolean",
			people : "boolean",
			photography : "boolean",
			places : "boolean",
			science : "boolean",
			sports : "boolean",
			tattoos : "boolean",
			technology : "boolean",
			toys : "boolean",
			weddings : "boolean",
			women : "boolean"
		},
		adapter : {
			type : "sql",
			collection_name : "filter",
			idAttribute : 'id'
		}
	}
}; 