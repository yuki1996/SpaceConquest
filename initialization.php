<?PHP
	session_start();
	if (isset($_POST['enemy'])) {
		include("connexion.php");
		$req = "SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = 'partie'"; 
        $res = $connexion -> query($req);
        $count = $res->rowCount();
        $carte = "carte".($count + 1);
        $req1  = "CREATE TABLE $carte (ID int NOT NULL AUTO_INCREMENT, PRIMARY KEY (ID),
        population int NOT NULL,
		x int NOT NULL,
		y int NOT NULL,
		proprietaire varchar(255) NOT NULL,
		colonist int NOT NULL,
		image text NOT NULL)
		ENGINE=MyISAM DEFAULT CHARSET=latin1;";
		$connexion->exec($req1);
		$pop = rand(10, 200);
		$heigth = $_POST['x'];
		$width = $_POST['y'];
		$coordx = rand (40, ($width - 40));
		$coordy = rand (40, ($heigth - 40));
		$Nbplanet = rand(1, 23);
		$req2 = 'INSERT INTO '.$carte.' (population, x, y, proprietaire, colonist, image) VALUES ('.$pop.', '.$coordx.', '.$coordy.', "Player", 0, "planet'.$Nbplanet.'.png")';
		$connexion->exec($req2);
		$enemy = $_POST['enemy'];
		for ($i = 1; $i <= $enemy; $i++) {
			$pop = rand(10, 200);
			$count = 1;
			while ($count > 0) {
				$coordx = rand (0, ($width - 60));
				$coordy = rand (0, ($heigth - 60));
				$req = "SELECT * FROM $carte where (x BETWEEN $coordx - 25 AND $coordx + 25) OR (y BETWEEN $coordy - 25 AND $coordy + 25)";
				$res = $connexion -> query($req);
				$count = $res->rowCount();
			}
			$Nbplanet = rand(1, 23);
			$req3 = 'INSERT INTO '.$carte.' (population, x, y, proprietaire, colonist, image) VALUES ('.$pop.', '.$coordx.', '.$coordy.', "Enemy'.$i.'", 0, "planet'.$Nbplanet.'.png")';
			$connexion->exec($req3);
		}
		for ($i = 1; $i <= 10; $i++) {
			$pop = rand(10, 200);
			$count = 1;
			while ($count > 0) {
				$coordx = rand (0, ($width - 60));
				$coordy = rand (0, ($heigth - 60));
				$req = "SELECT * FROM $carte where (x BETWEEN $coordx - 10 AND $coordx + 10) OR (y BETWEEN $coordy - 10 AND $coordy + 10)";
				$res = $connexion -> query($req);
				$count = $res->rowCount();
			}
			$Nbplanet = rand(1, 23);
			$req3 = 'INSERT INTO '.$carte.' (population, x, y, proprietaire, colonist, image) VALUES ('.$pop.', '.$coordx.', '.$coordy.', "Neutre'.$i.'", 0, "planet'.$Nbplanet.'.png")';
			$connexion->exec($req3);
		}
		$_SESSION['player'] = true;
		$_SESSION['enemy'] = $enemy;
		$_SESSION['heigth'] = $heigth;
		$_SESSION['width'] = $width;
		$_SESSION['galaxy'] = $carte;
		header("Location: game.php");
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="initialization.css" />
		<title>Space Conquest</title>
	</head>

	<body>
		<div id ="content">
			<form method="post" action="initialization.php">
				<h1>Choisis les paramètres de ta partie</h1>
				<br/>
				<br/>
				<br/>
				<table>
					<tr>
						<td>
							nombre d'adversaire : <input type="number" name="enemy" value="1" min="1" max="10"/>
						</td>
					</tr>
					<tr>
						<td>
							carte :<input type="number" name="x" value="1200" min="500" max="1500"/> x <input type="number" name="y" value="600" min="300" max="1000"/>
						</td>
					</tr>
					<tr>
						<td id="button">
							<input type="submit" value="Commencer" class="button"/>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>

</html>
