<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8" />
		<title>Space Conquest</title>
		<script src="js/coord.js"></script>
		<script src="js/planet.js"></script>
		<script src="js/player.js"></script>
		<script src="js/enemy.js"></script>
		<script src="js/game.js"></script>
	</head>

	<body>
		<?php
		$enemy = $_POST['enemy'];
		$gelaxy = $_POST['carte'];
		echo $enemy;
		?>
		<p>hello !</p>
		<br>
		<p>Resultat</p>
		<script>

			document.getElementById("game").innerHTML += "commence ...ou pas<br>";
		</script>
		<p id="game"></p>
		
	</body>

</html>
