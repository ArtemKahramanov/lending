$(document).ready(function(){

$('.menu__butt').on('click', function(){
	$('.active-menu').fadeIn(350).css('display', 'flex');
});

$('.request').on('click', function(){
	$('.alert').fadeIn(350).css('display', 'flex');
	var scroll_el = $('.butt__close');
	if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	}
});

$('.butt__close').on('click', function(){
	$('.active-menu').fadeOut(350);
	$('.alert').fadeOut(350);
});


});