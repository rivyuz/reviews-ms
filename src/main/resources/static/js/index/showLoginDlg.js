function showLoginDlg() {

	window.scrollTo(0, 0);

	hideDialogs();
	
	/* show or hide buttons & text - begin */
	$('.login-email').show();
	$('.login-password').show();
	$('.login-btn').show();

	$('.login-email-blank').hide();
	$('.login-email-invalid').hide();
	$('.login-password-blank').hide();
	/* show or hide buttons & text - end */
	
	//addSoftMask("Login", false);
	$(".login-dialog").show();

}





