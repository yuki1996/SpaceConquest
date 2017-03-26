<?PHP
	session_start();
	include("connexion.php");
?>
<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8" />
		<title>Space Conquest</title>
		<script src="js/coord.js"></script>
		<script src="js/planet.js"></script>
		<script src="js/player.js"></script>
		<script src="js/enemy.js"></script>
		<link rel="stylesheet" type="text/css" href="game.css" />
	</head>

	<body>		
		<p id ="jouabilite"></p>
		<p id ="navPlayer"></p>
		<canvas id="zone" width="1200" height="600">
			Votre navigateur ne prend pas en charge la balise canvas.
		</canvas>	
		<script>
		
			function Game(nbEnemy, w, h) {
				if (0 > nbEnemy || nbEnemy > 10 || w < 0 || h < 0) {
					throw new Error("Game");
				} 
				this.nbEnemy = nbEnemy;

				this.width = w;
				this.height = h;
				this.tabGalaxy = new Array();

				this.tabPlayer = new Array(nbEnemy + 1);
				<?PHP
					$galaxie = $_SESSION['galaxy'];
					$req = "SELECT * FROM $galaxie WHERE proprietaire = 'Player'";
					$res = $connexion -> query($req);
						while ($player = $res->fetch()) {
							$pop = $player['population'];
							$coordx = $player['x'];
							$coordy = $player['y'];
						}
				?>
				var pop = <?PHP echo $pop;?>;
				var coord = new Coord(<?PHP echo $coordx;?>, <?PHP echo $coordy;?>);
				var planet = new Planet(coord, pop);
				planet.addProprietaire("player");
				this.player = new Player(planet);
				this.tabGalaxy.push(planet);
				this.tabPlayer[0] = this.player;
			};

			Game.prototype.start = function () {
					<?PHP
					for ($i = 1; $i <= $_SESSION['enemy']; $i++) {
					
						$req = "SELECT * FROM $galaxie WHERE proprietaire = 'Enemy".$i."'";
						$res = $connexion -> query($req);
						while ($player = $res->fetch()) {
							$pop = $player['population'];
							$coordx = $player['x'];
							$coordy = $player['y'];
						}
						echo "var pop = ".$pop.";\n";
						echo "var coord = new Coord(".$coordx.",".$coordy.");\n";
						echo "var planet = new Planet(coord, pop);\n";
						echo "planet.addProprietaire(\"Enemy".$i."\");\n";
						echo "this.tabPlayer[".$i."] = new Enemy(planet);\n";
						echo "this.tabGalaxy.push(planet);\n";
					}
					for ($i = 1; $i <= 10; $i++) {
						$req = "SELECT * FROM $galaxie WHERE proprietaire = 'Neutre".$i."'";
						$res = $connexion -> query($req);
						while ($player = $res->fetch()) {
							$pop = $player['population'];
							$coordx = $player['x'];
							$coordy = $player['y'];
						}
						echo "var pop = ".$pop.";\n";
						echo "var coord = new Coord(".$coordx.",".$coordy.");\n";
						echo "var planet = new Planet(coord, pop);\n";
						echo "this.tabGalaxy.push(planet);\n";
					}
					

				?>

			};
	</script>

	<script>
		var game = new Game(<?php echo $_SESSION['enemy'];?>,<?php echo $_SESSION['width'];?>,<?php echo $_SESSION['heigth'];?>);
		game.start();
		var maZone = document.getElementById("zone");
		var ctx = maZone.getContext("2d");
		<?php
			$req = "SELECT * FROM $galaxie";
			$res = $connexion -> query($req);
			$i = 1;
			while ($planet = $res->fetch()) {
				echo "var mon_image".$i." = new Image();\n";
				echo "mon_image".$i.".onload = function () {
						ctx.drawImage(mon_image".$i.", ".$planet['y'].", ".$planet['x'].", 50, 50);
				};\n";
				echo "mon_image".$i.".src = 'planet/".$planet['image']."';\n";
				$i++;
				if ($planet['proprietaire'] == "Player") {
					echo "ctx.beginPath();\n";
					echo "ctx.lineWidth=2;\n";
					echo "ctx.fillStyle='red';\n";
					echo "ctx.arc(".$planet['y']." +25, ".$planet['x']."+25, 30, 0, 2 * Math.PI);\n";
					echo "ctx.stroke();\n";
				}
			}
		?>
	</script>
	
	<script>
		document.getElementById("navPlayer").innerHTML += "Information sur le joueur<br><hr/>";  
		document.getElementById("navPlayer").innerHTML += "Nombre de planètes en possession : " + game.tabPlayer[0].getSetPlanet.length +"<br>"; 
		document.getElementById("navPlayer").innerHTML += "Nombre total de civil en possession : " + game.tabPlayer[0].allPopulation +"<br><hr/>";
		for (var i = 0; i < game.tabGalaxy.length; i++) {
			var planet = game.tabGalaxy[i];
			if (planet.proprietaire == "player") {
				document.getElementById("navPlayer").innerHTML += "Planete" +i+" <br>";
				document.getElementById("navPlayer").innerHTML += "Coordonnées (" + planet.coord.getY + "," + planet.coord.getX+") <br>";
				document.getElementById("navPlayer").innerHTML += "Nombre de civil : " + planet.population + " <br>";
				document.getElementById("navPlayer").innerHTML += "Nombre de colons : " + planet.colonist + " <br><hr/>";
			}
		}
		
	</script>
	
	<script>
		function getInfo(el,event) {
			var ox = -el.offsetLeft,
			oy = -el.offsetTop;
			while(el=el.offsetParent){
				ox += el.scrollLeft - el.offsetLeft;
				oy += el.scrollTop - el.offsetTop;
			}
			for (var i = 0; i < game.tabGalaxy.length; i++) {
				var planet = game.tabGalaxy[i];
				if (planet.coord.getY - 5 <= event.clientX + ox && event.clientX + ox <= planet.coord.getY + 35
						&& planet.coord.getX - 5 <= event.clientY + oy && event.clientY + oy <= planet.coord.getX + 35) {
							
					var s = "Planet " +i+"\n";
					s += "coordonnées : (" + planet.coord.getY + "," + planet.coord.getX+")\n";
					s += "propriétaire : " + planet.proprietaire + "\n";
					if (planet.proprietaire == "player") {
						s += "population : " + planet.population + "\n";
						s += "colons : " + planet.colonist + "\n";
					}
					return s;
				}
			}
			return null;
		}
	
		maZone.onclick = function(e) {
			  var info = getInfo(this,e);
			  if (info != null) {
				 alert(info);
			 } 
		};
	</script>
				
		
	</body>

</html>
