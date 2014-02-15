var data = [];
var filters = Alloy.Collections.filters;
filters.fetch();


$.tableView.addEventListener('click', function(e) {
	switch(e.source.id) {
		case "filterEdit":
			Ti.API.info("edit filter -" + e.row.model.filterName);
			editFilter(e.row.model);
			break;
		case "filterLabel":
		case "row":
			Ti.API.info("label or row clicked-" + e.source.id);
			Alloy.Globals.activeFilterRow.setBackgroundColor(Alloy.Globals.normalFilterRowColor);
			e.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
			Alloy.Globals.activeFilterRow = e.row;
			Alloy.Globals.setSelectedFilter(e.row.model.id);
			break;
	}
	
});
function editFilter(filter) {
	
	var editFilterWindow = Alloy.createController('editFilter',filter).getView();
	if (OS_IOS)
		Alloy.Globals.navgroup.open(editFilterWindow);
	else
		editFilterWindow.open();
}
function newFilter() {
	var editFilterWindow = Alloy.createController('newFilter').getView();
	if (OS_IOS)
		Alloy.Globals.navgroup.open(editFilterWindow);
	else
		editFilterWindow.open();
}
