
<!DOCTYPE html>
<html>
    <head>
        <title>CheapoMail</title>
        <meta charset="UTF-8">
        <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/alertify.min.js"></script>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/alertify.min.css"/>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.11.0/build/css/themes/default.min.css"/>
        
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" type="text/javascript"></script>
		<script src="Script/main.js" type="text/javascript"></script>
		<link href="Styles/indexView.css" type="text/css" rel="stylesheet" />
	    <link href="Styles/LoginView.css" type="text/css" rel="stylesheet" />
        <link href="Styles/HomeView.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <input class="DashBoardControls" id ='login'  type="Submit" name="Login" value="Login"/>
            <input class="DashBoardControls" id ='Logout'  type="Submit" name="Logout" value="LogOut"/>
            <input class="DashBoardControls" id ='Create-User'  type="Submit" name="Create-User" value="Create User"/>
        <div id="Header-Div">
            CheapoMail 
            
        </div>
        <image id="Logo"src="Styles/logo.png"alt="Logo">
        <main>
        <div id="Page-Content"><?php include 'Views/Login.view.php'; ?></div>
        </main>
    </body>
</html>