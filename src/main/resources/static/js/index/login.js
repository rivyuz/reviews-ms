function login() {
	
	var	emailId  = $(".login-email").val();
	var	password = $(".login-password").val();
	var userName = $(".login-username").val();
	
	var validationResult = validateFieldsInLoginDialog(emailId, password);
	
	if (validationResult == true) {

	}
	else {
		return;
	}
	
	addHardMask("Please wait", true);

	emailId = encryptQs(emailId);
	password = encryptQs(password);
	
	var url = $("#dto-form-zu").val();
	var uri = "/users-ms/user/login";
	var api = url + uri;

	//ajax call
	$.ajax(
	{
		url: api,
		
		type: 'POST',
		
		data: { forward: emailId, reverse: password },
		
		success: function(result, status, xhr) {
			
					
					$("#dto-form-j").val(xhr.getResponseHeader("j"));
					
					var loginResult = result.response;

					if(loginResult == "valid credentials") {
						hideDialogs();
						configureBurgerMenu($("#dto-form-j").val());
						removeMasks();
					}
					if(loginResult == "invalid credentials") {
						actionPerformingAlert.render('We are sorry', 'Invalid credentials', 'invalid credentials');
					}
					if(loginResult == "invalid user") {
						actionPerformingAlert.render('We are sorry', 'Email Id does not exist', 'invalid user');
					}
				 }, //success callback ends
		
		
		error: function(result, status, xhr) {
					console.log(result.status + " " + result.statusText);
			   } //error callback ends

	} //ajax method ends
	); //ajax ends

} /*login() ends*/