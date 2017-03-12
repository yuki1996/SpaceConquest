function Player(p, c) {
		if (p ! insteanceOf Planet || c! insteanceOf coord) {
		throw new Error("Player");
	} 
	
	this.coord = c;
	this.allPopulation = p.getPopulation();
	
	//ensemble des planètes du joueur
	this.getSetPlanet = function() {
		var mySet = new Set();
		mySet.add(p);
		return mySet;
	}
}

//ajout de la planète p 
Player.prototype.addPlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getSetPlanet.add(p);
	}
}

//coordonnée d'une des planètes du joueur
Player.prototype.getCoord() = function() {
	return this.coord();
}

//Supprime la planète p
Player.prototype.removePlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getSetPlanet.delete(p);
		if (getSetPlanet.size() == 0) {
			this.coord = null;
			
		}
		var c = p.getCoord();
		if (c == coord) {
			
			var tabSet= new Array[getSetPlanet()];
			coord = tabSet[0].getCoord();
		}
		this.allPopulation -= p.getPopulation();
	}
}

// indique si p fait partie de l'ensemble des planètes du joueur
Player.prototype.hasPlanet() = function(p) {
	if (p instanceOf Planet) {
		return this.getSetPlanet.has(p);
	}
	return false;
}

//s'il peut encore jouer
player.prototype.canPlay() = function() {
	this.getSetPlanet.size() != 0;
}
