$(document).ready(function(){ 
	slideItDown()
	MenuOpen()
	slickSlider()
	slideDownOnHover()
});


var slideItDown = function() {
	$('.js-slide-it-down').click(function(){
		$('.js-slide-it-down-list').slideDown(200);
		$('.js-slide-it-down').addClass('active');
	});
	$("html").click(function(e) {
		$(".js-slide-it-down-list").slideUp(200);
		$(".js-slide-it-down").removeClass('active');
	});
	$(".js-slide-it-down").click(function(e) {
		e.stopImmediatePropagation();
	});
};


var MenuOpen = function() {
	$('.js-menu-mobile-bt').click(function(){
		if($(window).width() < 992) {
			if ($(this).hasClass('active'))
			{
				$(this).removeClass("active");
				$(this).next(".js-menu").slideUp(200);
				$(this).next(".js-menu").css('z-index','auto');
			}
			else
			{
				$(this).addClass("active");
				$(this).next(".js-menu").slideDown(200);
				$(this).next(".js-menu").css('z-index','999');
			}
		}
	});
	$("html").click(function(e) {
		if($(window).width() < 992) {
			$(".js-menu-notclouse").slideUp(200);
			$(".js-menu-notclouse").css('z-index','auto');
			$(".js-menu-mobile-bt-notclouse").removeClass('active');
		}
	});
	$(".js-menu-cover-notclouse").click(function(e) {
		if($(window).width() < 992) {
			e.stopImmediatePropagation();
		}
	});
};


var slickSlider = function() {
	$('.slider').slick({
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		adaptiveHeight: true
	});
};

var slideDownOnHover = function() {
	$('.js-hover').mouseenter(function(){
		$(this).find(".js-slide-it-down-on-hover").delay(200).slideDown(100);
		$(this).css('z-index','100');
	});
	$('.js-hover').mouseleave(function(){
		$(this).find(".js-slide-it-down-on-hover").stop(true).delay(100).slideUp(100);
		$(this).delay(200).queue(function(){
			$(this).css('z-index','auto');
			$(this).dequeue();
		});
	});
}

