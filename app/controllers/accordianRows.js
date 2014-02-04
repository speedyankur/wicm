var args = arguments[0] || {};
$.row.title = args.title || '';
if(args.selected)
	$.row.selected = args.selected;
if(args.backgroundColor)
	$.row.backgroundColor = args.backgroundColor;
if(args.key)
	$.row.key = args.key;