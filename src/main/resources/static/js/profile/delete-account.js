function deleteAccount() {
	
	var j = $("#dto-form-j").val();

	if (j == undefined || j == "") {
    
    } else {
    	
    	var url = $("#dto-form-zu").val();
    	var uri = "/users-ms/user/delete";
    	var api = url + uri;

    	//ajax call
    	$.ajax(
    	{
    		url: api,
    		
    		type: 'POST',
    		
    		data: { j: j },
    		
    		success: function(result, status, xhr) {
    			
						
						$("#dto-form-j").val(xhr.getResponseHeader("j"));
						
    					var deleteStatus = result.response;

    					if(deleteStatus == 1) {
    						hideDialogs();
    						actionPerformingAlert.render("Account Deleted", "Bye for now", "bye");
    					}
    				 }, //success callback ends
    		
    		
    		error: function(result, status, xhr) {
    					console.log(result.status + " " + result.statusText);
    			   } //error callback ends

    	} //ajax method ends
    	); //ajax ends    	
    }

} /*function deleteAccount() ends*/