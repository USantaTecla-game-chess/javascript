function Coordinate(x,y){
  this.x = x;
  this.y = y;

  this.isPawnMovement = function(coordinate, color){
    assert(coordinate == null);
    assert(color=="white" || color=="black");

    const initialRow = color == "white" ? 2 : 7;
    const verticalShift = color == "white" ? 1 : -1;
    const verticalInitialShift = verticalShift * 2;
    return this.getHorizontalDistance(coordinate) == 0
        && (this.x + verticalShift == coordinate.x
          || this.x == initialRow && this.x + verticalInitialShift == coordinate.x)
      || this.getHorizontalDistance(coordinate) == 1 
        && this.x + verticalShift == coordinate.x;
  }

  this.isTowerMovement = function(coordinate){
    return !this.equals(coordinate)
      && (this.getHorizontalDistance(coordinate) == 0 
        || this.getVerticalDistance(coordinate) == 0);
  }

  this.isBishopMovement = function(coordinate){
    return !this.equals(coordinate)
      && (this.getHorizontalDistance(coordinate) == 
          this.getVerticalDistance(coordinate));
  }

  this.isHorseMovement = function(coordinate){
    return this.getHorizontalDistance(coordinate) == 1
        && this.getVerticalDistance(coordinate) == 2
      || this.getHorizontalDistance(coordinate) == 2
        && this.getVerticalDistance(coordinate) == 1;
  }

  this.isQueenMovement = function(coordinate){
    return this.isTowerMovement(coordinate)
      || this.isBishopMovement(coordinate);
  }

  this.isKingMovement = function(coordinate){
    return this.isQueenMovement(coordinate) 
      && this.getHorizontalDistance(coordinate) <= 1
      && this.getVerticalDistance(coordinate) <= 1;
  }

  this.equals = function(coordinate){
    return this.getHorizontalDistance(coordinate) == 0 
      && this.getVerticalDistance(coordinate) == 0;
  }

  this.getHorizontalDistance = function(coordinate){
    return Math.abs(this.y - coordinate.y);
  }

  this.getVerticalDistance = function(coordinate){
    if (this.x > coordinate.x){
      return this.x - coordinate.x
    }
    return coordinate.x - this.x;

    return Math.abs(this.x - coordinate.x);
  }

  this.toString = function(){
    return "(" + this.x + ", " + this.y + ")";
  }

}

function assert(expresion){
  if (!expresion){
    return 1/0;
  }
}

console.log("Peón blanco bien:", new Coordinate(2,3).isPawnMovement(new Coordinate(3,3), "white"));
console.log("Peón blanco bien:", new Coordinate(2,3).isPawnMovement(new Coordinate(4,3), "white"));
console.log("Peón blanco bien:", new Coordinate(3,3).isPawnMovement(new Coordinate(4,3), "white"));
console.log("Peón blanco bien:", new Coordinate(3,3).isPawnMovement(new Coordinate(4,2), "white"));
console.log("Peón blanco bien:", new Coordinate(3,3).isPawnMovement(new Coordinate(4,4), "white"));
console.log("Peón blanco mal:", new Coordinate(3,3).isPawnMovement(new Coordinate(5,3), "white"));
console.log("Peón blanco mal:", new Coordinate(3,3).isPawnMovement(new Coordinate(5,6), "white"));
console.log("Peón blanco mal:", new Coordinate(3,3).isPawnMovement(new Coordinate(1,1), "white"));

console.log("Peón negro bien:", new Coordinate(7,3).isPawnMovement(new Coordinate(5,3), "black"));
console.log("Peón negro bien:", new Coordinate(7,3).isPawnMovement(new Coordinate(6,3), "black"));
console.log("Peón negro bien:", new Coordinate(6,3).isPawnMovement(new Coordinate(5,3), "black"));
console.log("Peón negro bien:", new Coordinate(6,3).isPawnMovement(new Coordinate(5,2), "black"));
console.log("Peón negro bien:", new Coordinate(6,3).isPawnMovement(new Coordinate(5,4), "black"));
console.log("Peón negro mal:", new Coordinate(6,3).isPawnMovement(new Coordinate(7,3), "black"));
console.log("Peón negro mal:", new Coordinate(6,3).isPawnMovement(new Coordinate(5,6), "black"));
console.log("Peón negro mal:", new Coordinate(6,3).isPawnMovement(new Coordinate(1,1), "black"));

console.log("Torre bien:", new Coordinate(3,3).isTowerMovement(new Coordinate(2,3)));
console.log("Torre bien:", new Coordinate(3,3).isTowerMovement(new Coordinate(4,3)));
console.log("Torre bien:", new Coordinate(3,3).isTowerMovement(new Coordinate(3,1)));
console.log("Torre bien:", new Coordinate(3,3).isTowerMovement(new Coordinate(3,8)));
console.log("Torre mal:", new Coordinate(3,3).isTowerMovement(new Coordinate(7,1)));
console.log("Torre mal:", new Coordinate(3,3).isTowerMovement(new Coordinate(2,6)));
console.log("Torre mal:", new Coordinate(3,3).isTowerMovement(new Coordinate(1,1)));

console.log("Alfil bien:", new Coordinate(3,3).isBishopMovement(new Coordinate(1,1)));
console.log("Alfil bien:", new Coordinate(3,3).isBishopMovement(new Coordinate(8,8)));
console.log("Alfil bien:", new Coordinate(3,3).isBishopMovement(new Coordinate(1,5)));
console.log("Alfil bien:", new Coordinate(3,3).isBishopMovement(new Coordinate(4,2)));
console.log("Alfil mal:", new Coordinate(3,3).isBishopMovement(new Coordinate(3,5)));
console.log("Alfil mal:", new Coordinate(3,3).isBishopMovement(new Coordinate(5,2)));
console.log("Alfil mal:", new Coordinate(3,3).isBishopMovement(new Coordinate(8,6)));

console.log("Reina bien:", new Coordinate(3,3).isBishopMovement(new Coordinate(1,1)));
console.log("Reina bien:", new Coordinate(3,3).isBishopMovement(new Coordinate(8,8)));
console.log("Reina bien:", new Coordinate(3,3).isTowerMovement(new Coordinate(3,1)));
console.log("Reina bien:", new Coordinate(3,3).isTowerMovement(new Coordinate(3,8)));
console.log("Reina mal:", new Coordinate(3,3).isBishopMovement(new Coordinate(3,5)));
console.log("Reina mal:", new Coordinate(3,3).isBishopMovement(new Coordinate(5,2)));
console.log("Reina mal:", new Coordinate(3,3).isBishopMovement(new Coordinate(8,6)));

console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(1,2)));
console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(1,4)));
console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(5,2)));
console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(5,4)));
console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(2,1)));
console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(2,5)));
console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(4,1)));
console.log("Caballo bien:", new Coordinate(3,3).isHorseMovement(new Coordinate(4,5)));
console.log("Caballo mal:", new Coordinate(3,3).isHorseMovement(new Coordinate(1,1)));
console.log("Caballo mal:", new Coordinate(3,3).isHorseMovement(new Coordinate(1,1)));



