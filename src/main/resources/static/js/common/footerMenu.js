$(".footer-menu-img").on('click', function () {
	hideDialogs();
    addSoftMask('Click to close', false);
    $(".footer-menu-links").toggle();
    if ($(".footer-menu-links").is(":hidden")) {
        
    }
});

/*don't delete this - needed to bind $( imgTag_menuBar ) with toggle functionality - login.js -> $( imgTag_menuBar ).on( "click", footerMenuToggle );*/
function footerMenuToggle() {
	addSoftMask('Click to close', false);
	$(".footer-menu-links").toggle();
	if ($(".footer-menu-links").is(":hidden")) {
		
	}
}