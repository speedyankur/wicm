// Attach the bound model ($model) to the row so
// we can access it in a click event.
if ($model) {
	$.row.model = $model.toJSON();
}
Ti.API.info("$.row.model.filterName-"+$.row.model.filterName);
if($.row.model.filterName == "All Things"){
	$.filterEdit.visible = false;
}
if($.row.model.id == Alloy.Globals.getSelectedFilter())
{
	$.row.setBackgroundColor(Alloy.Globals.activeFilterRowColor);
	Alloy.Globals.activeFilterRow = $.row;
}
$.filterLabel.text = $.row.model.filterName || '';
$.row.height = 50;
