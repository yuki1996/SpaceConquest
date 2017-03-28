//~ function Game(nbEnemy, w, h) {
	//~ if (0 > nbEnemy || nbEnemy > 10 || w < 0 || h < 0) {
		//~ throw new Error("Game");
	//~ } 
	//~ this.nbEnemy = nbEnemy;
	//~ this.width = w;
	//~ this.height = h;
	//~ this.tabGalaxy = new Array(h, w);
	//~ this.tabPlayer = new Array(nbEnemy + 1);
  //~ this.fleet = []; 
  //~ this.tabPlanet = [];
	//~ this.player = null;
	//~ var pop = this.PopulationRandom();
	//~ var coord = new Coord(0, 1);
  //~ var planet = new Planet(coord, pop);
	//~ this.player = new Player(planet);
//~ }

function Game(nbEnemy) {
	if (0 > nbEnemy || nbEnemy > 10) {
		throw new Error("Game");
	} 
	this.nbEnemy = nbEnemy;
	this.tabPlayer = new Array(nbEnemy + 1);
  this.fleet = []; 
  this.tabPlanet = [];
	this.player = null;
	var pop = this.PopulationRandom();
	var coord = new Coord(0, 1);
  var planet = new Planet(coord, pop);
	this.player = new Player(planet);
  this.tabPlanet[0] = planet;
  this.tabPlayer[0] = this.player;
}

//~ Game.prototype.start = function () {
	//~ this.tabPlayer[0] = this.player;
	//~ var tabSet = new Array[this.player.getPlanets()]();
	//~ this.tabGalaxy[coord.getX()][coord.getY()] = tabSet[0];
	//~ for (var i = 0; i < this.nbEnemy; i++) {
		//~ var coord = this.calculCoord();
		//~ this.tabEnemy[0] = new Enemy(new Planet(coord, this.PopulationRandom()));
		//~ var tabSet0= new Array[this.tabEnemy[0].getSetPlanet()]();
		//~ this.tabGalaxy[coord.getX()][coord.getY()] = tabSet0[0];
	//~ }
	//~ 
	//~ //outil
  //~ this.tabFull = function() {
		//~ for (var i = 0; i < this.height; i++) {
			//~ for (var j = 0; i < this.width; i++) {
				//~ if (this.tabGalaxy[i][j] === null) {
					//~ return false;
				//~ }
			//~ }
		//~ }
		//~ return true;
	//~ };
	//~ 
	//~ this.calculCoord = function() {
		//~ if (this.tabFull()) {
			//~ throw new Error("plus de place");
		//~ }
		//~ var i = Math.floor(Math.random() * this.width);
		//~ var j = Math.floor(Math.random() * this.height);
		//~ while (this.tabGalaxy[i][j] !== null) {
			//~ i = Math.floor(Math.random() * this.width);
			//~ j = Math.floor(Math.random() * this.height);
		//~ }
		//~ alert("no");
		//~ return new Coord(i,j);
	//~ };
	//~ 
//~ };

Game.prototype.PopulationRandom = function () {
	return Math.floor((Math.random() * 200) + 1);
};


Game.prototype.gameOver = function () {
  var bool = false;
  // on vérifie si au moins un ennemi peut joueur
  for (var i = 1; i < this.tabPlayer.length; i++) {
    bool = bool || this.tabPlayer[i].canPlay();
  } 
  // Le jeu termine quand le joueur ne peut plus joueur
  if (bool === true && this.player.canPlay()) {
    return true;
  } 
  
  return false; 
};

//Lancer une attaque
Game.prototype.launchAttack = function(s) {
  if (!(s instanceof Spaceship)) {
		throw new Error("Not space ship");
  }
  if (s.coord.isEqual(s.enemy.coord)) {
    if (checkCoord(s.home.leader, s.enemy.coord)) {
      s.enemy.population = s.occpant + s.enemy.population;
    } else {
      if (s.occupants > s.enemy.populaton) {
        if (s.enemy.leader != null) {
           s.enemy.leader.removePlanet(s.enemy);
        }
        //~ s.enemy.leader = s.home.leader;
        s.home.leader.addPlanet(s.enemy);
        s.home.addPlanet(s.enemy);
      } else {
        s.home.leader.removePlanet(s.enemy);
        s.enemy.leader.addPlanet(s.enemy);
      }
    }
    s.enemy.population = s.occpant - s.enemy.population;
    s.home.removeSpaceship(s);
    this.destroySpaceship(s);
  }
}

Game.prototype.destroySpaceShip = function(s) {
  if (s instanceof Spaceship) {
    this.fleet.pop(s);
  }
}

//tour
Game.prototype.turn = function() {
  if (this.player.hasPlayed === true && !(this.gameOver())) {
    var newFleet = []; 
    for (var i = 0; i < this.tabPlayer.length; i++) {
      for (var k = 0; k < this.tabPlayer[i].getFleet.length; k++) {
        newFleet.push(this.tabPlayer[i].getFleet[k]); 
      }
    }
    game.fleet = newFleet; 
    // Déplacer les flottes en transit
    for (i = 0; i < this.fleet.length; i++) {
      this.fleet[i].move();
      this.launchAttack(this.fleet[i]);
    }
    // Criossance de population
    for (i = 0; i < this.tabPlanet.length; i++) {
      if (this.tabPlanet[i].leader !== null) {
        var n =  Math.floor((Math.random() * 10) + 1);
        this.tabPlanet[i].population += n;
      }
    }
    var planetArray = []; 
    for (var j = 0; j < game.tabPlayer.length; j++) {
      for (var k = 0; k < game.tabPlayer[j].getPlanets.length; k++) {
        if (game.tabPlayer[j].getPlanets[k].population == 0) {
          game.tabPlayer[j].removePlanet(game.tabPlayer[j].getPlanets[k]); 
        }
        if (j > 0 && game.tabPlayer[j].getPlanets[k].population > 1) {
          planetArray.push(game.tabPlayer[j].getPlanets[k]); 
        }
      }
      if (j > 0) {
        var ep = this.randomEnemyPlanet(planetArray);
        var planet = this.randomPlanet();
        var nbColonists = this.randomNColonists(ep);
        this.tabPlayer[j].attack(ep, nbColonists, planet);
      }
      planetArray = [];
    }
  }
};

Game.prototype.addSpaceship = function(s) {
	if (s instanceof Spaceship) {
		this.Fleet.push(s);
	}
};

Game.prototype.randomPlanet = function() {
	var rand = Math.floor((Math.random() * this.tabPlanet.length));
  return this.tabPlanet[rand]; 
};

Game.prototype.randomEnemyPlanet = function(e) {
	var rand = Math.floor((Math.random() * e.length));
  return e[rand]; 
};

Game.prototype.randomNColonists = function(p) {
  return Math.floor((Math.random() * p.population) + 1);
};


function checkCoord(p, c) {
  if (p.getPlanets.length > 0) {
    for (var i = 0; i < p.getPlanets.length; i++) {
      if (p.getPlanets.coord.getX === c.getX && p.getPlanets.coord.getY === c.getY) {
        return true;
      }
    }
  }
  return false;
}
        
