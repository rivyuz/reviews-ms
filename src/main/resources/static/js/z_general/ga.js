  var analytics = true;

  var gaEnabled = localStorage.getItem("analytics");

  if("no" == gaEnabled){
  	analytics = false;
  }

  if (analytics) {
  	/* GOOGLE ANALYTICS' SCRIPT */
  	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  		ga('create', 'UA-82752848-1', 'auto');
  		ga('send', 'pageview');		
  } else {
  		console.log('Google Analytics has been disabled');
  }
//  localStorage.setItem("analytics", "no");
//  var gaEnabled = localStorage.getItem("analytics");
//
//  var analytics = true;
//  if(gaEnabled == "no"){
//  	analytics = false;
//  }
//
//  alert(analytics);
//
//  if (analytics) {
//  		/* PASTE YOUR GOOGLE ANALYTICS' SCRIPT HERE */
//  	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//  		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//  		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//  		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
//
//  		ga('create', 'UA-82752848-1', 'auto');
//  		ga('send', 'pageview');		
//  } else {
//  		console.log('Google Analytics has been disabled');
//  }  