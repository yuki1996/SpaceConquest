function Game(nbEnemy, w, h) {
	if (0 > nbEnemy || nbEnemy > 10 || w < 0 || h < 0) {
		throw new Error("Game");
	} 
	this.nbEnemy = nbEnemy;
	this.width = w;
	this.height = h;
	this.tabGalaxy = new Array(h, w);
	this.tabPlayer = new Array(nbEnemy + 1);
	this.player = null;
	var pop = this.PopulationRandom();
	var coord = new Coord(0, 0);
  var planet = new Planet(coord, pop);
	this.player = new Player(planet);
	this.tabGalaxy[coord.getX][coord.getY] = planet;
	alert(this.tabGalaxy[coord.getX][coord.getY]);
}

Game.prototype.start = function () {
	this.tabPlayer[0] = this.player;
	var tabSet = new Array(this.player.getSetPlanet.size);
	this.tabGalaxy[this.player.coord.getX][this.player.coord.getY] = tabSet[0];
	alert("ok");
	alert(this.nbEnemy);
	for (var i = 1; i <= this.nbEnemy; i++) {
		var coord = this.calculCoord();
		alert("coord");
		alert(coord.getX);
		alert(coord.getY);
		var pop = this.PopulationRandom();
		var planet = new Planet(coord, pop);
		this.tabPlayer[i] = new Enemy(planet);
		alert("ennemy");
		this.tabGalaxy[coord.getX][coord.getY] = planet;
		alert(i);
	}
	
};


Game.prototype.PopulationRandom = function () {
	return Math.floor((Math.random() * 200) + 1);
};

Game.prototype.tabFull = function() {
		for (var i = 0; i < this.height; i++) {
			for (var j = 0; j < this.width; j++) {
				if (this.tabGalaxy[i][j] == null) {
					return false;
				}
			}
		}
		return true;
	};
	
Game.prototype.calculCoord = function() {
		if (this.tabFull()) {
			throw new Error("plus de place");
		}
		var i = 0;
		var j = 0;
		while (this.tabGalaxy[i][j] != null) {
			i = Math.floor(Math.random() * this.width);
			j = Math.floor(Math.random() * this.height);
		}
		alert("fait");
		return new Coord(i, j);
	};
