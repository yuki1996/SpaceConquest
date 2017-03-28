function Player(p) {
  if (!(p instanceof Planet)) {
		throw new Error("Player");
	} 	
	//~ this.allPopulation = p.population;
  this.hasPlayed = false;
  //la flotte de joueur
  this.getFleet = [];
  p.leader = this;
  //ensemble des planètes du joueur
	this.getPlanets = [];
  this.getPlanets.push(p);
}

//ajout de la planète p 
Player.prototype.addPlanet = function(p) {
	if (p instanceof Planet) {
    p.leader = this;
		this.getPlanets.push(p);
	}
};

//Supprime la planète p
Player.prototype.removePlanet = function(p) {
	if (p instanceof Planet) {
    p.leader = null;
		this.getPlanets.pop(p);
	}
};

// indique si p fait partie de l'ensemble des planètes du joueur
Player.prototype.hasPlanet = function(p) {
	if (!(p instanceof Planet)) {
		return false;
	}
  // pas supporter par les versions de Internet Explorer plus anciennes que 9
  if (this.getPlanets.indexOf(p) >= 0) {
    return true;
  } else {
    return false;
  }
};

//s'il peut encore jouer
Player.prototype.canPlay = function() {
  //***** il n'a plus de flotte en transit
	return this.getPlanets.lenghth !== 0 && this.getFleet.length !== 0;
};


// Lancer une attack
// src est la planète de départ
// n est les nombre de colons
// dst est la planète à conquérir
Player.prototype.attack = function(src, n, dst) {
  if (!(src instanceof Planet) || !(dst instanceof Planet)) {
		throw new Error("Not planets");
	} 
  if (n < 1) {
      throw new Error("Empty spaceship!");
  }
  if (this.hasPlanet(src)) {
    if (src.population - n <= 1) {
      throw new Error("Operation too risky: no one would be left");
    }
    this.addSpaceship(src.buildSpaceship(n, dst));
  } else {
    throw new Error("Not your planet");
  }
};

Player.prototype.addSpaceship = function(s) {
	if (s instanceof Spaceship) {
		this.getFleet.push(s);
	}
};

Player.prototype.removeSpaceShip = function(s) {
	if (s instanceof SpaceShip) {
		this.getFleet.pop(s);
	}
};

Player.prototype.played = function() {
  this.hasPlayed = true;
};

Player.prototype.newTurn = function() {
  this.hasPlayed = false;
};
