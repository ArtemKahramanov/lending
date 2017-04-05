$(document).ready(function(){

$('.menu__butt').on('click', function(){
	$('.active-menu').fadeIn(350).css('display', 'flex');
});

$('.button--request').on('click', function(event){
	event.preventDefault();
	$('.alert').fadeIn(350).css('display', 'flex');
	var scroll_el = $('.button__close');
	if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	}
});

$('.button--get').on('click', function(event){
	event.preventDefault();
	$('.bid').fadeIn(350).css('display', 'flex');
	var scroll_el = $('.bid__left-content');
	if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	}
});

$('.button__close').on('click', function(){
	$('.active-menu').fadeOut(350);
	$('.alert').fadeOut(350);
	$('.bid').fadeOut(350);
});


});