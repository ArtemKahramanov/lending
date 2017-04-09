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

 
$('.portfolio__slides').slick({ 
	centerMode: true, 
	slidesToScroll: 3, 
	initialSlide: 1, 
	аccessibility: false, 
	centerPadding: false, 
	autoplay: true, 
	dots: true,
	variableWidth: true 
});
 
$(function(){
	$('a[href^="#tarif"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 400);
	return false; 
});
	$('a[href^="#we"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 400);
	return false; 
});
	$('a[href^="#portfolio"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 400);
	return false; 
});
	$('a[href^="#contact"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 400);
	return false; 
});
}); 

	//E-mail Ajax Send
	$(".head-content__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "./mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заказ звонка!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	//E-mail Ajax Send
	$(".bid__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "./mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заказ звонка!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});





});