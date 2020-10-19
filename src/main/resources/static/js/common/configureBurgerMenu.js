function configureBurgerMenu(j) {
	
	if (j == undefined || j =="") {
        
    } else {

    	/*------------replace menu image------------begins*/
		$(".burger-container").empty();
		
		var srcPath_menu = "images/common/burger-menu.png";

		var imgTag_menu = document.createElement('img');
		$(imgTag_menu).attr("src", srcPath_menu);
		$(imgTag_menu).addClass("burger-img");
		
		$(".burger-container").append(imgTag_menu);
		$( ".burger-container" ).on( "click", burgerMenuToggle );
		/*------------replace menu image------------ends*/
		
		/*------------add new links------------begins*/
		$(".burger-links").empty();

		var ul = document.createElement('ul');

		var li = document.createElement('li');
		var a = document.createElement('a');
		$(a).text("History");
		$(a).attr("href", "javascript:void(0);");
		$(a).attr("onclick", "showHistory();");
		$(li).append(a);
		$(ul).append(li);

		var li = document.createElement('li');
		var a = document.createElement('a');
		$(a).text("My Account");
		$(a).attr("href", "javascript:void(0);");
		$(a).attr("onclick", "showProfile();");		
		$(li).append(a);
		$(ul).append(li);

		var li = document.createElement('li');
		var a = document.createElement('a');
		$(a).text("Log out");
		$(a).attr("href", "javascript:void(0);");
		$(a).attr("onclick", "logout();");		
		$(li).append(a);
		$(ul).append(li);

		$(".burger-links").append(ul);
		/*------------add new links------------ends*/
    	
    }

}


function burgerMenuOnLogout() {
	
	/*------------replace menu image------------begins*/
	$(".burger-container").empty();
	
	var srcPath_menu = "images/common/burger-menu.png";

	var imgTag_menu = document.createElement('img');
	$(imgTag_menu).attr("src", srcPath_menu);
	$(imgTag_menu).addClass("burger-img");
	
	$(".burger-container").append(imgTag_menu);
	$( ".burger-container" ).on( "click", burgerMenuToggle );
	/*------------replace menu image------------ends*/
	
	/*------------add new links------------begins*/
	$(".burger-links").empty();

	var ul = document.createElement('ul');

	var li = document.createElement('li');
	var a = document.createElement('a');
	$(a).text("Log In");
	$(a).attr("href", "javascript:void(0);");
	$(a).attr("onclick", "showLoginDlg();");
	$(li).append(a);
	$(ul).append(li);

	var li = document.createElement('li');
	var a = document.createElement('a');
	$(a).text("Register");
	$(a).attr("href", "javascript:void(0);");
	$(a).attr("onclick", "showRegisterDlg();");		
	$(li).append(a);
	$(ul).append(li);

	$(".burger-links").append(ul);
	/*------------add new links------------ends*/

}