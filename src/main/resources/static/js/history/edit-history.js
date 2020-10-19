var category;
var entityId;
var entityName;

var parameter_1;
var parameter_2;
var parameter_3;
var parameter_4;
var parameter_5;
var parameter_6;
var parameter_7;
var parameter_8;

var rating_1;
var rating_2;
var rating_3;
var rating_4;
var rating_5;
var rating_6;
var rating_7;
var rating_8;

var comment;
			    	 
function editHistory(indexCatg, entityFk, entityName) {
	
	//addSoftMask('Thank you for your time!', false);
	
	var url = $("#dto-form-zu").val();
	var uri = "/reviews-ms/reviews/record";
	var api = url + uri;

	var j = $("#dto-form-j").val();
	
	//ajax call
	$.ajax(
	{
		url: api,
		
		type: 'GET',
		
		data: { j: j, category: indexCatg, entity_id: entityFk },
		
		success: function(result, status, xhr) {
					$(".history-dialog-container").hide();
					 
					 $.each(result , function( key, value ) {
						 if(key == "parameterList") {
							 parameter_1 = value['parameter1'];
							 parameter_2 = value['parameter2'];
							 parameter_3 = value['parameter3'];
							 parameter_4 = value['parameter4'];
							 parameter_5 = value['parameter5'];
							 parameter_6 = value['parameter6'];
							 parameter_7 = value['parameter7'];
							 parameter_8 = value['parameter8'];
							 
							category = value['indexCatg'];
							entityId = value['entityId'];
							entityName = value['entityName'];
						 }
						 if(key == "reviews") {
							 rating_1 = value['rating_1'];
							 rating_2 = value['rating_2'];
							 rating_3 = value['rating_3'];
							 rating_4 = value['rating_4'];
							 rating_5 = value['rating_5'];
							 rating_6 = value['rating_6'];
							 rating_7 = value['rating_7'];
							 rating_8 = value['rating_8'];
							 comment = value['comment'];
						 }			             
					 });						
			
					$(".input-form").empty();

					for (var i = 1; i <= 8; i++) {
						
							var divTag_one = document.createElement('div');
							$(divTag_one).addClass("parameter_row");
							
							//--------------------------------------------------------------div[1]
							var divTag_two = document.createElement('div');
							$(divTag_two).addClass("parameter_name");
							var attr1 = "parameter_" + i;
							$(divTag_two).attr("id", attr1);
							
							if(i == 1) {
								$(divTag_two).text(parameter_1);
							} else if(i == 2) {
								$(divTag_two).text(parameter_2);
							} else if(i == 3) {
								$(divTag_two).text(parameter_3);
							} else if(i == 4) {
								$(divTag_two).text(parameter_4);
							} else if(i == 5) {
								$(divTag_two).text(parameter_5);
							} else if(i == 6) {
								$(divTag_two).text(parameter_6);
							} else if(i == 7) {
								$(divTag_two).text(parameter_7);
							} else if(i == 8) {
								$(divTag_two).text(parameter_8);
							}
							
							$(divTag_one).append(divTag_two);
							//--------------------------------------------------------------div[1]
							
							var divTag_three = document.createElement('div');
							$(divTag_three).addClass("parameter_value");
							
							var divTag_four = document.createElement('div');
							$(divTag_four).addClass("btn-group");
							$(divTag_four).attr("data-toggle", "buttons");
							
							//---------------------------------------------------------label-1
							var labelTag_one = document.createElement('label');
							$(labelTag_one).addClass("btn");
							$(labelTag_one).addClass("btn-success");
							$(labelTag_one).addClass("btn-sm");
							
							var inputTag_one = document.createElement('input');
							$(inputTag_one).attr("type", "radio");
							var attr2 = "ratingParameter_" + i;
							$(inputTag_one).attr("name", attr2);
							$(inputTag_one).attr("value", "Best");
							
							var spanTag_one = document.createElement('span');
							$(spanTag_one).addClass("glyphicon");
							$(spanTag_one).addClass("glyphicon-ok");

							if(i == 1 && rating_1 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 2 && rating_2 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 3 && rating_3 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 4 && rating_4 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 5 && rating_5 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 6 && rating_6 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 7 && rating_7 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 8 && rating_8 == "Best") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}							
							
							$(labelTag_one).append(inputTag_one);
							$(labelTag_one).append(spanTag_one);
							
							$(divTag_four).append(labelTag_one);
							
							//---------------------------------------------------------label-2
							labelTag_one = document.createElement('label');
							$(labelTag_one).addClass("btn");
							$(labelTag_one).addClass("btn-primary");
							$(labelTag_one).addClass("btn-sm");

							inputTag_one = document.createElement('input');
							$(inputTag_one).attr("type", "radio");
							attr2 = "ratingParameter_" + i;
							$(inputTag_one).attr("name", attr2);
							$(inputTag_one).attr("value", "Good");
							
							spanTag_one = document.createElement('span');
							$(spanTag_one).addClass("glyphicon");
							$(spanTag_one).addClass("glyphicon-ok");
							
							if(i == 1 && rating_1 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 2 && rating_2 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 3 && rating_3 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 4 && rating_4 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 5 && rating_5 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 6 && rating_6 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 7 && rating_7 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 8 && rating_8 == "Good") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}							
							
							$(labelTag_one).append(inputTag_one);
							$(labelTag_one).append(spanTag_one);
							
							$(divTag_four).append(labelTag_one);
							
							//---------------------------------------------------------label-3
							labelTag_one = document.createElement('label');
							$(labelTag_one).addClass("btn");
							$(labelTag_one).addClass("btn-info");
							$(labelTag_one).addClass("btn-sm");

							inputTag_one = document.createElement('input');
							$(inputTag_one).attr("type", "radio");
							attr2 = "ratingParameter_" + i;
							$(inputTag_one).attr("name", attr2);
							$(inputTag_one).attr("value", "Avg");
							
							spanTag_one = document.createElement('span');
							$(spanTag_one).addClass("glyphicon");
							$(spanTag_one).addClass("glyphicon-ok");
							
							if(i == 1 && rating_1 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 2 && rating_2 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 3 && rating_3 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 4 && rating_4 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 5 && rating_5 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 6 && rating_6 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 7 && rating_7 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 8 && rating_8 == "Avg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}							
							
							$(labelTag_one).append(inputTag_one);
							$(labelTag_one).append(spanTag_one);
							
							$(divTag_four).append(labelTag_one);
							
							//---------------------------------------------------------label-4
							labelTag_one = document.createElement('label');
							$(labelTag_one).addClass("btn");
							$(labelTag_one).addClass("btn-warning");
							$(labelTag_one).addClass("btn-sm");

							inputTag_one = document.createElement('input');
							$(inputTag_one).attr("type", "radio");
							attr2 = "ratingParameter_" + i;
							$(inputTag_one).attr("name", attr2);
							$(inputTag_one).attr("value", "BelowAvg");
							
							spanTag_one = document.createElement('span');
							$(spanTag_one).addClass("glyphicon");
							$(spanTag_one).addClass("glyphicon-ok");
							
							if(i == 1 && rating_1 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 2 && rating_2 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 3 && rating_3 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 4 && rating_4 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 5 && rating_5 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 6 && rating_6 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 7 && rating_7 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 8 && rating_8 == "BelowAvg") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							
							$(labelTag_one).append(inputTag_one);
							$(labelTag_one).append(spanTag_one);
							
							$(divTag_four).append(labelTag_one);
							
							//---------------------------------------------------------label-5
							labelTag_one = document.createElement('label');
							$(labelTag_one).addClass("btn");
							$(labelTag_one).addClass("btn-danger");
							$(labelTag_one).addClass("btn-sm");

							inputTag_one = document.createElement('input');
							$(inputTag_one).attr("type", "radio");
							attr2 = "ratingParameter_" + i;
							$(inputTag_one).attr("name", attr2);
							$(inputTag_one).attr("value", "NoIdea");
							
							spanTag_one = document.createElement('span');
							$(spanTag_one).addClass("glyphicon");
							$(spanTag_one).addClass("glyphicon-ok");
							
							if(i == 1 && rating_1 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 2 && rating_2 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 3 && rating_3 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 4 && rating_4 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 5 && rating_5 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 6 && rating_6 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 7 && rating_7 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}
							else if(i == 8 && rating_8 == "NoIdea") {
								$(inputTag_one).attr("checked", "checked");
								$(labelTag_one).addClass("active");
							}							
							
							$(labelTag_one).append(inputTag_one);
							$(labelTag_one).append(spanTag_one);
							
							$(divTag_four).append(labelTag_one);
							//---------------------------------------------------------
							
							$(divTag_three).append(divTag_four);
							
							$(divTag_one).append(divTag_three);
							
							$(".input-form").append(divTag_one);

					} //for loop ends
					
					//------------------------------------------------------------------------for comments - begin
					var commentsDiv = document.createElement('div');
					$(commentsDiv).attr("id", "commentsDiv");
					
					var textareaTag_one = document.createElement('textarea');
					$(textareaTag_one).attr("id", "commentsInput");

					if(comment == "null" || comment == null || comment == "") {
						$(textareaTag_one).attr("placeholder", "Comments, if any. Please do not use any foul or abusive language!!!");
					} else {
						$(textareaTag_one).val(comment);						
					}
					
					$(commentsDiv).append(textareaTag_one);
					
					$(".input-form").append(commentsDiv);
					//------------------------------------------------------------------------for comments - end
					
					//------------------------------------------------------------------------for submit btn - begin
					var submitBtnDiv = document.createElement('div');
					$(submitBtnDiv).addClass("submit-btn-container");
					$(submitBtnDiv).addClass("text-center");
					
					var buttonTag_one = document.createElement('button');
					$(buttonTag_one).attr("type", "button");
					$(buttonTag_one).addClass("btn");
					$(buttonTag_one).addClass("btn-info");
					$(buttonTag_one).addClass("submit-btn");
					$(buttonTag_one).on( "click", submitEditedHistory );
					$(buttonTag_one).text("Submit");

					$(submitBtnDiv).append(buttonTag_one);
					
					$(".input-form").append(submitBtnDiv);
					//------------------------------------------------------------------------for submit btn - end
					
					//hidden#1
					inputTag_one = document.createElement('input');
					$(inputTag_one).attr("type", "hidden");

					$(inputTag_one).attr("id", "input-form-category");
					$(inputTag_one).attr("name", "category");
					$(inputTag_one).val(category);
					
					$(".input-form").append(inputTag_one);
					
					//hidden#2
					inputTag_one = document.createElement('input');
					$(inputTag_one).attr("type", "hidden");

					$(inputTag_one).attr("id", "input-form-entity-id");
					$(inputTag_one).attr("name", "entity_id");
					$(inputTag_one).val(entityId);
					
					$(".input-form").append(inputTag_one);					
					
					//hidden#3
					inputTag_one = document.createElement('input');
					$(inputTag_one).attr("type", "hidden");

					$(inputTag_one).attr("id", "input-form-entity-name");
					$(inputTag_one).attr("name", "entity_name");
					$(inputTag_one).val(entityName);
					
					$(".input-form").append(inputTag_one);
					
					//hidden fields in dto-form
					$("#dto-form-category").val(category);
					$("#dto-form-entity-id").val(entityId);
					$("#dto-form-entity-name").val(entityName);
				 }, //success callback ends
		
		
		error: function(result, status, xhr) {
					console.log(result.status + " " + result.statusText);
			   } //error callback ends

	} //ajax method ends
	); //ajax ends
	
	$(".input-dialog-container").show();

}