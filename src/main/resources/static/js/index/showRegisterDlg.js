function showRegisterDlg() {

	window.scrollTo(0, 0);

	hideDialogs();
	
	/* show or hide buttons & text - begin */
	$('.register-email').show();
	$('.register-password').show();
	$('.register-username').show();	
	$('.register-btn').show();

	$('.register-email-blank').hide();
	$('.register-email-invalid').hide();
	$('.register-password-blank').hide();
	$('.register-username-blank').hide();
	/* show or hide buttons & text - end */
	
	//addSoftMask("Register", false);
	$(".register-dialog").show();

}