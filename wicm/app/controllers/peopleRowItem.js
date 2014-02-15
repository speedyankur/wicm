var args = arguments[0] || {};
if (args.leftImage)
	$.row.leftImage = args.leftImage;
if (args.action)
	$.row.action = args.action;
$.row.title = args.title || '';
$.row.height = 50;
if (args.rightImage)
	$.row.rightImage = args.rightImage;
else
	$.row.rightImage = '/images/arrow_right.png';	