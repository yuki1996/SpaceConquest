function Enemy(p) {
	if (!(p instanceof Planet)) {
		throw new Error("Enemy");
	} 
  
  p.leader = this;
	//ensemble des planètes de l'ennemi
	this.getPlanets = [];
  this.getPlanets.push(p);;
  
  //la flotte de l'ennemi
  this.getFleet = [];
}

//ajout de la planète p 
Enemy.prototype.addPlanet = function(p) {
	if (p instanceof Planet) {
    p.leader = this;
		this.getPlanets.add(p);
	}
};

//Supprime la planète p
Enemy.prototype.removePlanet = function(p) {
	if (p instanceof Planet) {
    p.leader = null;
		this.getPlanets.pop(p);
	}
};


// indique si p fait partie de l'ensemble des planètes de l'ennemie
Enemy.prototype.hasPlanet = function(p) {
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
Enemy.prototype.canPlay = function() {
	return this.getPlanets.length !== 0 && this.getFleet.length !== 0;
};

Enemy.prototype.attack = function(src, n, dst) {
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
    var ss = src.buildSpaceship(n, dst);
    this.getFleet.push(ss);
    //~ this.addSpaceship();
  } else {
    throw new Error("Not your planet");
  }
};

Enemy.prototype.addSpaceship = function(s) {
	if (s instanceof SpaceShip) {
		this.getFleet.push(s);
	}
};

Enemy.prototype.removeSpaceship = function(s) {
	if (s instanceof Spaceship) {
		this.getFleet.pop(s);
	}
};
