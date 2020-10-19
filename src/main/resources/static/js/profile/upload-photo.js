$('.user-img').click(function (event) {
	event.preventDefault();
	$(".upload-photo-dialog").show();
	addSoftMask('Click to close!', false);
});

$(document).on('change','.upload-photo-file',function() {
	browseAndSelectPhoto(); 
});

function browseAndSelectPhoto() {

	var flag;
	var photo = $("#upload-photo-file").val();
	var getPhotoUploaded = document.getElementById("upload-photo-file");
	
	if(photo == ""){
		normalAlert.render('Please upload an image file', 'Only JPG/JPEG files allowed');
		return false;
	} else {
	    var i = 0;
	    var files = getPhotoUploaded.files;
	    var len = files.length;
	    
	    for (; i < len; i++) {
	    	
	    	var blob = files[i]; 
	    	
	    	if(blob.size > 2097152) {
	    		flag = "don't allow";
	    	}
	    }		
	}	
	
	if (flag == "don't allow") {
		normalAlert.render('File Size', 'Maximum allowed size is 2 MB');
		return false;
	} else {
		$(".upload-photo-dialog").hide();
		//removeMasks();
		uploadPhoto();
	}	
}

function uploadPhoto() {
	
	console.log("entered uploadPhoto");
    
	var form = $('.profile-form')[0];
    var formData = new FormData(form);
	
    var url = $("#dto-form-zu").val();
    var uri = "/users-ms/account-info/photoupload";
    var api = url + uri;

    //ajax call
    $.ajax(
    {
    	url: api,
    	
    	type: 'POST',
    	
    	enctype: 'multipart/form-data',
    	
    	data: formData,

    	processData: false,
    	
    	contentType: false,
    	
    	cache: false,
    	
    	timeout: 600000,
    	
    	success: function(result, status, xhr) {

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

} /*function uploadPhoto() ends*/