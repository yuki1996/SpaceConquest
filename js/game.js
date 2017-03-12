function Game(nbEnemy, w, h) {
	if (0 > nbEnemy || nbEnemy > 10 || w < 0 || h < 0) {
		throw new Error("Game");
	} 
	this.nbEnemy = nbEnemy;
	this.getNbEnemy = function() {
		return NbEnemy;
	}
	
	this.width = w;
	this.height = h;
	this.tabGalaxy = new Array[h][w];
	this.tabPlayer = new Array[nbEnemy + 1];
	this.player = null;
	
	
}

Game.prototype.start() {
	var coord = calculCoord();
	this.player = new Player(new Planet(coord, PopulationRandom());
	
	this.tabPlayer[0] = this.player;
	var tabSet = new Array[player.getSetPlanet()];
	this.tabGalaxy[coord.getX()][coord.getY()] = tabSet[0];
	for (int i = 0; i < this.nbEnemy; i++) {
		
		coord = calculCoord();
		this.tabEnemy[0] = new Enemy(new Planet(coord, PopulationRandom()));
		var tabSet= new Array[tabEnemy[0].getSetPlanet()];
		this.tabGalaxy[coord.getX()][coord.getY()] = tabSet[0];
	}
	
	//outil
	
	tabFull() {
		for (int i = 0; i < this.height; i++) {
			for (int i = 0; i < this.width; i++) {
				if (tabGalaxy[i][j] == null) {
					return false);
				}
			}
		}
		return true;
	}
	
	calculCoord() {
		if (tabFull()) {
			throw new Error("plus de place");
		}
		var i = Math.floor(Math.random() * this.width);
		var j = Math.floor(Math.random() * this.height);
		while (tabGalaxy[i][j] != null) {
			i = Math.floor(Math.random() * this.width);
			j = Math.floor(Math.random() * this.height);
		}
		return new Coord(i,j);
	}
	
	
	PopulationRandom() {
		return Math.floor((Math.random() * 200) + 1);
	}
}
