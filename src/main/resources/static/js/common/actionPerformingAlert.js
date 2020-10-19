var actionPerformingAlert = new CustomActionPerformingAlert();

function CustomActionPerformingAlert() {
	
	this.render = function (headMsg, bodyMsg, action) {

		var windowHeight = $(window).innerHeight() + "px";
		var windowWidth = $(window).innerWidth() + "px";
		$(".alert-mask").css("display", "block");
		$(".alert-mask").css("height", windowHeight);
		
		$(".alert-dialog").css("display", "block");
        
		$(".alert-header").html(headMsg);
		$('.alert-message').text(bodyMsg);
		$(".alert-footer").html('<button class="ok-btn" onclick="actionPerformingAlert.ok(\'' + action + '\')">OK</button>');

	}
	
	this.ok = function (action) {

		$(".alert-dialog").css("display", "none");
		$(".alert-mask").css("display", "none");
		
		//registration - begins
		if(action == 'emailExists') {
			removeMasks();
			addSoftMask("We are sorry", false);
		}
		else if(action == 'userNameExists') {
			removeMasks();
			addSoftMask("We are sorry", false);
		}
		else if(action == 'bothExist') {
			removeMasks();
			addSoftMask("We are sorry", false);
		}
		else if(action == 'regOkEmailSent') {
			configureBurgerMenu($("#dto-form-j").val());
			removeMasks();
		}
		else if(action == 'regOkEmailError') {
			configureBurgerMenu($("#dto-form-j").val());
			removeMasks();
		}
		//registration - ends
		
		//login - begins
		else if(action == 'invalid credentials') {
			removeMasks();
			addSoftMask("We are sorry", false);
		}
		else if(action == 'invalid user') {
			removeMasks();
			addSoftMask("We are sorry", false);
		}
		//login - ends
		
		//forgot password - begins
		else if(action == 'otpOkEmailSent') {
			configureBurgerMenu($("#dto-form-j").val());
			removeMasks();
		}
		else if(action == 'otpOkEmailError') {
			hideDialogs();
			removeMasks();
		}
		else if(action == 'invalid user') {
			removeMasks();
			addSoftMask("We are sorry", false);
		}
		//forgot password - ends
		
		//registration confirmation - begins
		else if(action == 'confirmationSuccess') {
			configureBurgerMenu($("#dto-form-j").val());
			$('.confirmation-mask').remove();
		}
		else if(action == 'confirmationError') {
			$('.confirmation-mask').remove();
		}		
		//registration confirmation - ends
		
		//reset password - begins
		else if(action == 'invalid temp password') {
			$(".reset-password-dialog").hide();
			$('.reset-mask').remove();
			removeMasks();
		}
		else if(action == 'reset error') {
			$(".reset-password-dialog").hide();
			$('.reset-mask').remove();
			removeMasks();			
		}	
		else if(action == 'reset successful') {
			$('.reset-mask').remove();
			configureBurgerMenu($("#dto-form-j").val());
		}		
		//reset password - ends
		
		//account deleted - begins
		else if(action == 'bye') {
			addHardMask("Please wait...", true);
			
			$("#dto-form-j").val("");
			
			var url = $("#dto-form-zu").val();
			var uri = "/home";
			var api = url + uri;
			
			var p = encryptQs($("#dto-form-p").val());
			var zu = encryptQs($("#dto-form-zu").val());
			var j = encryptQs($("#dto-form-j").val());

			$("#dto-form-p").val(p);
			$("#dto-form-zu").val(zu);
			$("#dto-form-j").val(j);			
			
			$(".dto-form").attr("action", api);
			$(".dto-form").submit();			
		}
		//account deleted - ends
		
		//footer email - begins
		else if(action == 'footer email sent') {
			removeMasks();
		}
		else if(action == 'footer email error') {
			removeMasks();
		}
		//footer email - ends
		
		//please activate - begins
		else if(action == 'please activate') {
			hideDialogs();
			removeMasks();
		}
		//please activate - begins
	}
}