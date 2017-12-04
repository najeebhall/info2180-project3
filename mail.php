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
	
		//assign variables
  $recipient = $_POST['username'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];
	
        //get recipient id
            $stmt = $conn->query("SELECT * FROM User WHERE username = '$recipient'");
          
             $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
              foreach ($results as $row) {
                  
                   if($row['username'] == $recipient){
                       $recipient_id = $row[id];
                   }
              }
           
        //get sender id
              session_start();
              
              $user  = $_SESSION["username"] ;
              
              $stmt = $conn->query("SELECT * FROM User WHERE username = '$user'"); 
              $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
              foreach ($results as $row) {
                  
                   if($row['username'] == $user){
                       $user_id = $row[id];
                   }
              }
		
			$sql = "INSERT INTO Message (recipient_id, user_id, subject, body,date_sent) VALUES ('$recipient_id', '$user_id' , '$subject' ,  '$message', CURDATE())";
			// use exec() because no results are returned
			
			$conn->exec($sql);
            echo "Message was Successful";
		
      //check for encyption
		
	}	catch(PDOException $e)
		{	
			echo "Error";
			echo $sql . "<br>" . $e->getMessage();
		}
}