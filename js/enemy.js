function Enemy(c, p) {
	if (!(c  instanceof Coord) ||! (p  instanceof Planet)) {
		throw new Error("Enemy");
	} 
	//ensemble des planètes de l'ennemie
	this.getPlanet = function() {
		var mySet = new Set();
		mySet.add(p);
		return mySet;
	};
	
	
	//Coordonnée de la planète
	this.coord = c;
		
}



//ajout de la planète p 
Enemy.prototype.addPlanet = function(p) {
	if (p instanceof Planet) {
		this.getPlanet.add(p);
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
	return this.getSetPlanet.size() !== 0;
};

Enemy.prototype.getCoord = function() {
		return this.coord;
};

