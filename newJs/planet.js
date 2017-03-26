function Planet(c, n) {
	if (!(c instanceof (Coord)) || n < 0) {
		throw new Error("Planet");
	} 
	//Coordonnée de la planète
	this.coord = c;
		
	//population locale
	this.population = n;
	
	//colons parmi pop local partis en mission
	this.colonist = 0;
  
  // chef
  this.leader = null; 
}

Planet.prototype.buildSpaceship = function(n, p) {
  if (isNaN(n)) {
		throw new Error("Not a number");
	} 
  if (!(p instanceof Planet))  {
		throw new Error("Not a planet");
	}
  if (this.population === 0) {
    throw new Error("This is a neutral planet");
  }
  if (n > this.population) {
		throw new Error("Not enough people on this planet");
	}
  this.population =  this.population - n; 
  return new Spaceship(this, n, p);
};

Planet.prototype.getPopulation = function() {
  return population;
};

Planet.prototype.getLeader = function() {
  return leader;
};
