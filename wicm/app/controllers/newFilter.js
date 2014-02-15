var data = [];
var filters = Alloy.Collections.filters;
var filterData = {
	filterName : "",
	following : false,
	followers : false,
	everyone : false,
	last24hours : false,
	last7days : false,
	last30days : false,
	allTime : false,
	animals : false,
	architecture : false,
	automotive : false,
	design : false,
	gadgets : false,
	gaming : false,
	men : false,
	military : false,
	music : false,
	people : false,
	photography : false,
	places : false,
	science : false,
	sports : false,
	tattoos : false,
	technology : false,
	toys : false,
	weddings : false,
	women : false
};

var tags = [{
	key : "animals",
	value : "Animals"
},{
	key : "architecture",
	value : "Architecture"
},{
	key : "automotive",
	value : "Automotive"
},{
	key : "design",
	value : "Design"
},{
	key : "gadgets",
	value : "Gadgets"
},{
	key : "gaming",
	value : "Gaming Literature"
},{
	key : "men",
	value : "Men’s Fashion"
},{
	key : "military",
	value : "Military & Weapons"
},{
	key : "music",
	value : "Music, Film, & Entertainment Nautical"
},{
	key : "people",
	value : "People"
},{
	key : "photography",
	value : "Photography"
},{
	key : "places",
	value : "Places"
},{
	key : "science",
	value : "Science & Nature"
},{
	key : "science",
	value : "Science & Nature"
},{
	key : "sports",
	value : "Sports & Outdoors"
},{
	key : "tattoos",
	value : "Tattoos"
},{
	key : "technology",
	value : "Technology"
},{
	key : "toys",
	value : "Toys"
},{
	key : "weddings",
	value : "Weddings"
},{
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
		backgroundColor : "#ECF5F8"
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
		backgroundColor : "#ECF5F8"
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
		backgroundColor : "#ECF5F8"
	}).getView());

}
data.push(section1);

$.tableView.setData(data);
$.tableView.addEventListener('click', function(e) {
	if (e.row.selected) {
		e.row.setBackgroundColor(Alloy.Globals.normalFilterRowColor);
		e.row.selected = false;
		filterData[e.row.key] = false;

	} else {
		e.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
		e.row.selected = true;
		filterData[e.row.key] = true;
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
	filterData['filterName'] = $.filterName.value;
	Ti.API.info(JSON.stringify(filterData));
	// Create a new model for the todo collection
	var filter = Alloy.createModel('filter', filterData);

	// add new model to the global collection
	filters.add(filter);

	// save the model to persistent storage
	filter.save();

	Ti.API.info("going back now");
	if (OS_IOS)
		Alloy.Globals.navgroup.close($.window, {
			animated : true
		});
	else {
		$.window.close();
	}
}
