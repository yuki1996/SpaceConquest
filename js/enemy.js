function Enemy(p) {
	
	this.allPopulation = p.population;
	//ensemble des planètes de l'ennemie
	
	//ensemble des planètes du joueur
	this.getSetPlanet = new Array();
	this.getSetPlanet.push(p);
	
}



//ajout de la planète p 
Enemy.prototype.addPlanet = function(p) {
	if (p instanceof Planet) {
		this.getPlanet.push(p);
	}
};


//Supprime la planète p
Enemy.prototype.removePlanet = function(p) {
	if (p instanceof Planet) {
		this.getPlanet.delete(p);
	}
};

// indique si p fait partie de l'ensemble des planètes de l'ennemie
Enemy.prototype.hasPlanet = function(p) {
	if (p instanceof Planet) {
		return this.getPlanet.has(p);
	}
	return false;
};

//s'il peut encore jouer
Enemy.prototype.canPlay = function() {
	return this.getSetPlanet.length !== 0;
};


