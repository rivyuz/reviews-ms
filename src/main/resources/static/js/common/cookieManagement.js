function getCookie(name) {
   
   var value = "; " + document.cookie;
   
   var parts = value.split("; " + name + "=");
   
   if (parts.length == 2) {
	   
	  var j = parts.pop().split(";").shift();
	  
      return j;
      
   }

}