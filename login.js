/* global $ */ 
var request;
$(document).ready(function(){
    //promts user of what is allow from what is not
  alert("No Special Charaters are allowed for both Username and Passowrd");
  alert("Both Username and Passowrd Must begin with capital letter");
  var usernameLogin;
  var passwordLogin;
   $("#login").click(Login);
    
});

function Login(){
       // the line below accepts the users UeserName and password 
       //then saves it to an array 
        var Userlogin = new Array($("#username").val(),$("#password").val());
        
        console.log(Userlogin[0]);
        
        if (ValidateDATA(Userlogin) != false){
            console.log("Data Validated");
            console.log("Making ajax login post request");
            $("#validation-Error").removeClass("Error");
            $.ajax('Login.php', {
                method: 'POST',
                data: {
                    username:Userlogin[0],
                    password:Userlogin[1]
                },
                success: function (data, status, xhr) {
                    var resp =data;
                    $('#result').html(resp);
                },
                    error: function () {
                    alert('There was a problem with the request.');
                }
            });
            //alert("logged In");
           //atempt to login goes here ajax request
        }
        
        
        
}


function ValidateDATA(data){// function to clean form entries
    var regexTest = /^[A-Z][a-zA-z\d]+/;
    if ((data[0] == "") && (data[1] == "")){
        $("#validation-Error").html("Please Enter a Username and a Passowrd").addClass("Error");
        return false;
    }
    if ((data[0]) == ""){
        $("#validation-Error").html("Please Enter a Username").addClass("Error");
        return false;
    }else if (regexTest.test(data[0]) != true ){
        $("#validation-Error").html("Incorrect Username Format").addClass("Error");
        return false;    
    }
    if ((data[1]) == ""){
        $("#validation-Error").html("Please Enter a Passowrd").addClass("Error");
        return false;
    }
    
    if (regexTest.test(data[1]) != true ){
        $("#validation-Error").html("Incorrect Password Format").addClass("Error");
        return false;     
    }
}