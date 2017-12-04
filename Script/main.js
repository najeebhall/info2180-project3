/* global $ */
/*global alertify*/

var request;
$(document).ready(function(){
    //promts user of what is allow from what is not
  //alert("No Special Charaters are allowed for both Username and Passowrd");
  //alert("Both Username and Passowrd Must begin with capital letter");
   $("#login").click(Login);
   $("#Logout").click(Logout);
  // $("#Create-User").click(CreateUser);
  // document.getElementById("Create-User").onload = function(){$("#Create-User").click(CreateUser);};
});



  

function Login(){
       // the line below accepts the users UeserName and password 
       //then saves it to an array 
        var Userlogin = new Array($("#username").val(),$("#password").val());
        
        console.log(Userlogin[0]);
        
        if (ValidateDataForms(Userlogin) != false){
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
                    var resp = data.split(",");
                    console.log("FUllDATA:"+data);
                    console.log("userid"+resp);
                    if (resp != 'No User Found'){
                        FadeOut('#Login-Div',resp[0]);
                        alertify.success('Logged In');
                        console.log(resp);
                        console.log("id number"+resp[1]);
                        loadControls(resp[1]);
                        $.post('Load.php',resp[1],function(resp2) {
                            $("#Contacts-Div").html(resp2);
                            loadChatControls();
                        });
                    }
                    if (resp == 'No User Found'){
                        console.log("No user found in database");
                        $("#validation-Error").html("No User Found Try Again").addClass("Error").css("visibility","visible");
                    }
                    
                },
                    error: function () {
                    console.log('There was a problem with the request.');
                }
            });
        }
} // controls logging

function Logout(){
    console.log("Logged out");
    $.post(Logout.php,null,function(data) {
    unloadControls();
    FadeOut('#Background-Div',"Views/Login.view.php") 
    alertify.error('Logged Out');
    })
}

function createuserr() {
    console.log('Createuser');

    $('main').load("adduser.html");
}//n------ not complete 

function loadControls(Id){
    if (Id == "1"){
       console.log("es");
       $("#Create-User").css("visibility","visible");
    }
    $("#Logout").css("visibility","visible");
    $("#login").css("visibility","hidden");
}

function unloadControls(){

$("#Create-User").css("visibility","hidden");
$("#Logout").css("visibility","hidden");
$("#login").css("visibility","visible");
}

function ValidateDataForms(data){
    var regexTest = /[a-zA-z\d]+/;
    if ((data[0] == "") && (data[1] == "")){
        $("#validation-Error").html("Please Enter a Username and a Passowrd").addClass("Error").css("visibility","visible");
        return false;
    }
    if ((data[0]) == ""){
        $("#validation-Error").html("Please Enter a Username").addClass("Error").css("visibility","visible");
        return false;
    }else if (regexTest.test(data[0]) != true ){
        $("#validation-Error").html("Incorrect Username Format").addClass("Error").css("visibility","visible");
        return false;    
    }
    if ((data[1]) == ""){
        $("#validation-Error").html("Please Enter a Passowrd").addClass("Error").css("visibility","visible");
        return false;
    }
    
    if (regexTest.test(data[1]) != true ){
        $("#validation-Error").html("Incorrect Password Format").addClass("Error").css("visibility","visible");
        return false;     
    }
}// validates data before sending to server to clean form entries

function ValidateData(data) {
    var regexTest = /[^;]+/;
    if (regexTest.test(data) != true ){
        return false;
    }
}

function FadeOut(target,UpComing) {
    console.log(target);
    var div = $(target); 
    div.animate({opacity: '0'}, "slow");
    $('main').load(UpComing);
    $('main').css('opacity','0');
    $('main').delay(200).animate({opacity: '.9'}, "slow");
}

function insertMessage() {
  var msg = $('#Text-Box').val();
  if ($.trim(msg) == '') {
    return false;
  }
  if (ValidateData(msg) == false){
      alert("please remove all semicolans and try again")
      return false;
  }
  $( "#Messages-Div" ).append( "<div class='prev'><div class='message message-personal'>"+msg+"</div></div>" );
  setDate();
  $("#Text-Box").val(null);
  var myDiv = $("#Messages-Div").get(0);
    myDiv.scrollTop = myDiv.scrollHeight;
    
}

function setDate() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  $('<div class="timestamp">'+ strTime+'</div>').appendTo($('.message:last'));
  
}

function loadChatControls(){ 
    $("#Send-Message").click(insertMessage);
    $(".Contact").click(function(){
        loadChat($(this));
        
    }); 
    $(window).on('keydown', function(e) {if (e.which == 13) {insertMessage();return false;}});
}

function loadChat(argument) {
    
    var user;
    var chatTitle = $("#Current-Chat");
    user = argument.html();
    chatTitle.html(user);
    
}

