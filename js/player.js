function Player(p) {
	this.allPopulation = p.population;
	
	//ensemble des planètes du joueur
	this.getSetPlanet = new Array();
	this.getSetPlanet.push(p);
}

//ajout de la planète p 
Player.prototype.addPlanet = function(p) {
	if (p instanceof Planet) {
		this.getSetPlanet.push(p);
	}
};

//Supprime la planète p
Player.prototype.removePlanet = function(p) {
	if (p instanceof Planet) {
		this.getSetPlanet.delete(p);
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
	return this.getSetPlanet.length !== 0;
};

