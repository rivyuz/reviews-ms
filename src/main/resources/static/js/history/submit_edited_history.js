function submitEditedHistory() {

	var j = $("#dto-form-j").val();

	if (j == undefined) {
        
    	showLoginDlg();        
    
    } else {
        
        var parameter_1 = $('#parameter_1').text().trim();
        var parameter_2 = $('#parameter_2').text().trim();
        var parameter_3 = $('#parameter_3').text().trim();
        var parameter_4 = $('#parameter_4').text().trim();
        var parameter_5 = $('#parameter_5').text().trim();
        var parameter_6 = $('#parameter_6').text().trim();
        var parameter_7 = $('#parameter_7').text().trim();
        var parameter_8 = $('#parameter_8').text().trim();

        var rating_1 = $('input[name=ratingParameter_1]:checked').val();
        var rating_2 = $('input[name=ratingParameter_2]:checked').val();
        var rating_3 = $('input[name=ratingParameter_3]:checked').val();
        var rating_4 = $('input[name=ratingParameter_4]:checked').val();
        var rating_5 = $('input[name=ratingParameter_5]:checked').val();
        var rating_6 = $('input[name=ratingParameter_6]:checked').val();
        var rating_7 = $('input[name=ratingParameter_7]:checked').val();
        var rating_8 = $('input[name=ratingParameter_8]:checked').val();        

        var comment = $('#commentsInput').val();
        
        $(".input-dialog-container").hide();

        var url = $("#dto-form-zu").val();
        var uri = "/reviews-ms/reviews/submit";
        var api = url + uri;

        //ajax call
        $.ajax(
        {
        	url: api,
        	
        	type: 'POST',
        	
        	data: { 
        			category: $("#dto-form-category").val(),
        			entity_id: $("#dto-form-entity-id").val(),
        			entity_name: $("#dto-form-entity-name").val(),
        			
        			parameter_1: parameter_1,
        			parameter_2: parameter_2,
        			parameter_3: parameter_3,
        			parameter_4: parameter_4,
        			parameter_5: parameter_5,
        			parameter_6: parameter_6,
        			parameter_7: parameter_7,
        			parameter_8: parameter_8,
        			
        			rating_1: rating_1,
        			rating_2: rating_2,
        			rating_3: rating_3,
        			rating_4: rating_4,
        			rating_5: rating_5,
        			rating_6: rating_6,
        			rating_7: rating_7,
        			rating_8: rating_8,
        			
        			comment: comment,
        			
        			j: j
        	},
        	
        	success: function(result, status, xhr) {
						var reviewObj = result.response;
						
						if(reviewObj == "please activate") {
							
							actionPerformingAlert.render('We are sorry!', 'Please activate your account by clicking the confirmation link emailed to you!', 'please activate');

						} else {

			        		var j = $("#dto-form-j").val();
			        		$("#dto-form-j").val(j);
							var url = $("#dto-form-zu").val();
							
							if($("#dto-form-p").val() == "index") {
								var uri = "/home";
								$(".dto-form").attr('method', 'get');
								
								var p = encryptQs($("#dto-form-p").val());
								var eu = encryptQs($("#dto-form-eu").val());
								var uu = encryptQs($("#dto-form-uu").val());
								var ru = encryptQs($("#dto-form-ru").val());
								var j = encryptQs($("#dto-form-j").val());

								$("#dto-form-p").val(p);
								$("#dto-form-eu").val(eu);
								$("#dto-form-uu").val(uu);
								$("#dto-form-ru").val(ru);
								$("#dto-form-j").val(j);
								
							} else if($("#dto-form-p").val() == "input") {
								var uri = "/reviews-ms/reviews";
								$(".dto-form").attr('method', 'post');
							}

							var api = url + uri;
							
							

			                $(".dto-form").attr("action", api);
							$(".dto-form").submit();

						}
        			 }, //success callback ends
        	
        	
        	error: function(result, status, xhr) {
        				console.log(result.status + " " + result.statusText);
        		   } //error callback ends

        } //ajax method ends
        ); //ajax ends

    } //else ends
}