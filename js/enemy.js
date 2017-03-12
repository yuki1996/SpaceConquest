function Enemy() {
	this.getPlanet = function() {
		var mySet = new Set();
		mySet.add(p);
		return mySet;
	}
	
}

Enemy.prototype.addPlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getPlanet.add(p);
	}
}

Enemy.prototype.removePlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getPlanet.remove(p);
	}
}

Enemy.prototype.hasPlanet() = function(p) {
	if (p instanceOf Planet) {
		return this.getPlanet.has(p);
	}
	return false;
}

}
