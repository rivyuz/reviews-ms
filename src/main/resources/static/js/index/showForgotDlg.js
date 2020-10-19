function showForgotDlg() {

	window.scrollTo(0, 0);

	hideDialogs();
	
	/* show or hide buttons & text - begin */
	$('.forgot-email').show();
	$('.forgot-btn').show();

	$('.forgot-email-blank').hide();
	$('.forgot-email-invalid').hide();
	/* show or hide buttons & text - end */
	
	//addSoftMask("Email Password", false);
	$(".forgot-dialog").show();

}