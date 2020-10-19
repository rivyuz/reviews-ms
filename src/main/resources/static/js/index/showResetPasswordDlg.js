function checkIfReset() {

	var qs = getUrlVars();
	
	if(qs != "" && qs.startsWith("job=reset")) {

		var splitArray = qs.split("&");
		
		var jobArray = splitArray[0].split("=");
		var job = jobArray[1];
		
		var emailArray = splitArray[1].split("=");
		var email = emailArray[1];		
		
		if(job == "reset") {

			var splitEmail = email.split("XXXXXxxxxXXXX");
			var replyEmail = splitEmail[0] + "@" + splitEmail[1];
			
			$(".reset-password-email").val(replyEmail);
			$(".reset-password-email").attr("readonly", true);					
			
			window.scrollTo(0, 0);

			hideDialogs();
			
			/* show or hide buttons & text - begin */
			$('.reset-password-email').show();
			$('.reset-password-one-time-password').show();
			$('.reset-password-new-password').show();	
			$('.reset-password-btn').show();

			$('.reset-password-one-time-password-blank').hide();
			$('.reset-password-new-password-blank').hide();
			/* show or hide buttons & text - end */
			
			addResetMask("Please wait", false);
			$(".reset-password-dialog").show();		

		}		
	}

}