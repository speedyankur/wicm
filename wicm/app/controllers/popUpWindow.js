 var args = arguments[0] || {};
 
 $.label.text = args.popUpLabel;
 $.but1.title = args.but1Label;
 $.but2.title = args.but2label;
 
 $.but1.addEventListener("click", function(){
	 args.but1handler();
 });
 
 $.but2.addEventListener("click", function(){
	 args.but2handler();
 });
 