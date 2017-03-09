function Player(p) {
		if (p ! insteanceOf Planet) {
		throw new Error("Player");
	} 
	
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


//Supprime la planète p
Player.prototype.removePlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getSetPlanet.remove(p);
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
