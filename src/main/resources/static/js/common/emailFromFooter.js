function emailDlg() {
	window.scrollTo(0, 0);
	addSoftMask('Thank you for your time!', false);
	hideDialogs();
	$(".email-dialog").show();
}

/****Contact Us****/
$(".contact-us").click(function(event) {
	
	var j = $("#dto-form-j").val();
    
	if (j == undefined || j == "") {
        newOrExistingUser("","");
    } else {
		$(".email-subject").val("Contact Us");
		$(".email-content").val("");
		$(".email-content").attr("placeholder", "Please type here...").val("").focus().blur();
		emailDlg();
    }
});

/****Report bug****/
$(".report-bug").click(function(event) {
	
	var j = $("#dto-form-j").val();
    
	if (j == undefined || j == "") {
        newOrExistingUser("","");
    } else {
		$(".email-subject").val("Report Bug");
		$(".email-content").val("");
		$(".email-content").attr("placeholder", "Please type here...").val("").focus().blur();
		emailDlg();
		addSoftMask('Thank you for contacting us!', false);
    }
});

/****Site feedback****/
$(".site-feedback").click(function(event) {
	
	var j = $("#dto-form-j").val();
    
	if (j == undefined || j == "") {
        newOrExistingUser("","");
    } else {
		$(".email-subject").val("Site Feedback");
		$(".email-content").val("");
		$(".email-content").attr("placeholder", "Please type here...").val("").focus().blur();
		emailDlg();
		addSoftMask('Thank you for contacting us!', false);
    }
});

/****Send Email****/
function sendEmail() {
	
	var j = $("#dto-form-j").val();
	
	addHardMask('Thank you for your time!', true);
	
	var emailDest = $(".email-dest").val();
	var emailSubject = $(".email-subject").val();
	var emailContent = $(".email-content").val();
	
	if( emailContent == ""){
		 
		normalAlert.render('We are sorry', 'Please enter your message');
	
	} else {

		var url = $("#dto-form-zu").val();
		var uri = "/users-ms/footer/mail";
		var api = url + uri;

		//ajax call
		$.ajax(
		{
			url: api,
			
			type: 'POST',
			
			data: { emailDest: emailDest, emailSubject: emailSubject, emailContent: emailContent, j: j },
			
			success: function(result,status,xhr) {
							hideDialogs();
							
							$("#dto-form-j").val(xhr.getResponseHeader("j"));
							
							var footerMailResult = result.response;
							if(footerMailResult == "emailSent") {
								actionPerformingAlert.render('Email Received', 'We will get back to you soon', 'footer email sent');
							}
							if(footerMailResult == "emailError") {
								actionPerformingAlert.render('We are sorry', 'There seems to be a problem', 'footer email error');
							}			 
					 }, //success callback ends
			
			
			error: function(xhr,status,error) {
						console.log(xhr.status + " " + xhr.statusText);
				   } //error callback ends

		} //ajax method ends
		); //ajax ends			

	} //else ends
}