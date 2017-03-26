<?php
	try {	
			//$dsn = "mysql:host=inf-mysql.univ-rouen.fr;dbname=bouchlae";
			 $dsn ="mysql:host=localhost;dbname=partie";
			 $connexion = new PDO($dsn, "root", ""); 
			//$connexion = new PDO($dsn, "bouchlae", "14081996"); 
		} catch (PDOException $e ) { 
			exit ('Erreur :' . $e -> getMessage ()); 
		}
		?>
