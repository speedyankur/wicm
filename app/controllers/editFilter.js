var iOS7 = Alloy.Globals.isiOS7Plus();
$.window.top = iOS7 ? 20 : 0;
Ti.UI.setBackgroundColor('#E9E9E9');
var data = [];
var filters = Alloy.Collections.filters;
var filterToEdit = arguments[0] || {};
Ti.API.info(JSON.stringify(filterToEdit));
if (filterToEdit) {
	$.filterName.value = filterToEdit.filterName;
}

var tags = [{
	key : "animals",
	value : "Animals"
}, {
	key : "architecture",
	value : "Architecture"
}, {
	key : "automotive",
	value : "Automotive"
}, {
	key : "design",
	value : "Design"
}, {
	key : "gadgets",
	value : "Gadgets"
}, {
	key : "gaming",
	value : "Gaming Literature"
}, {
	key : "men",
	value : "Men’s Fashion"
}, {
	key : "military",
	value : "Military & Weapons"
}, {
	key : "music",
	value : "Music, Film, & Entertainment Nautical"
}, {
	key : "people",
	value : "People"
}, {
	key : "photography",
	value : "Photography"
}, {
	key : "places",
	value : "Places"
}, {
	key : "science",
	value : "Science & Nature"
}, {
	key : "science",
	value : "Science & Nature"
}, {
	key : "sports",
	value : "Sports & Outdoors"
}, {
	key : "tattoos",
	value : "Tattoos"
}, {
	key : "technology",
	value : "Technology"
}, {
	key : "toys",
	value : "Toys"
}, {
	key : "weddings",
	value : "Weddings"
}, {
	key : "women",
	value : "Women’s Fashion"
}];

var people = [{
	key : "following",
	value : "Following"
}, {
	key : "followers",
	value : "Followers"
}, {
	key : "everyone",
	value : "Everyone"
}];
var time = [{
	key : "last7hours",
	value : "Last 24 Hours"
}, {
	key : "last7days",
	value : "Last 7 Days"
}, {
	key : "last30days",
	value : "Last 30 Days"
}, {
	key : "allTime",
	value : "All Time"
}];

var section2 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
	text : "People",
	backgroundColor : "#B8D9E5",
	backgroundImage : "/images/icon_people.png"
});
section2.collapse = false;
for (var i = 0; i < people.length; i++) {
	section2.add(Alloy.createController('accordianRows', {
		title : people[i].value,
		key : people[i].key,
		selected : filterToEdit[tags[i].key] ? true : false,
		backgroundColor : filterToEdit[people[i].key] ? Alloy.Globals.activeFilterRowColor : Alloy.Globals.normalFilterRowColor
	}).getView());

}
data.push(section2);

var section3 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
	text : "Time",
	backgroundColor : "#B8D9E5",
	backgroundImage : "/images/icon_time.png"
});
section3.collapse = false;
for (var i = 0; i < time.length; i++) {

	section3.add(Alloy.createController('accordianRows', {
		title : time[i].value,
		key : time[i].key,
		selected : filterToEdit[tags[i].key] ? true : false,
		backgroundColor : filterToEdit[time[i].key] ? Alloy.Globals.activeFilterRowColor : Alloy.Globals.normalFilterRowColor

	}).getView());
}
data.push(section3);

var section1 = Alloy.Globals.createTableSectionHeaderViewForAccordian({
	text : "Tags",
	backgroundColor : "#B8D9E5",
	backgroundImage : "/images/icon_tags.png"
});
section1.collapse = false;
for (var i = 0; i < tags.length; i++) {

	section1.add(Alloy.createController('accordianRows', {
		title : tags[i].value,
		key : tags[i].key,
		selected : filterToEdit[tags[i].key] ? true : false,
		backgroundColor : filterToEdit[tags[i].key] ? Alloy.Globals.activeFilterRowColor : Alloy.Globals.normalFilterRowColor

	}).getView());

}
data.push(section1);

$.tableView.setData(data);
$.tableView.addEventListener('click', function(e) {
	if (e.row.selected) {
		e.row.setBackgroundColor(Alloy.Globals.normalFilterRowColor);
		e.row.selected = false;
		filterToEdit[e.row.key] = false;

	} else {
		e.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
		e.row.selected = true;
		filterToEdit[e.row.key] = true;
	}
});
function goBack() {
	Ti.API.info("going back now");
	if (OS_IOS)
		Alloy.Globals.navgroup.close($.window, {
			animated : true
		});
	else {
		$.window.close();
	}

}

function save() {
	var filter = filters.get(filterToEdit.id);
	filterToEdit["filterName"] = $.filterName.value;
	filter.set(filterToEdit).save();
	Ti.API.info("going back now");
	if (OS_IOS)
		Alloy.Globals.navgroup.close($.window, {
			animated : true
		});
	else {
		$.window.close();
	}
}

function deleteFilter() {

	//Confirm and delete
	var alertDelete = Titanium.UI.createAlertDialog({
		title : 'Confirm deletion',
		message : 'Are you sure you want to delete this filter named "' + filterToEdit.filterName + '" ?',
		buttonNames : ['Yes', 'No'],
		cancel : 1
	});
	alertDelete.show();
	alertDelete.addEventListener('click', function(eInner) {
		if (eInner.cancel === eInner.index || eInner.cancel === true) {
			return;
		} else {
			// find the todo task by id
			var filter = filters.get(filterToEdit.id);
			filter.destroy();
			if (OS_IOS)
				Alloy.Globals.navgroup.close($.window, {
					animated : true
				});
			else {
				$.window.close();
			}
		}
	});

}
