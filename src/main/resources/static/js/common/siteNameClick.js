$(".reviews-site-header").click(function (event) {
	
	addHardMask("Please wait...", true);
	
	var j = $("#dto-form-j").val();
	$("#dto-form-j").val(j);
	
	var url = $("#dto-form-zu").val();
	var uri = "/home";
	var api = url + uri;
	
	var p = encryptQs($("#dto-form-p").val());
	var zu = encryptQs($("#dto-form-zu").val());
	var j = encryptQs($("#dto-form-j").val());

	$("#dto-form-p").val(p);
	$("#dto-form-zu").val(zu);
	$("#dto-form-j").val(j);
	
	$(".dto-form").attr("method", "get");
	$(".dto-form").attr("action", api);
	$(".dto-form").submit();

});