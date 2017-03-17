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
	var coord = new Coord(0, 1);
  var planet = new Planet(coord, pop);
	this.player = new Player(planet);
}

Game.prototype.start = function () {
	this.tabPlayer[0] = this.player;
	var tabSet = new Array[this.player.getSetPlanet()]();
	this.tabGalaxy[coord.getX()][coord.getY()] = tabSet[0];
	for (var i = 0; i < this.nbEnemy; i++) {
		coord = this.calculCoord();
		this.tabEnemy[0] = new Enemy(new Planet(coord, this.PopulationRandom()));
		var tabSet0= new Array[this.tabEnemy[0].getSetPlanet()]();
		this.tabGalaxy[coord.getX()][coord.getY()] = tabSet0[0];
	}
	
	//outil
	
	this.tabFull = function() {
		for (var i = 0; i < this.height; i++) {
			for (var j = 0; i < this.width; i++) {
				if (this.tabGalaxy[i][j] === null) {
					return false;
				}
			}
		}
		return true;
	};
	
	this.calculCoord = function() {
		if (this.tabFull()) {
			throw new Error("plus de place");
		}
		var i = Math.floor(Math.random() * this.width);
		var j = Math.floor(Math.random() * this.height);
		while (this.tabGalaxy[i][j] !== null) {
			i = Math.floor(Math.random() * this.width);
			j = Math.floor(Math.random() * this.height);
		}
		alert("no");
		return new Coord(i,j);
	};
	
};


Game.prototype.PopulationRandom = function () {
	return Math.floor((Math.random() * 200) + 1);
};
