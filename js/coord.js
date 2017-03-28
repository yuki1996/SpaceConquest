function Coord(x, y) {
	this.getX = x;
	this.getY = y;
}

Coord.prototype.isEqual = function(c) {
  if (!(c instanceof (Coord))) {
		throw new Error("Not a planet");
	}
  if (this.getX == c2.getX) {
    if (this.getY == c2.getY) {
      return true;
    }
  }
  return false;
};
