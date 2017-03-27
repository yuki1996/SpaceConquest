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

				this.tabImage = new Array();
				this.tabPlayer = new Array(nbEnemy + 1);
				<?PHP
					$galaxie = $_SESSION['galaxy'];
					$req = "SELECT * FROM $galaxie WHERE proprietaire = 'Player'";
					$res = $connexion -> query($req);
						while ($player = $res->fetch()) {
							$pop = $player['population'];
							$coordx = $player['x'];
							$coordy = $player['y'];
							$image = $player['image'];
						}
				?>
				var pop = <?PHP echo $pop;?>;
				var coord = new Coord(<?PHP echo $coordx;?>, <?PHP echo $coordy;?>);
				var planet = new Planet(coord, pop);
				planet.addProprietaire("player");
				this.player = new Player(planet);
				this.tabGalaxy.push(planet);
				this.tabImage.push("<?PHP echo $image;?>");
				this.tabPlayer[0] = this.player;
				<?PHP
					for ($i = 1; $i <= $_SESSION['enemy']; $i++) {
					
						$req = "SELECT * FROM $galaxie WHERE proprietaire = 'Enemy".$i."'";
						$res = $connexion -> query($req);
						while ($player = $res->fetch()) {
							$pop = $player['population'];
							$coordx = $player['x'];
							$coordy = $player['y'];
							$image = $player['image'];
						}
						echo "var pop = ".$pop.";\n";
						echo "var coord = new Coord(".$coordx.",".$coordy.");\n";
						echo "var planet = new Planet(coord, pop);\n";
						echo "planet.addProprietaire(\"Enemy".$i."\");\n";
						echo "this.tabPlayer[".$i."] = new Enemy(planet);\n";
						echo "this.tabGalaxy.push(planet);\n";
						echo "this.tabImage.push(\"".$image."\");\n";
					}
					for ($i = 1; $i <= 10; $i++) {
						$req = "SELECT * FROM $galaxie WHERE proprietaire = 'Neutre".$i."'";
						$res = $connexion -> query($req);
						while ($player = $res->fetch()) {
							$pop = $player['population'];
							$coordx = $player['x'];
							$coordy = $player['y'];
							$image = $player['image'];
						}
						echo "var pop = ".$pop.";\n";
						echo "var coord = new Coord(".$coordx.",".$coordy.");\n";
						echo "var planet = new Planet(coord, pop);\n";
						echo "this.tabGalaxy.push(planet);\n";
						echo "this.tabImage.push(\"".$image."\");\n";
					}
				?>

			};
	</script>
	<script>
	function draw() {
		<?php
		for ($i = 0; $i < $_SESSION['enemy'] + 11; $i++) {
			echo "var planet".$i." = game.tabGalaxy[".$i."];\n";
			echo "var mon_image".$i." = new Image();\n";
			echo "mon_image".$i.".onload = function () {\n";
			echo "ctx.drawImage(mon_image".$i.", planet".$i.".coord.getY, planet".$i.".coord.getX, 50, 50);\n";
			echo "};\n";
			echo "mon_image".$i.".src = 'planet/'+game.tabImage[".$i."];\n";
			echo "if (planet".$i.".proprietaire == \"player\") {\n";
				echo "ctx.beginPath();\n";
				echo "ctx.lineWidth=2;\n";
				echo "ctx.fillStyle='red';\n";
				echo "ctx.arc(planet".$i.".coord.getY + 25, planet".$i.".coord.getX+25, 30, 0, 2 * Math.PI);\n";
				echo "ctx.stroke();\n";
				echo "ctx.closePath();\n";
			echo "}\n";
		}
		?>
	}
	</script>
		<script>
		Game.prototype.start = function () {
			for (var i = 0; i < this.tabPlayer.length; i++) {
				if (i == 0) {
				}
			}
		};
	
	
	</script>
	<script>
		var game = new Game(<?php echo $_SESSION['enemy'];?>,<?php echo $_SESSION['width'];?>,<?php echo $_SESSION['heigth'];?>);
	
		
		var maZone = document.getElementById("zone");
		var ctx = maZone.getContext("2d");
		draw();
			game.start();
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
