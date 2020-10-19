function showHistory() {

	hideDialogs();
	
	//addSoftMask('Thank you for your time!', false);
	var j = $("#dto-form-j").val();
	
	var url = $("#dto-form-zu").val();
	var uri = "/reviews-ms/reviews/history";
	var api = url + uri;

	//ajax call
	$.ajax(
	{
		url: api,
		
		type: 'GET',
		
		data: { j: j },
		
		success: function(result,status,xhr) {
					if(result.length == 0) {
						$(".delete-history-btn-container").hide();
						$(".all-clear").show();
					}
					
					$(".history-form").empty();
					
					for (var i = 0; i < result.length; i++) {
						//Row
						var entityRow = document.createElement('div');
						$(entityRow).addClass("entity-row");				
						
						//Date
						var dateColumn = document.createElement('div');
						$(dateColumn).text(result[i].dateStr);
						$(dateColumn).addClass("date-column");
						
						//Entity
						var entityColumn = document.createElement('div');
						$(entityColumn).addClass("entity-column");
						
						var a = document.createElement('a');
						$(a).text(result[i].entityName);
						$(a).attr("href", "javascript:void(0);");
						var methodToCall = "editHistory(" + "'" + result[i].indexCatg + "'" + "," + "'" + result[i].entityFk + "'" + "," + "'" + result[i].entityName + "'" + ");"
						$(a).attr("onclick", methodToCall  );
						$(entityColumn).append(a);
						
						//Delete
						var deleteColumn = document.createElement('div');
						$(deleteColumn).attr("id", result[i].entityName);
						$(deleteColumn).addClass("delete-column");
						
						var a = document.createElement('a');
						$(a).text("Delete");
						$(a).attr("href", "javascript:void(0);");
						methodToCall = "deleteHistory(" + "'" + result[i].indexCatg + "'" + "," + "'" + result[i].entityFk + "'" + "," + "'" + result[i].entityName + "'" + ");"
						$(a).attr("onclick", methodToCall);
						$(deleteColumn).append(a);
						
						$(entityRow).append(dateColumn);
						$(entityRow).append(entityColumn);
						$(entityRow).append(deleteColumn);
						$(".history-form").append(entityRow);
						
						$(".delete-history-btn-container").show();
						$(".all-clear").hide();
					}
				 }, //success callback ends
		
		
		error: function(result, status, xhr) {
					console.log(result.status + " " + result.statusText);
			   } //error callback ends

	} //ajax method ends
	); //ajax ends
	
	$(".history-dialog-container").show();

}