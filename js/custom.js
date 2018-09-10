$(document).ready(function() {
	if ($(window).width() > 1026) {
		$('#fullpage').fullpage({
			sectionsColor: ['', '', '', '' ],
			anchors: ['firstPage', 'secondPage', 'thirdPage' , 'forthPage', 'fifthPage', 'seventPage','lastPage'],		
			menu: '#menu',
			navigation: true,
			navigationPosition: 'right',
			responsiveWidth: 900,
			scrollingSpeed: 1000
		});
	}
	else {
		
	}
		
	
	if ($(window).width() < 1025) {
		$('.menutoggle').click(function(){
			$('.menubox').fadeIn();
			$('body').addClass('lock');
			$('.enquirybx').fadeOut();
		});		
		$('.menubox ul li a').click(function(){
			$('.menubox').fadeOut();
			$('body').removeClass('lock');
			$('.enquirybx').fadeIn();
		});		
		$('.closemenutoggle').click(function(){
			$('.menubox').fadeOut();
			$('body').removeClass('lock');
			$('.enquirybx').fadeIn();
		});
	}
	
	
	if ($(window).width() < 1025) {
	$('header ul li a[href*=\\#]').on('click', function(event){     
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top-75}, 
	500);
	});
	
		$('.leftfoot_mob ul li a[href*=\\#]').on('click', function(event){     
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top-75}, 
	500);
	});
	
	
	}
	else {
		
	}
	
	

if ($(document).width() < 1023) {
	$('.enquirybx a[href*=\\#]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top-75}, 500);
	});
}
else{}

	
	
	/*-----------Popup Jquery ---------------*/
	$('.loginbx').click(function(){
		$('.popupbox').show();
		$('.inspopupbox').show();
	});
	$('.closebtnbx1').click(function(){
		$('.popupbox').hide();
		$('.inspopupbox').hide();
	});
	$('.obmpagebx').click(function(){
		$('.popupbox1').show();
		$('.inspopupbox1').show();
	});		
	$('.closebtnbx').click(function(){
		$('.popupbox1').hide();
		$('.inspopupbox1').hide();
	});	
	$('#memberbox').click(function(){
		$('.insloginbox').hide();
		$('.insregistration').show();
	});
	/*-----------Accordian ---------------*/
	
	
	$(".verticalInner .tabs a").click(function(){
		
	 $(".acc_icon").removeClass("active");
	 $(".acc_contentbox").css("display","none");
	 	
	 var rel = $(this).attr("rel");
	 
	 $("#" + rel).find(".acc_icon").addClass("active");
	 $("#" + rel).find(".acc_contentbox").css("display","block");
	 	
		
	});
	
	
	$('.acc_heading').click(function(){
		$('.acc_icon').toggleClass('active');
		$(this).parents('.acc_processbox').siblings().find('.active').removeClass('active');
		$(this).parents('.acc_processbox').find('.acc_contentbox').slideToggle();
		$(this).parents('.acc_processbox').siblings().find('.acc_contentbox').slideUp();
		
	});
	/*-----------OBM popup Slider---------------*/
	$('.slider').owlCarousel({
		margin:0,
		responsiveClass:true,
		autoplay:true,
		autoplayTimeout:5000,
		nav:true,			
		loop:true,
		lazyLoad:true,
		autoplayHoverPause:true,
		dots:false,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:1,
			},
			768:{
				items:1,
			},
			1000:{
				items:1,
			}
		}
	});
});
jQuery(window).load(function() {
	$(".se-pre-con").fadeOut("slow");
});
