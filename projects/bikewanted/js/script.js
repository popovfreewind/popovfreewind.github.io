$(document).ready(function(){	
    topMenuOpen()
    scrollto()
    slider()
    InfoToursOpen()
    scrollToTop()
});

var topMenuOpen = function() { 
  $('.js-mobile-bt').click(function(){
     if ($('.js-mobile-bt').hasClass('active'))
     {
         $(".js-mobile-bt").removeClass("active");
         $(".js-mobile-bt span").text('Меню');
         $(".js-main-menu").slideUp(200);
     }
     else
     {
        $(".js-mobile-bt").addClass("active");
        $(".js-mobile-bt span").text('Закрыть');
        $(".js-main-menu").slideDown(200);
     }
  });
};

var scrollto = function() { 
    $(".scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
    }); 
};

var slider = function() {
  $('.slide-js').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 8000,
    fade: true,
    pauseOnHover: false,
    arrows: false
  });
};

var InfoToursOpen = function() { 
  $('.js-tours__name-open').click(function(){
        $(".js-tours__item.active").children(".js-tours__hover").slideUp(200);
        $(".js-tours__item.active").children(".js-tours__hover-arrow").slideUp(200);
        $(".js-tours__item").removeClass("active")
        $(this).closest(".js-tours__item").addClass("active");
        $(this).prev(".js-tours__hover-arrow").slideDown(200); 
        $(this).next(".js-tours__hover").slideDown(200);
  });
  $('.js-tours__hover-clouse-bt').click(function(){
        $(".js-tours__hover").slideUp(200);
        $(".js-tours__hover-arrow").slideUp(200);
        $(".js-tours__item").removeClass("active");
  });
};

var scrollToTop = function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } 
    else {
      $('.scrollup').fadeOut();
    }
  });  
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
};






