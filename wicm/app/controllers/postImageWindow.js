var iOS7 = Alloy.Globals.isiOS7Plus();
$.window.top  = iOS7 ? 20 : 0;
Ti.UI.setBackgroundColor('#E9E9E9');
var args = arguments[0] || {};
if (args.image)
	$.selectedImage.image = args.image;

$.saleSwitch.status = false;
function onSwitch() {
	$.yesBtn.backgroundImage = "/images/btn_yes_sel.png";
	$.noBtn.backgroundImage = "/images/btn_no.png";
	$.saleSwitch.status = true;
}

function offSwitch() {
	$.yesBtn.backgroundImage = "/images/btn_yes.png";
	$.noBtn.backgroundImage = "/images/btn_no_sel.png";
	$.saleSwitch.status = false;
}

function onOpen() {
	if (OS_ANDROID)
		$.textArea.hide();
}

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

var data = [];
var tags = ["Animals", "Architecture", "Automotive", "Design", "Gadgets", "Gaming Literature", "Men’s Fashion", "Military & Weapons", "Music, Film, & Entertainment Nautical", "People", "Photography", "Places", "Science & Nature", "Sports & Outdoors", "Tattoos", "Technology", "Toys", "Weddings", "Women’s Fashion"];

var tagSection = Alloy.Globals.createTableSectionHeaderView("Tags", "/images/icon_tags.png");
tagSection.collapse = false;
for (var i = 0; i < tags.length; i++) {
	tagSection.add(Alloy.createController('tagRowItem', {
		title : tags[i],
		backgroundColor : "#ECF5F8"
	}).getView());

}
data.push(tagSection);

$.tableView.setData(data);
$.tableView.addEventListener('click',function(e){
	if(e.row.selected){
		e.row.setBackgroundColor('#eef5f8');
		e.row.selected = false;
	}else{
		e.row.setBackgroundColor('#CCDDE4');
		e.row.selected = true;
	}
});

var hint = 'Description…';

hintText(hint);

$.textArea.addEventListener('focus', function(e) {
	if ($.textArea.value == hint) {
		$.textArea.setValue("");
	}
});
$.textArea.addEventListener('blur', function(e) {
	hintText();
});

function hintText(hintText) {
	if ($.textArea.value.length == 0) {
		$.textArea.setValue(hint);
	}

}

function onWindowClick(e) {

	if (e.source.id != "textArea")
		$.textArea.blur();
}

if (OS_ANDROID) {
	setTimeout(function() {
		$.textArea.show();
	}, 1000);
}

