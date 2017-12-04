<?php
if(isset($_POST["submit"]))
{
	$errorMessage = "";
		
    $host = getenv('IP');
    $username = getenv('C9_USER');
    $password = '';
    $dbname = 'projdb';
	try {
		//set up connection
		$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	
		if(empty($_POST['lastN'])) 
        {
			$errorMessage .= "<li>Enter your last name!</li>";
		}
		if(empty($_POST['firstN'])) 
        {
			$errorMessage .= "<li>Enter your first name!</li>";
		}
		if(empty($_POST['userN'])) 
        {
			$errorMessage .= "<li>Enter your username!</li>";
		}
			if(empty($_POST['PassW'])) 
        {
			$errorMessage .= "<li>Enter your password!</li>";
		}
		//assign variables
        $varFN = $_POST['firstN'];
		$varLN = $_POST['lastN'];
		$varUN = $_POST['userN'];
		$password=$_POST['PassW'];
		// convert password
	     $hash = md5($password);
	
        echo $varFN;
        echo  $varUn;
        echo $varLN;
        echo $hash; 
		if(empty($errorMessage)) 
		{
		    echo "Preparing for insertion";
			$sql = "INSERT INTO Users (firstname, lastname, username, password) VALUES ('$varFN', '$varLN' , '$varUN' ,  '$hash')";
			// use exec() because no results are returned
			
			$conn->exec($sql);
            echo "Succesfully inserted";
		}
		else
		{
		    echo "THERE IS AN ERROR MESSAGE ->";
		    echo $errorMessage;
		}
      //check for encyption
		
	}	catch(PDOException $e)
		{	
			echo "Error";
			echo $sql . "<br>" . $e->getMessage();
		}
}