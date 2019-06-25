$(document).ready(function(){
   
 
   //Fancy anmations
AOS.init({
  duration: 1600,
})


   
   
$("#form_query").change(function() {
    $('#help-text').text($('option:selected').attr('data-content'));
}).change();

   $('body').scrollspy({
        target: '#fixednav',
        //offset:115,
        offset:50,
    });

  
$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $('#fixednav').addClass('nav_shrunken');
  $('#fixednav').removeClass('nav_expanded');
  } else {
    $('#fixednav').removeClass('nav_shrunken');
  $('#fixednav').addClass('nav_expanded');
  }
});
   
   $(function () {
  var showClass = 'show';
  
  $('input,textarea,select').on('checkval', function () 
  {
    var label = $(this).prev('label');
    if(this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  })
  .on('click', function () {
    $(this).trigger('checkval');
  }); 
});
   
// Closes the Responsive Menu on Menu Item Click
   /*IMPORTANT
   This works, when the menu is shown on mobile any click will navigate and then close the option.
   
However if a dropdown-is selected, then it closes as well, so need to find a way to make it not apply
if dropdown is in play
   
   
   
   $('.navbar-collapse ul li a:not.dropdown').click(function() {
    $('.navbar-toggler:visible').click();
  navbar.removeClass('navbar-scroll-custom');
$(".nav-collapse").collapse('show');
});
  
   $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggler:visible').click();
  navbar.removeClass('navbar-scroll-custom');
$(".nav-collapse").collapse('show');
});
   */
  
// 
$('.navbar-toggler').click(function () {
  $('.navbar-toggler i').toggleClass('fa-bars fa-times');
});
  //'#fixednav a[href*="#"]:not([href="#"])',

$(document).on('click','#fixednav a[href*="#"]:not([href="#"]),a',function(e) {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
               
            }, 1000);
            //e.preventDefault();
        }
    }
});  
     
 //Navbar Scroll Event
var lastScrollTop = 0;
var navbar        = $('.navbar');
$(window).scroll(function(event){
   var st = $(this).scrollTop() -0;
   if (st > lastScrollTop){
       navbar.addClass('navbar-mobile-tiny');
      $(".nav-collapse").collapse('hide');
      // this collapses everything need this to just collapse the navbar $('.collapse').collapse('hide');
$('#fixed-top-navbar').collapse('hide');
    $('.navbar-toggler i').removeClass('fa-times');
    $('.navbar-toggler i').addClass('fa-bars');
   } else {
      navbar.removeClass('navbar-mobile-tiny');
         $('.collapse').collapse('hide');
        
     }
   lastScrollTop = st;
});

   

$('#fixednav').on('click', function(){
navbar.removeClass('navbar-mobile-tiny');
  $('.collapse').collapse('hide');
   
});   
   
   
/*
$('a').click(function() {
	$('html,body').animate({
		scrollTop: $('#design').offset().top
	}, 10000);
	return false;
})
*/  
   
   
$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInLeft');
      }
    });
  });
   
   

   
});
 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})


});