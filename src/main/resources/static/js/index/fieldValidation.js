function validateFieldsInRegisterDialog(emailId, password, userName) {
	
	var counter = 3;
	var validationResult = true;
	
	$(".register-email-blank").hide();
	$(".register-email-invalid").hide();
	$(".register-password-blank").hide();
	$(".register-username-blank").hide();

	if (emailId == "" || emailId == undefined) {
		$(".register-email-blank").show();
		counter = counter - 1;
	} else {
		$(".register-email-blank").hide();
		var regex = new RegExp("^[\\w-\\+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]+)*(\\.[a-z]{2,3})$");
		if (regex.test(emailId) == false) {
			$(".register-email-invalid").show();
			counter = counter - 1;
		}
		else {
			$(".register-email-invalid").hide();
		}
	}

	if (password == "" || password == undefined) {
		$(".register-password-blank").show();
		counter = counter - 1;
	} else {
		$(".register-password-blank").hide();
	}

	if (userName == "" || userName == undefined) {
		$(".register-username-blank").show();
		counter = counter - 1;
	} else {
		$(".register-username-blank").hide();
	}
	
	if(counter == 3) {
		validationResult = true;
	} else {
		validationResult = false;
	}
	
	return validationResult;
}

function validateFieldsInLoginDialog(emailId, password) {
	
	var counter = 2;
	var validationResult = true;
	
	$(".login-email-blank").hide();
	$(".login-email-invalid").hide();
	$(".login-password-blank").hide();

	if (emailId == "" || emailId == undefined) {
		$(".login-email-blank").show();
		counter = counter - 1;
	} else {
		$(".login-email-blank").hide();
		var regex = new RegExp("^[\\w-\\+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]+)*(\\.[a-z]{2,3})$");
		if (regex.test(emailId) == false) {
			$(".login-email-invalid").show();
			counter = counter - 1;
		}
		else {
			$(".login-email-invalid").hide();
		}
	}

	if (password == "" || password == undefined) {
		$(".login-password-blank").show();
		counter = counter - 1;
	} else {
		$(".login-password-blank").hide();
	}

	if(counter == 2) {
		validationResult = true;
	} else {
		validationResult = false;
	}
	
	return validationResult;
}

function validateFieldsInForgotDialog(emailId) {
	
	var counter = 1;
	var validationResult = true;
	
	$(".forgot-email-blank").hide();
	$(".forgot-email-invalid").hide();

	if (emailId == "" || emailId == undefined) {
		$(".forgot-email-blank").show();
		counter = counter - 1;
	} else {
		$(".forgot-email-blank").hide();
		var regex = new RegExp("^[\\w-\\+]+(\\.[\\w]+)*@[\\w-]+(\\.[\\w]+)*(\\.[a-z]{2,3})$");
		if (regex.test(emailId) == false) {
			$(".forgot-email-invalid").show();
			counter = counter - 1;
		}
		else {
			$(".forgot-email-invalid").hide();
		}
	}
	
	if(counter == 1) {
		validationResult = true;
	} else {
		validationResult = false;
	}
	
	return validationResult;
}

function validateFieldsInResetPasswordDialog(password, userName) {
	
	var counter = 2;
	var validationResult = true;
	

	$(".reset-password-one-time-password-blank").hide();
	$(".reset-password-new-password-blank").hide();

	if (password == "" || password == undefined) {
		$(".reset-password-one-time-password-blank").show();
		counter = counter - 1;
	} else {
		$(".reset-password-one-time-password-blank").hide();
	}

	if (userName == "" || userName == undefined) {
		$(".reset-password-new-password-blank").show();
		counter = counter - 1;
	} else {
		$(".reset-password-new-password-blank").hide();
	}
	
	if(counter == 2) {
		validationResult = true;
	} else {
		validationResult = false;
	}
	
	return validationResult;
}