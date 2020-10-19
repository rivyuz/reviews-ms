$(window).ready(responsiveFn).resize(responsiveFn);

function responsiveFn() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	
	var top = windowHeight/2 + "px";
	var left = (windowWidth/2 - 5) + "px";
	
	$(".progress-indicator").css("top", top);
	$(".progress-indicator").css("left", left);	
	
}

function showProgressIndicator() {
	responsiveFn();
	$('.progress-indicator').show();
}