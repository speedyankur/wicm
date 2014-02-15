var data = [];




var followingSection = Alloy.Globals.createTableSectionHeaderView("Following");
for (i = 0; i < 3; i++) {
	var args = {};
	if (i % 2) {
		args.leftImage = "/images/image_holder_fem.png";
	} else {
		args.leftImage = "/images/image_holder_mal.png";
	}
	args.title = "Username "+i;

	var row = Alloy.createController('peopleRowItem', args).getView();
	followingSection.add(row);

}
data.push(followingSection);


var followerSection = Alloy.Globals.createTableSectionHeaderView("Follower");	
for (i = 0; i < 3; i++) {
	var args = {};
	if (i % 2) {
		args.leftImage = "/images/image_holder_fem.png";
	} else {
		args.leftImage = "/images/image_holder_mal.png";
	}
	args.title = "Username "+i;

	var row = Alloy.createController('peopleRowItem', args).getView();
	followerSection.add(row);

}
data.push(followerSection);


var otherSection = Alloy.Globals.createTableSectionHeaderView("Other Users");	

for (i = 0; i < 4; i++) {
	var args = {};
	if (i % 2) {
		args.leftImage = "/images/image_holder_fem.png";
	} else {
		args.leftImage = "/images/image_holder_mal.png";
	}
	args.title = "Username "+i;

	var row = Alloy.createController('peopleRowItem', args).getView();
	otherSection.add(row);

}
data.push(otherSection);

$.tableView.setData(data);
$.tableView.addEventListener("click", function() {
	var userWindow = Alloy.createController('userWindow').getView();

	if (OS_IOS)
		Alloy.Globals.navgroup.open(userWindow);
	else
		userWindow.open();
});