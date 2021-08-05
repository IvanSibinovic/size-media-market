var loader = document.querySelector('.loader, .preload');

function preload() {
  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => (
    loader.style.display = 'none'), 500);
  }, 1000);
}


$('li.tags').on('click', function (e) {
  window.location.href= $(this).children('a').attr("href");
  return false;
});

$(".menu, .overlaid, .tags").click(function(){
	if ($(window).width() < 1050) {
		$('ul').toggleClass('active1');
		$('nav').toggleClass('active2');
		$('.overlaid').toggleClass('overlay-appear');
		}
	else {
		return null;
	}
});
// Logo and Navbar change on scroll:  
$(window).scroll(function () {
  if ($(document).scrollTop() > ($('nav').height())) {
    $('nav').addClass('scrolled-nav');
    } else {
    $('nav').removeClass('scrolled-nav');
    }
  });
function goBack() {
      window.history.back();
    }

setTimeout(()=> {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    backSpeed: 40
  });
}, 1000)

preload();
AOS.init();

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        }
    }
});
