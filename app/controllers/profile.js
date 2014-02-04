
for ( i = 0; i < 10; i++) {
	var score = "   CS : " + i;

	if ((i) % 2 == 0) {
		var args = {
			score : score,
			image : "/images/thing1.jpg"
		};
		$.col1.add(Alloy.createController('thing', args).getView());

	} else {
		var args = {
			score : score,
			image : "/images/thing2.jpg"
		};		
		$.col2.add(Alloy.createController('thing', args).getView());
	}
}
