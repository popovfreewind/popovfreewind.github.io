$(document).ready(function(){	

    scrollToTop()
    pressMenuShow()
});

var pressMenuShow = function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('.press-js').slideDown(400);
    }
  });
};

var scrollToTop = function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').slideDown(200);
    } 
    else {
      $('.scrollup').slideUp(200);
    }
  });  
  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
};






