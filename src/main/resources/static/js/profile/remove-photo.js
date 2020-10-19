function removePhoto() {
	
	var url = $("#dto-form-zu").val();
	var uri = "/users-ms/account-info/removephoto";
	var api = url + uri;

	//ajax call
	$.ajax(
	{
		url: api,
		
		type: 'POST',
		
		data: { emailId: $("#emailId").val() },
		
		success: function(result, status, xhr) {

					$(".upload-photo-file").val("");
					$(".upload-photo-dialog").hide();
					
					sessionStorage.setItem("show-profile", "true");

					var j = $("#dto-form-j").val();
					$("#dto-form-j").val(j);
					var url = $("#dto-form-zu").val();
					
					if($("#dto-form-p").val() == "index") {
						var uri = "/home";
						$(".dto-form").attr('method', 'get');
						
						var p = encryptQs($("#dto-form-p").val());
						var zu = encryptQs($("#dto-form-zu").val());
						var j = encryptQs($("#dto-form-j").val());

						$("#dto-form-p").val(p);
						$("#dto-form-zu").val(zu);
						$("#dto-form-j").val(j);
						
					} else if($("#dto-form-p").val() == "input") {
						var uri = "/reviews-ms/reviews";
						$(".dto-form").attr('method', 'post');
					}

					var api = url + uri;

					$(".dto-form").attr("action", api);
					$(".dto-form").submit();

				 }, //success callback ends
		
		
		error: function(result, status, xhr) {
					console.log(result.status + " " + result.statusText);
			   } //error callback ends

	} //ajax method ends
	); //ajax ends	

} /*function removePhoto() ends*/