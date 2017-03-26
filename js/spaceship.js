function Spaceship(src, n, dst) {
  if (isNaN(n)) {
		throw new Error("Not a number");
	}
  if (!(src instanceof Planet) || !(dst instanceof Planet))  {
		throw new Error("Not planets");
	}
  //Population 
  this.occupants = n;
  
  //l'adversaire
  this.enemy = dst; 
  
  //la planète de départ 
  this.home = src;
  
  //coord
  this.coord = src.coord;
}

Spaceship.prototype.move = function() {
  if (this.coord.getX !== this.enemy.coord.getX) {
    if (this.coord.getX < this.enemy.coord.getX) {
      this.coord.getX = this.coord.getX + 1;
    } else {
      this.coord.getX = this.coord.getX - 1;
    }
  } else {
    if (this.coord.getY !== this.enemy.coord.getY) {
       if (this.coord.getY < this.enemy.coord.getY) {
        this.coord.getY = this.coord.getY + 1;
      } else {
        this.coord.getY = this.coord.getY - 1;
      }
    }
  }
};
