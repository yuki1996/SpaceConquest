function Enemy(p) {
	if (! (p  instanceof Planet)) {
		throw new Error("Enemy");
	} 
	//ensemble des planètes de l'ennemie
	var mySet = new Set();
	mySet.add(p);
	this.getSetPlanet = mySet;
	
	
	//Coordonnée de la planète 
	this.coord = p.coord;
		
}



//ajout de la planète p 
Enemy.prototype.addPlanet = function(p) {
	if (p instanceof Planet) {
		this.getSetPlanet.add(p);
	}
};


//Supprime la planète p
Enemy.prototype.removePlanet = function(p) {
	if (p instanceof Planet) {
		this.getSetPlanet.delete(p);
	}
};


// indique si p fait partie de l'ensemble des planètes de l'ennemie
Enemy.prototype.hasPlanet = function(p) {
	if (p instanceof Planet) {
		return this.getSetPlanet.has(p);
	}
	return false;
};

//s'il peut encore jouer
Enemy.prototype.canPlay = function() {
	return this.getSetPlanet.size !== 0;
};

Enemy.prototype.getCoord = function() {
		return this.coord;
};

