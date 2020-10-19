function register() {
	
	var	emailId  = $(".register-email").val();
	var	password = $(".register-password").val();
	var userName = $(".register-username").val();
	
	var validationResult = validateFieldsInRegisterDialog(emailId, password, userName);
	
	if (validationResult == true) {
		if ($('.register-tc-check').prop('checked') == false) {
			actionPerformingAlert.render('Terms &amp; Conditions', 'Please check the box to indicate that you have read and agree to the terms & conditions.', 'tc');
			return;
		}
	}
	else {
		return;
	}
	
	addHardMask("Please wait", true);
	
	emailId = encryptQs(emailId);
	password = encryptQs(password);
	userName = encryptQs(userName);	
	
	var url = $("#dto-form-zu").val();
	var uri = "/users-ms/user/register";
	var api = url + uri;

	//ajax call
	$.ajax(
	{
		url: api,
		
		type: 'POST',
		
		data: { forward: emailId, reverse: password, idle: userName },
		
		success: function(result,status,xhr) {
			
					
					$("#dto-form-j").val(xhr.getResponseHeader("j"));
					
					var registerResult = result.response;

					if(registerResult == "emailExists") {
						$('.progress-indicator').hide();
						actionPerformingAlert.render('We are sorry', 'Email already exists', 'emailExists');
					}
					if(registerResult == "userNameExists") {
						$('.progress-indicator').hide();
						actionPerformingAlert.render('We are sorry', 'User name already exists', 'userNameExists');
					}
					if(registerResult == "bothExist") {
						$('.progress-indicator').hide();
						actionPerformingAlert.render('We are sorry', 'Both Email & User name already exist', 'bothExist');
					}
					if(registerResult == "regOkEmailSent") {
						hideDialogs();
						actionPerformingAlert.render('Registration successful', 'Please confirm your registration from the email sent to you. Please check under Spam/Junk folder if you do not find it in your Inbox', 'regOkEmailSent');
					}
					if(registerResult == "regOkEmailError") {
						hideDialogs();
						actionPerformingAlert.render('Registration successful!!!', 'There seems to be a problem in sending you the activation code at this moment. We will send it to you within 24 hours', 'regOkEmailError');
					}
				 }, //success callback ends
		
		
		error: function(result,status,xhr) {
					console.log(result.status + " " + result.statusText);
			   } //error callback ends

	} //ajax method ends
	); //ajax ends	

} /*register() ends*/