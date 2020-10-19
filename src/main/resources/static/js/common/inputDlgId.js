function inputDlgId() {
	
	var j = $("#dto-form-j").val();
	
	if (j == undefined || j == "") {
    	
		addSoftMask('Thank you for your time!', false);
		showLoginDlg();        
    
	} else {
    	addSoftMask('Thank you for your time!', false);
    	$(".input-dialog-container").show();
    }	
}