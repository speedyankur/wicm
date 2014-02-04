var args = arguments[0];
if (!args) {
	$.picView.visible = false;
	$.username.text = "";
	$.comment.text = "Sorry, No Comments available";
} else {
	
	if (args.image) {
		$.imageView.image = args.image;
	}
	if (args.comment) {
		$.comment.text = args.comment;
	}
	if (args.username) {
		$.username.text = args.username;
	}

}

