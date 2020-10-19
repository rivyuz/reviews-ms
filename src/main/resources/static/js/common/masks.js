function hideDialogs() {
	$(".burger-links").hide();
	$(".footer-menu-links").hide();
	$(".register-dialog").hide();
	$(".login-dialog").hide();
	$(".forgot-dialog").hide();
	$(".reset-password-dialog").hide();
	$(".alert-dialog").hide();
	$(".new-existing-user-dialog").hide();
	$(".email-dialog").hide();
	$(".pp-dialog-container").hide();
	$(".tc-dialog-container").hide();
	$('.input-dialog-container').hide();
	$('.profile-dialog-container').hide();
	$('.upload-photo-dialog').hide();
	$('.history-dialog-container').hide();
	$('.overall-rating-dialog-container').hide();
	$('.progress-indicator').hide();
}
function hidePopups() {
    $('.camera_list').hide();
    $('.car_list').hide();
    $('.Cats_list').hide();
    $('.dog_list').hide();
    $('.fitness_center_list').hide();
    $('.fragrance_list').hide();
    $('.motor_cycle_list').hide();
    $('.movie_list').hide();
    $('.night_life_list').hide();
    $('.OnlineStore_list').hide();
    $('.PackersAndMovers_list').hide();
    $('.restaurant_list').hide();
    $('.salon_list').hide();
    $('.scooter_list').hide();
    $('.spa_center_list').hide();
    $('.tattoo_parlor_list').hide();
    $('.overallRatingDiv').hide();
    $('.progress-indicator').hide();
}
/*soft mask*/
function addSoftMask(titleCaption, pi) {
    var maskDiv = '<div class="soft-mask" title=' + "'" + titleCaption + "'" + '></div>';
    $('body').append(maskDiv);
    $('.soft-mask').fadeIn("fast");
    if(pi == true) {
    	showProgressIndicator(); //don't delete this - refers to a function in progressIndicator.js
    } else {
    	$('.progress-indicator').hide();
    }
}
/*hard mask*/
function addHardMask(titleCaption, pi) {
    var maskDiv = '<div class="hard-mask" title=' + "'" + titleCaption + "'" + '></div>';
    $('body').append(maskDiv);
    $('.hard-mask').fadeIn("fast");
    if(pi == true) {
    	showProgressIndicator(); //don't delete this - refers to a function in progressIndicator.js
    } else {
    	$('.progress-indicator').hide();
    }
}
/*confirmation mask*/
function addConfirmationMask(titleCaption, pi) {
    var maskDiv = '<div class="confirmation-mask" title=' + "'" + titleCaption + "'" + '></div>';
    $('body').append(maskDiv);
    $('.confirmation-mask').fadeIn("fast");
    if(pi == true) {
    	showProgressIndicator(); //don't delete this - refers to a function in progressIndicator.js
    } else {
    	$('.progress-indicator').hide();
    }
}
/*reset mask*/
function addResetMask(titleCaption, pi) {
    var maskDiv = '<div class="reset-mask" title=' + "'" + titleCaption + "'" + '></div>';
    $('body').append(maskDiv);
    $('.reset-mask').fadeIn("fast");
    if(pi == true) {
    	showProgressIndicator(); //don't delete this - refers to a function in progressIndicator.js
    } else {
    	$('.progress-indicator').hide();
    }
}
/*remove masks*/
function removeMasks() {
    $('.soft-mask').remove();
    $('.hard-mask').remove();
    $('.progress-indicator').hide();
}
/*cancel*/
function cancel() {
	hideDialogs();
	hidePopups();
	removeMasks();
	$('.reset-mask').remove();
	$(".reset-password-dialog").hide();
}
/*body click*/
$("body").on("click", "div.soft-mask", function (event) {
    hideDialogs();
	hidePopups();
    removeMasks();
});