$(document).ready(function(){ 
    slideItDown()
    topMenuOpen()
    slickSlider()
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


var topMenuOpen = function() {
  $('.js-mobile-bt').click(function(){
    if($(window).width() < 970) {
     if ($('.js-mobile-bt').hasClass('active'))
     {
         $(".js-mobile-bt").removeClass("active");
         $(".js-main-menu").slideUp(200);
     }
     else
     {
        $(".js-mobile-bt").addClass("active");
        $(".js-main-menu").slideDown(200);
     }
    }
  });
  $("html").click(function(e) {
    if($(window).width() < 970) {
      $(".js-main-menu").slideUp(200);
      $(".js-mobile-bt").removeClass('active');
    }
  });
  $(".js-main-menu-notclouse").click(function(e) {
    if($(window).width() < 970) {
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

