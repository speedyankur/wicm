var data = [];
for (i = 0; i < 10; i++) {
	var args = {};
	if (i%2) {
		args.leftImage="/images/image_holder_fem.png";
	} else {
		args.leftImage="/images/image_holder_mal.png";
	}
	args.title = "Username "+i;
	var row = Alloy.createController('peopleRowItem', args).getView();
	data.push(row);

}
$.tableView.setData(data);
$.tableView.addEventListener("click", function() {
	var userWindow = Alloy.createController('userWindow').getView();

	if (OS_IOS)
		Alloy.Globals.navgroup.open(userWindow);
	else
		userWindow.open();
});