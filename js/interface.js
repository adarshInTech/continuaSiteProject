(function ($) { "use strict";
	
document.addEventListener('DOMContentLoaded', function() {
    // Select both the Therapies and Conditions links
    var navLinks = document.querySelectorAll('a[href="therapies.html"], a[href="conditions.html"]');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default action (navigation or dropdown)
            event.preventDefault();

            // Check if the dropdown is already shown for the clicked link
            var isDropdownShown = $(this).next('.dropdown-menu').is(':visible');

            // If dropdown is not shown, show it. Else, navigate to the page.
            if (!isDropdownShown) {
                $(this).dropdown('toggle'); // Show dropdown
            } else {
                window.location.href = this.href; // Navigate to the link's href
            }
        });
    });
});

  
  
	$(window).scroll(function(){
	  var sticky = $('.site_header'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('fixed-top');
	  else sticky.removeClass('fixed-top');
	});


    
     // Event for pushed the video
     $('#carouselExampleIndicators').carousel({
        pause: true,
        interval: false
    });
/**========SERVICES-SLIDER========**/
	$('#services_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

/**========SERVICES-SLIDER========**/
    $('#tasti_slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('#gallery').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear'
  });
/**========Scroll animation========**/
 new WOW().init();

})(jQuery);