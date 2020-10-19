function logout() {
	
	var j = $("#dto-form-j").val();

	if (j == undefined || j == "") {
    
    } else {	
	
    	var url = $("#dto-form-zu").val();
    	var uri = "/users-ms/user/logout";
    	var api = url + uri;

    	//ajax call
    	$.ajax(
    	{
    		url: api,
    		
    		type: 'POST',
    		
    		data: { j: j },
    		
    		success: function(result,status,xhr) {

    					
    					$("#dto-form-j").val(xhr.getResponseHeader("j"));
    					
    					var logoutResult = result.response;

    					if(logoutResult == "user logged out") {
    						hideDialogs();

    						$("#dto-form-j").val("");
    						
    						//var url = $("#dto-form-webui-url").val();
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
    				 }, //success callback ends
    		
    		
    		error: function(xhr,status,error) {
    					console.log(xhr.status + " " + xhr.statusText);
    			   } //error callback ends

    	} //ajax method ends
    	); //ajax ends
    
    } //else ends

} /*logout() ends*/