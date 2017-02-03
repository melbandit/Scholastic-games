// Start Parent Page
var levelselect = $('.level-select'),
	currentSelect = $('.level-select.current');

levelselect.on("click", function (e){
	//	e.preventDefault();

	var clickLevel = $(this);

	if (clickLevel.hasClass('current')){
	}else{

		levelselect.removeClass('current');
		levelselect.attr('src', 'assets/img/parents/unselected.png');
		clickLevel.addClass('current');
		clickLevel.attr('src', 'assets/img/parents/selected.png');
	}
});

(function () {
	// grab variables all my global variable
	var numbuttons = $('.parent-num'),
		pwdinput = $('#parent-pwd'),
		msg = "";
		
	// when a number button is clicked
	numbuttons.on('click', function (evt) {
		evt.preventDefault();

		var clickVal = $(this).val(),
			val = pwdinput.val(),
			realVal = val + clickVal;

		console.log(clickVal);

		pwdinput.val( pwdinput.val()+clickVal );
		//if the input value is correct, go to next page
		if (pwdinput.val() == "112") {
			//go to next page
			console.log("go to next page");
			window.location.href = "parentHome.html";
		} else if (pwdinput.val().length > 2) { //else clear input val
			setTimeout(function() {
				pwdinput.val("");
			}, 200);
		}
	});
})();
// End Parent Page