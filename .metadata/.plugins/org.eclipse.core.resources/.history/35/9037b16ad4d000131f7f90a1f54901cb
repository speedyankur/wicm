var data = [];


var section1 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
	text : "Create Filters"
});
section1.collapse = false;

var args = {};
args.title = "Be sure to create filters to control the content that is displayed in game mode.";

var row = Alloy.createController('accordianRows', args).getView();
section1.add(row);

data.push(section1);


var section2 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
	text : "Welcome"
});
section2.collapse = false;
for (i = 0; i < 3; i++) {
	var args = {};
	args.title = "Welcome Message "+i;

	var row = Alloy.createController('accordianRows', args).getView();
	section2.add(row);

}
data.push(section2);

$.tableView.setData(data);