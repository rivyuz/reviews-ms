function newOrExistingUser(form, action) {
	window.scrollTo(0, 0);
	//addSoftMask('Thank you for your time!', false);
	$(".new-existing-user-form").val(form);
	$(".new-existing-user-action").val(action);
	$(".footer-menu-links").hide();
	$(".new-existing-user-dialog").show();
}