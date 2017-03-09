function Planet(c, p) {
	if (c ! insteanceOf Coord || 0 > p) {
		throw new Error("Planet");
	} 
	//Coordonnée de la planète
	this.getX = c.getX();
	this.getY = c.getY();
	
	//population locale
	this.population = p;
	
	//colons parmi pop local partis en mission
	this.colonist = 0;
	
	//Renvoie coordonnée
	this.getCoord = function() {
		return new coord(getX, getY);
	}
	
}

//modifie la population local
Planet.prototype.setPopulation = function(p) {
	if (0 > p) {
		throw new Error("setPopulation");
	} 
	this.population = p;
}

//modifie le nombre de colons partis en mission
Planet.prototype.setColonist = function(c) {
	if (0 > c || c > this.population) {
		throw new Error("setColonist");
	}
	this.colonist = c;
}
