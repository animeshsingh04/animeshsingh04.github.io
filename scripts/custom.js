$(document).ready(function(){
	//alert('notloading');
	ironman();
	airBinder();
	tronLegacy();
});

function ironman()
{
	//alert('hello');
	$(".iron_man").delay(1000).animate({left:'0px'},{duration:600});
}

function airBinder()
{
	$(".the_last").css('display','block');
	$(".the_last").delay(2000).animate({bottom:'0px'},{duration:600});
}

function tronLegacy()
{
	$(".tron_legacy").css('display','block');
	$(".tron_legacy").delay(3000).animate({right:'0px'},{duration:600});
}