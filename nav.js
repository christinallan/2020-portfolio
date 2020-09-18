$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 50 ){
    
 		$('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
 	};   	
});


$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 50 ){
    
 		$('.nav-link').addClass('color');
    
  } else {
    
    $('.nav-link').removeClass('color');
    
 	};   	
});


$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 50 ){
    
 		$('.active-nav-link').addClass('color');
    
  } else {
    
    $('.active-nav-link').removeClass('color');
    
 	};   	
});



$(document).ready(function() {

		$('.bar-container').on('click', function() {
		$('.bar').toggleClass('animate');


	})
});

$(document).ready(function() {

$('.bar-container').click(function(){
    $('.hamburger').fadeToggle();


	})
});


