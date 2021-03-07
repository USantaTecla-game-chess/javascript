function Coordinate(col, row) {
    this.col = col;
    this.row = row;

    this.checkWhitePawn = function(target) {
      return this.sameColumn(target) && this.row > target.row &&
        ( this.verticalDistance(target) == 1 ||
          this.verticalDistance(target) == 2 && this.row == 6 ) ||
        this.diagonalDistance(target) == 1 && this.row > target.row;
    }

    this.checkBlackPawn = function(target) {
      return this.sameColumn(target) && this.row < target.row &&
        ( this.verticalDistance(target) == 1 ||
          this.verticalDistance(target) == 2 && this.row == 1 ) ||
        this.diagonalDistance(target) == 1 && this.row < target.row;
    }

    this.checkRook = function(target) {
      return !this.equals(target) &&
        (this.sameColumn(target) || this.sameRow(target));
    }

    this.checkBishop = function(target) {
      return !this.equals(target) &&
        (this.sameDiagonal(target) || this.sameInverseDiagonal(target));
    }

    this.checkKnight = function(target) {
      return this.horizontalDistance(target) == 2 && this.verticalDistance(target) == 1 ||
        this.verticalDistance(target) == 2 && this.horizontalDistance(target) == 1;
    }

    // alternate
    this.checkKnight = function(target) {
      let directions = [
        new Coordinate(1,-2),
        new Coordinate(2,-1),
        new Coordinate(2,1),
        new Coordinate(1,2),
        new Coordinate(-1,2),
        new Coordinate(-2,1),
        new Coordinate(-2,-1),
        new Coordinate(-1,-2),
      ];
      this.checkInDirections(directions, target);
    }

    this.checkQueen = function(target) {
      return this.checkRook(target) || this.checkBishop(target);
    }

    this.checkKing = function(target) {
      return this.checkQueen(target) &&
        (this.horizontalDistance(target) == 1 || this.verticalDistance(target) == 1);
    }

    // alternate
    this.checkKing = function(target) {
      let directions = [
        new Coordinate(0,-1),
        new Coordinate(1,-1),
        new Coordinate(0,1),
        new Coordinate(1,-1),
        new Coordinate(0,-1),
        new Coordinate(-1,1),
        new Coordinate(-1,0),
        new Coordinate(-1,-1)
      ];
      this.checkInDirections(directions, target);
    }

    this.checkInDirections = function(directions, target) {
      for(let i = 0; i < directions.length; i++) {
        return target == this.offsetted(directions[i]);
      }
    }

    this.offsetted = function(coordinate) {
      return new Coordinate(this.col + coordinate.col, this.row + coordinate.row);
    }

    this.verticalDistance = function(target) {
      return Math.abs(this.row - target.row);
    }

    this.horizontalDistance = function(target) {
      return Math.abs(this.col - target.col);
    }

    this.diagonalDistance = function(target) {
      return this.horizontalDistance(target) == this.verticalDistance(target);
    }

    this.sameColumn = function(target) {
      return this.verticalDistance(target) == 0;
    }

    this.sameRow = function(target) {
      return this.horizontalDistance(target) == 0;
    }

    this.sameDiagonal = function(target) {
      return this.col + this.row == target.col + target.row;
    }

    this.sameInverseDiagonal = function(target) {
      return this.col - this.row == target.col - target.row;
    }

  }
  