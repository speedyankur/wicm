var iOS7 = Alloy.Globals.isiOS7Plus();
$.win.top = iOS7 ? 20 : 0;
Ti.UI.setBackgroundColor('#E9E9E9');
var leftData = [];
var menuData = [{
	item : {
		header : "Discover",
		rows : ["Whichiscooler", "The Coolest", "My Things", "Filters"],
		views : ["wic", "coolest", "things", "filters"]
	}
}, {
	item : {
		header : "Post",
		rows : ["Add Things"],
		views : ["addthings"]
	}
}, {
	item : {
		header : "Connect",
		rows : ["Following", "Followers", "Find Friends", "Invite Friends", "Notifications"],
		views : ["following", "followers", "find", "invite", "notice"]
	}
}, {
	item : {
		header : "Settings",
		rows : ["Profile", "Other Settings", "Linked Accounts", "Feedback", "About", "Logout"],
		views : ["profile", "otherSettings", "linkedAccounts", "feedback", "about", "logout"]
	}
}];

function createSection(i) {
	var section = Alloy.Globals.createTableSectionHeaderView(menuData[i].item.header);
	var length = menuData[i].item.rows.length;

	for (var j = 0; j < length; j++) {
		var args = {
			title : menuData[i].item.rows[j],
			customView : menuData[i].item.views[j]
		};
		section.add(Alloy.createController('menurow', args).getView());
	}
	return section;
}

var lastRowSelected;
function rowSelect(e) {
	if (lastRowSelected) {
		lastRowSelected.setBackgroundColor('#eef5f8');
	}
	e.row.setBackgroundColor('#CCDDE4');
	lastRowSelected = e.row;
	if (e.row.customView == "logout") {
		Alloy.Globals.APIKey = null;
		if (OS_IOS)
			Alloy.Globals.navgroup.close($.win, {
				animated : true
			});
		else {
			$.win.close();
		}
		return;
	}
	if (currentView.id != e.row.customView) {
		$.ds.contentview.remove(currentView);
		currentView = Alloy.createController(e.row.customView).getView();
		$.ds.contentview.add(currentView);
		$.ds.logo.hide();
		$.ds.viewHeaderLabel.show();
		$.ds.viewHeaderLabel.text = e.row.headerTitle;
	}
	
}

for (var i = 0; i < menuData.length; i++) {
	leftData[i] = createSection(i);
}

// Pass data to widget leftTableView and rightTableView
$.ds.leftTableView.data = leftData;

$.ds.filterButton.addEventListener("click", function() {
	if (currentView.id != "filters") {
		$.ds.contentview.remove(currentView);
		currentView = Alloy.createController("filters").getView();
		$.ds.contentview.add(currentView);
		$.ds.logo.hide();
		$.ds.viewHeaderLabel.show();
		$.ds.viewHeaderLabel.text = "Filter";
	}

});

var currentView = Alloy.createController("wic").getView();
$.ds.contentview.add(currentView);

// Swap views on menu item click
$.ds.leftTableView.addEventListener('click', function selectRow(e) {
	rowSelect(e);
	$.ds.toggleLeftSlider();
});
$.ds.rightButton.hide();

// Set row title highlight colour (left table view)
/*
 var storedRowTitle = null;
 $.ds.leftTableView.addEventListener('touchstart', function(e) {
 storedRowTitle = e.row.customTitle;
 storedRowTitle.color = "#FFF";
 });
 $.ds.leftTableView.addEventListener('touchend', function(e) {
 storedRowTitle.color = "#666";
 });
 $.ds.leftTableView.addEventListener('scroll', function(e) {
 if (storedRowTitle != null)
 storedRowTitle.color = "#666";
 });
 */

Ti.App.addEventListener("sliderToggled", function(e) {
	if (e.direction == "right") {
		$.ds.leftMenu.zIndex = 2;
		$.ds.rightMenu.zIndex = 1;
	} else if (e.direction == "left") {
		$.ds.leftMenu.zIndex = 1;
		$.ds.rightMenu.zIndex = 2;
	}
});
