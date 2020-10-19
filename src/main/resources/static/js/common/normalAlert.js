var normalAlert = new NormalAlert();

function NormalAlert() {
	
	this.render = function (headMsg, bodyMsg) {
		var windowHeight = $(window).innerHeight() + "px";
		var windowWidth = $(window).innerWidth() + "px";
		$(".alert-mask").css("display", "block");
		$(".alert-mask").css("height", windowHeight);
		
		$(".alert-dialog").css("display", "block");
        
		$(".alert-header").html(headMsg);
		$('.alert-message').text(bodyMsg);
		$(".alert-footer").html('<button class="ok-btn" onclick="normalAlert.ok()">OK</button>');
	}
	
	this.ok = function () {
		$(".alert-dialog").css("display", "none");
		$(".alert-mask").css("display", "none");
		//removeMasks();
	}	

}