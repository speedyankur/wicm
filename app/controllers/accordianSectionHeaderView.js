var args = arguments[0] || {};
if(args.backgroundColor)
	$.view.backgroundColor = args.backgroundColor;
if(args.backgroundImage){
	$.additionalIcon.image = args.backgroundImage;	
	$.label.left = 60; 
}
	
$.label.text = args.text || '';

function toggleSection(e) {
	

	if (e.source.getParent()) {
		var rows = e.source.getParent().section.getRows();
		Ti.API.info("-" + rows.length);

		_.each(rows, function(row, index) {

			if (e.source.getParent().section.collapse) {
				row.height = "80";
				$.icon.image = "/images/arrow_down.png";
			} else {
				$.icon.image = "/images/arrow_right.png";
				if(OS_ANDROID)
					row.height = "0";
				else
					row.height = "1";
					

			}

		});
		e.source.getParent().section.collapse = !e.source.getParent().section.collapse;
	}

}