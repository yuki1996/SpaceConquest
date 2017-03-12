function Planet(x, y, p, f, c) {
	
	this.getX = x;
	this.getY = y;
	this.population = p;
	this.fleet = f;
	this.colonist = s;
	
	this.getCoord = function() {
		return new coord(getX, getY);
	}
	
}

Planet.prototype.setPopulation = function(p) {
	this.population = p;
}

Planet.prototype.setColonist = function(c) {
	this.colonist = c;
}
