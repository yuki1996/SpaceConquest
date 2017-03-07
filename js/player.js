function Player(p) {
	this.getPlanet = function() {
		var mySet = new Set();
		mySet.add(p);
		return mySet;
	}
}

Player.prototype.addPlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getPlanet.add(p);
	}
}

Player.prototype.removePlanet() = function(p) {
	if (p instanceOf Planet) {
		this.getPlanet.remove(p);
	}
}

Player.prototype.hasPlanet() = function(p) {
	if (p instanceOf Planet) {
		return this.getPlanet.has(p);
	}
	return false;
}
