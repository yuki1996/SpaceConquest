<?PHP
session_start();
	if (!isset($_SESSION['player'])) {
		$_SESSION['player'] = true;
		$_SESSION['ENEMY'] = $_POST['enemy'];
		$_SESSION['gelaxy'] = $_POST['carte'];
	}
	 
?>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8" />
		<title>Space Conquest</title>
		<script src="./js/coord.js"></script>
		<script src="./js/planet.js"></script>
		<script src="./js/player.js"></script>
		<script src="./js/enemy.js"></script>
		<script src="./js/game.js"></script>
	</head>

	<body>		
		<p id="game"></p>
	
		<script>
			var game = new Game(<?php echo $_SESSION['ENEMY'];?>,10,10);
			game.start();
		</script>
	</body>

</html>
