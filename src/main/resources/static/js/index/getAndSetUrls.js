function getAndSetUrls() {
	
	var url = $("#dto-form-zu").val();
	//var url = "http://localhost:80";
	var uri = "/urls/get";
	var api = url + uri;
	
	//ajax call
	$.ajax(
	{
		async: false,
		
		url: api,
		
		type: 'GET',
		
		data: {},
		
		success: function(result, status, xhr) {
	
					var jsonList = JSON.parse(result);
					
					$.each(jsonList, function (index, obj) {
						
						$("#dto-form-zu").val(obj.zuulUrl);
						
					}); //$.each(jsonList ends
				 
				 }, //success callback ends
		
		
		error: function(result, status, xhr) {
					console.log(result.status + " " + result.statusText);
			   }  //error callback ends
	
	} //ajax method ends
	); //ajax ends

} /*getAndSetUrls() ends*/