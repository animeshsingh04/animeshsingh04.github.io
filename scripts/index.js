$(document).ready(function(e){
	$win = $(window);
	$navbar = $("#header");
	$toggle = $(".toggle-button");
	var width = $navbar.width();

	toggleOnClick($win, $navbar, width);

	//resize event
	$win.resize(function(){
		toggleOnClick($win, $navbar, width);
	});

	$toggle.click(function(){
		$navbar.toggleClass("toggle-left");
	});

});

function toggleOnClick($win, $navbar, width) {
	if ($win.width() <= 768) {
		$navbar.css({left: `-${width}px`});
	} else {
		$navbar.css({left: '0px'});
	}
}

var typed = new Typed('#typed', {
	strings: [
	    "Computer Science",
	    "Web API",
	    "UI Development",
		"Machine Learning",
	],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
});