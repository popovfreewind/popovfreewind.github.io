$(document).ready(function(){	
    topMenuOpen()
    scrollto()
    scrollToTop()
});

var topMenuOpen = function() { 
  $('.js-mobile-bt').click(function(){
     if ($('.js-mobile-active').hasClass('active'))
     {
         $(".js-mobile-active").removeClass("active");
         $(".js-menu__list").slideUp(200);
         $(".js-bg").css( "background", "rgba(0, 0, 0, .5)");
     }
     else
     {
        $(".js-mobile-active").addClass("active");
        $(".js-menu__list").slideDown(200);
        $(".js-bg").css( "background", "rgba(0, 0, 0, 1)");
     }
  });
};

var scrollto = function() { 
    $(".scrollto").click(function () {
        if($(window).width() < 768) {
           $(".js-mobile-active").removeClass("active");
           $(".js-menu__list").slideUp(200);
           $(".js-bg").css( "background", "rgba(0, 0, 0, .5)");
        };
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
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






