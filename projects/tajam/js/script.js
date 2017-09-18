$(document).ready(function(){	

    topMenuOpen()

});

var topMenuOpen = function() { 
  $('.js-mobile-bt').click(function(){
     if ($('.js-mobile-bt').hasClass('active'))
     {
         $(".js-mobile-bt").removeClass("active");
         $(".js-mobile-bt span").text('Menu');
         $(".js-main-menu").hide(200);
     }
     else
     {
        $(".js-mobile-bt").addClass("active");
        $(".js-mobile-bt span").text('Close');
        $(".js-main-menu").show(200);
     }
  });
};

