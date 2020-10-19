/********************/
window.onload = function() {
	
	if ($("#dto-form-p").val() == "index") {
		
		addHardMask("Please wait...", true);
		
		getAndSetUrls();
		checkIfConfirmation();
		checkIfReset();
		getLatestReviews();
		
		var req = new XMLHttpRequest();
		req.open('GET', document.location, false);
		req.send(null);
		var headers = req.getAllResponseHeaders();
		
	    // Convert the header string into an array of individual headers
	    var arr = headers.trim().split(/[\r\n]+/);

	    // Create a map of header names to values
	    var headerMap = {};
	    arr.forEach(function (line) {
	      var parts = line.split(': ');
	      var header = parts.shift();
	      var value = parts.join(': ');
	      headerMap[header] = value;
	    });	
		
		var j = headerMap["j"];
		
		if (j == undefined || j == "") {
			configureBurgerMenu(j);
		} else {
			$("#dto-form-j").val(j);
			configureBurgerMenu(j);
		}
		
		console.log("j = " + j);

		//hideDialogs();
		  
	    removeMasks();	
	}

	else if ($("#dto-form-p").val() == "input") {
		
		addHardMask("Please wait...", true);
		
		getAndSetUrls();
		
		var j = $("#dto-form-j").val();
		
		if (j == undefined || j == "") {
		} else {
			$("#dto-form-j").val(j);
		}
		hideDialogs();
		configureBurgerMenu(j);  
	    removeMasks();

	}

}
/********************/