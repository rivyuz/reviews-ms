$(".register-email").keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
    	$(".register-password").focus();
    }
});

$(".register-password").keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
    	$(".register-username").focus();
    }
});

$(".register-username").keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
    	register();
    }
});

$(".login-email").keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
    	$(".login-password").focus();
    }
});

$(".login-password").keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
    	login();
    }
});

$(".forgot-email").keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
    	forgot();
    }
});