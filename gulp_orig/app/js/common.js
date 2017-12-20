$(document).ready(function(){
	AjaxForm();
	inputNotSendOnInter();
    MenuOpen();
    MainBgAnimate();
    WorksItemAnimate();
    thenIOS()
    
});

var AjaxForm = function() {
	$('#form_contacts').submit(function(){
		$.ajax({
			type: 'POST',
			url: '../php/mail.php',
			data: $(this).serialize()
		}).done(function(){
			alert('Thank you for your message');
			setTimeout(function() {
				$('#form_contacts').trigger('reset');
			}, 1000);
		});
		return false;
	});	
};

var inputNotSendOnInter = function() {
	$('form input').keydown(function(event){
	  if(event.keyCode == 13) {
	    event.preventDefault();
	    return false;
	  }
	});
};

var thenIOS = function() {
	var isiOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

	if(isiOS === true) {

	    // Store -webkit-tap-highlight-color as this gets set to rgba(0, 0, 0, 0) in the next part of the code
	    var tempCSS = $('a').css('-webkit-tap-highlight-color');

	    $('body').css('cursor', 'pointer')                                    // Make iOS honour the click event on body
	             .css('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)');     // Stops content flashing when body is clicked

	    // Re-apply cached CSS
	    $('a').css('-webkit-tap-highlight-color', tempCSS);

	};
};

var MenuOpen = function() { 
  $('#js_mob_bt').click(function(){
     if ($('#js_mob_bt').hasClass('active'))
     {
         $('#js_mob_bt').removeClass('active').addClass('default');
         $('#js_menu').slideUp(200);
         $('#menu_ico-part-top').css({
	        	'top': '11px',
	        	'transform': 'rotatez(0deg)',
	        	'transition': 'top 0.2s, transform 0.2s',
	        });
	        $('#menu_ico-part-mid').css({
	        	'transform': 'rotatez(0deg)',
	        	'transition': 'transform 0.2s',
	        });
	        $('#menu_ico-part-bot').css({
	        	'top': '25px',
	        	'transform': 'rotatez(0deg)',
	        	'transition': 'top 0.2s, transform 0.2s',
	        });
         $('body').css('overflow', 'auto');
         if ($(window).scrollTop() > 100) {
		     		$("#js_mob_bt").css({
			        'width': '40px',
			        'opacity': 0.5,
			        'transition': 'width 0.2s 0.2s, opacity 0.2s',
			      });
			      $('#js_bt_text').css({
			        'transform': 'rotatex(90deg)',
			        'transition': 'transform 0.1s 0s',
			      });
		     }
     }
     else
     {
        $("#js_mob_bt").addClass('active').removeClass('default').css({
        	'width': '100%',
	        'opacity': 1,
	        'transition': 'width 0s 0s, opacity 0.1s 0s',
        });
        $('#js_bt_text').css({
	        'transform': 'rotatex(0)',
	        'transition': 'transform 0s 0s',
	      });
        $('#js_menu').slideDown(200);
        $('#menu_ico-part-top').css({
        	'top': '18px',
        	'transform': 'rotatez(135deg)',
        	'transition': 'top 0.2s, transform 0.4s',
        });
        $('#menu_ico-part-mid').css({
        	'transform': 'rotatez(45deg)',
        	'transition': 'transform 0.2s',
        });
        $('#menu_ico-part-bot').css({
        	'top': '18px',
        	'transform': 'rotatez(45deg)',
        	'transition': 'top 0.2s, transform 0.2s',
        });
        $('body').css("overflow", "hidden");
     };
  });
  $(window).scroll(function(){
  	if ($('#js_mob_bt').hasClass('default'))
  	{
	    if ($(window).scrollTop() > 100) {
	      $("#js_mob_bt").css({
	        'width': '40px',
	        'opacity': 0.5,
	        'transition': 'width 1s 0.5s, opacity 1s 0.2s',
	      });
	      $('#js_bt_text').css({
	        'transform': 'rotatex(90deg)',
	        'transition': 'transform 0.2s 0s',
	      });
	    }
	    else {
	      $("#js_mob_bt").css({
	        'width': '100%',
	        'opacity': 1,
	        'transition': 'width 1s 0.2s, opacity 1s 1.2s',
	      });
	      $('#js_bt_text').css({
	        'transform': 'rotatex(0)',
	        'transition': 'transform 0.2s 1.8s',
	      });
	    }
	   }
  });
};

var MainBgAnimate = function(){
	window.onload = function() {
		$('#main_bg').css({
			'transition': 'background  3s',
			'background': 'rgba(0, 0, 0, .5)',
		});
		$('#js_main_tittle').css({
			'transition': 'transform 2s 2s, color 4s 2s',
			'transform': 'scale(1)',
			'color': '#fff',
		});
		$('#js_main_sub_tittle').css({
			'transition': 'transform 2s 3s, color 4s 3s',
			'transform': 'scale(1)',
			'color': '#fff',
		});
		$('#js_main_link').css({
			'transition': 'transform 2.5s 4.5s, color 4s 4s, border 0.2s',
			'transform': 'scale(1)',
			'color': '#fff',
		});
	};
};

var WorksItemAnimate = function(){
	$('.js_works_item').hover(
		function(){
			$(this).css({
				'transform': 'scale(1.015)',
				'transition': 'transform 0.2s',
			});
			$(this).find('.js_works_text').fadeTo(200, 1);
		},
		function(){
			$(this).css({
				'transform': 'scale(1)',
			});
			$(this).find('.js_works_text').fadeTo(200, 0);
		}
	);
};
