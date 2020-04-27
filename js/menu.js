


if (document.documentElement.clientWidth > 980) {
	$(window).scroll(function () {
		var sc = $(window).scrollTop()
		if (sc > 600) {
			$(".Header").addClass("FixedHeader");
		} else {
			$(".Header").removeClass("FixedHeader");
		}
	});
	}



$("#menu-btn").click(function() {
	$(this).toggleClass("HamburgerOpen");
  });






	$('body').click(function () {
	$('.Menu').removeClass('MenuOpen');
	$("#menu-btn").removeClass("HamburgerOpen");
$(".MenuOverlay").removeClass("MenuOverlayActive");
});


$('#menu-btn').click(function(event, handler) {

	event.stopPropagation();
	
	$('.Menu').toggleClass('MenuOpen');
	
	$('.MenuOverlay').toggleClass('MenuOverlayActive');
	});
	
 


//submenu




if (document.documentElement.clientWidth < 980) 
{
$('.submenu-btn').click(function(event, handler) {

	event.stopPropagation();
	var thismenu = $(this).find('.submenu');
		$('.submenu-btn').find('.submenu').not(thismenu).removeClass('subMenuOpen');
	
	$(this).find('.submenu').toggleClass('subMenuOpen');
	});
}
	









  
  
