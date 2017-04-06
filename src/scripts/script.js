$(document).ready(function(){

$('.menu__butt').on('click', function(){
	$('.active-menu').fadeIn(350).css('display', 'flex');
});

$('.button--request').on('click', function(event){
	event.preventDefault();
	$('.alert').fadeIn(350).css('display', 'flex');
});

$('.button--get').on('click', function(event){
	event.preventDefault();
	$('.bid').fadeIn(350).css('display', 'flex');
});

$('.button__close').on('click', function(){
	$('.active-menu').fadeOut(350);
	$('.alert').fadeOut(350);
	$('.bid').fadeOut(350);
});


// $('.portfolio__slides > div').slick({
//   	variableWidth: true
// });



$('.portfolio__slides').slick({
  	centerMode: true,
  	slidesToScroll: 3,
	initialSlide: 1,
	аccessibility: false,
	centerPadding: false
});







});