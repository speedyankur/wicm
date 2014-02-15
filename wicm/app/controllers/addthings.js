var data = [];
var args = {};
args.title = "Take photo";
args.action = "CAMERA";
var row = Alloy.createController('peopleRowItem', args).getView();
row.height = "50";
data.push(row);

args = {};
args.title = "Choose an existing photo.";
args.action = "GALLERY";
var row = Alloy.createController('peopleRowItem', args).getView();
row.height = "50";
data.push(row);

args = {};
args.title = "From a web page";
args.action = "WEB";
var row = Alloy.createController('peopleRowItem', args).getView();
row.height = "50";
data.push(row);
function nowPostImage(imageData){
	var args ={};
	args.image = imageData;
	var postImageWindow = Alloy.createController('postImageWindow',args).getView();

	if (OS_IOS)
		Alloy.Globals.navgroup.open(postImageWindow);
	else
		postImageWindow.open();	
}

$.tableView.setData(data);
$.tableView.addEventListener("click", function(e) {
	Ti.API.info(e.row.action);
	switch (e.row.action) {
		case "CAMERA":
			Titanium.Media.showCamera({
				success : function(event) {
					nowPostImage(event.media);
				},
				cancel : function() {

				},
				error : function(error) {

				},
				saveToPhotoGallery : false
			});
			break;
		case "GALLERY":
			Titanium.Media.openPhotoGallery({
				success : function(event) {
					nowPostImage(event.media);
				},
				cancel : function() {
				},
				error : function(error) {
				}
			});
			break;
		case "WEB":
			var addFromWebWindow = Alloy.createController('addFromWebWindow').getView();
			if (OS_IOS)
				Alloy.Globals.navgroup.open(addFromWebWindow);
			else
				addFromWebWindow.open();
			break;
	}
});
