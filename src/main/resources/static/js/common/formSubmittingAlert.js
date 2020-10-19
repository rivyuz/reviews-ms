var formSubmittingAlert = new CustomFormSubmittingAlert();

function CustomFormSubmittingAlert() {
	
	this.render = function (headMsg, bodyMsg, form, condn) {
		var windowHeight = $(window).innerHeight() + "px";
		var windowWidth = $(window).innerWidth() + "px";
		$(".alert-mask").css("display", "block");
		$(".alert-mask").css("height", windowHeight);
		
		$(".alert-dialog").css("display", "block");
        
		$(".alert-header").html(headMsg);
		$('.alert-message').text(bodyMsg);
		$(".alert-footer").html('<button class="okBtnClass" onclick="formSubmittingAlert.ok(\'' + form, condn + '\')">OK</button>');		
	}
	
	this.ok = function (form, condn) {
		$(".alert-dialog").css("display", "none");
		$(".alert-mask").css("display", "none");
		$(form).submit();
	}

}

