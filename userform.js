function Validate()
  {
  	
    var firstN = document.forms["newuser"]["firstN"].value;
    if ( firstN == "") {

    	document.getElementById("firstN").style.borderColor="#ff4d50";

        alert(" Please Enter Your First Name");
        document.getElementById("firstN").focus();

        return false;
    }
  }