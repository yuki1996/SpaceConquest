function Enemy() {
	//ensemble des planètes de l'ennemie
	this.getPlanet = function() {
		var mySet = new Set();
		mySet.add(p);
		return mySet;
	}
	
}



//ajout de la planète p 
Enemy.prototype.addPlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getPlanet.add(p);
	}
}


//Supprime la planète p
Enemy.prototype.removePlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getPlanet.remove(p);
	}
}


// indique si p fait partie de l'ensemble des planètes de l'ennemie
Enemy.prototype.hasPlanet() = function(p) {
	if (p instanceOf Planet) {
		return this.getPlanet.has(p);
	}
	return false;
}

//s'il peut encore jouer
Enemy.prototype.canPlay() = function() {
	this.getSetPlanet.size() != 0;
}
}
