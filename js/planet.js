
function Planet(c, p) {
	//Coordonnée de la planète
	this.coord = c;
		
	//population locale
	this.population = p;
	
	//colons parmi pop local partis en mission
	this.colonist = 0;
	//Coordonnée de la planète
	this.proprietaire = "neutre";
}

//modifie la population local
Planet.prototype.setPopulation = function(p) {
	if (0 > p) {
		throw new Error("setPopulation");
	} 
	this.population = p;
};

//modifie le nombre de colons partis en mission
Planet.prototype.setColonist = function(c) {
	if (0 > c || c > this.population) {
		throw new Error("setColonist");
	}
	this.colonist = c;
};

Planet.prototype.addProprietaire = function(player) {
	this.proprietaire = player;
};
