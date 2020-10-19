function forgot() {
	
	var	emailId  = $(".forgot-email").val();
	
	var validationResult = validateFieldsInForgotDialog(emailId);
	
	if (validationResult == true) {

	}
	else {
		return;
	}
	
	addHardMask("Please wait", true);
	
	emailId = encryptQs(emailId);

	var url = $("#dto-form-zu").val();
	var uri = "/users-ms/user/forgot";
	var api = url + uri;

	//ajax call
	$.ajax(
	{
		url: api,
		
		type: 'POST',
		
		data: { forward: emailId },
		
		success: function(result, status, xhr) {

						
						$("#dto-form-j").val(xhr.getResponseHeader("j"));
						
						var forgotResult = result.response;

						if(forgotResult == "otpOkEmailSent") {
							hideDialogs();
							actionPerformingAlert.render('Password sent', 'Please check the email sent to you. Please check under Spam/Junk folder if you do not find it in your Inbox', 'otpOkEmailSent');
						}
						if(forgotResult == "otpOkEmailError") {
							$('.progress-indicator').hide();
							actionPerformingAlert.render('We are sorry', 'There seems to be a problem in sending you the one-time password at this moment. We will send it to you within 24 hours', 'otpOkEmailError');
						}
						if(forgotResult == "invalid user") {
							$('.progress-indicator').hide();
							actionPerformingAlert.render('We are sorry', 'Incorrect Email address', 'invalid user');
						}			 
				 }, //success callback ends
		
		
		error: function(result, status, xhr) {
					console.log(result.status + " " + result.statusText);
			   } //error callback ends

	} //ajax method ends
	); //ajax ends	
	
} /*forgot() ends*/