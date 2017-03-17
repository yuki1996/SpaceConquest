function Player(p) {
		if (!(p instanceof Planet)) {
		throw new Error("Player");
	} 
	
	this.coord = p.coord;
	this.allPopulation = p.population;
	
	//ensemble des planètes du joueur
	this.getSetPlanet = function() {
		var mySet = new Set();
		mySet.add(p);
		return mySet;
	};
}

//ajout de la planète p 
Player.prototype.addPlanet = function(p) {
	if (p instanceof Planet) {
		this.getSetPlanet.add(p);
	}
};

//Supprime la planète p
Player.prototype.removePlanet = function(p) {
	if (p instanceof Planet) {
		this.getSetPlanet.delete(p);
		if (this.getSetPlanet.size() === 0) {
			this.coord = null;
			
		}
		var c = p.getCoord();
		if (c == this.coord) {
			
			var tabSet= new Array[this.getSetPlanet()]();
			this.coord = tabSet[0].getCoord();
		}
		this.allPopulation -= p.getPopulation();
	}
};

// indique si p fait partie de l'ensemble des planètes du joueur
Player.prototype.hasPlanet = function(p) {
	if (p instanceof Planet) {
		return this.getSetPlanet.has(p);
	}
	return false;
};

//s'il peut encore jouer
Player.prototype.canPlay = function() {
	return this.getSetPlanet.size() !== 0;
};

Player.prototype.getCoord = function() {
		return this.coord;
};
