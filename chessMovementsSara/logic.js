function Coordinate(x, y) {
    this.x = x;
    this.y = y;
    this.string = function () {
        return "(" + this.x + " , " + this.y + ")";
    };
    this.isHorizontal = function (x) {
        return this.x == x;
    }
    this.isVertical = function (y) {
        return this.y == y;
    }
    this.isDiagonal = function (coordenada) {
        return this.x == coordenada.y || this.y == coordenada.x;
    }
    this.isDiagonalInverse = function (coordenada) {
        return this.x == -coordenada.y || this.y == -coordenada.x;
    }
    this.sameHorizontal = function (coordenada) {
        return this.x == coordenada.x;
    };
    this.sameVertical = function (coordenada) {
        return this.y == coordenada.y;
    };
    this.getShifted = function (x, y) {
        return new Coordinate(this.x + x, this.y + y);
    };
    this.equals = function (coordenada) {
        return this.x == coordenada.x && this.y == coordenada.y;
    };

    this.checkWPawn = function (coordenada) {
        return this.getShifted(0, 1).equals(coordenada) && this.sameHorizontal(coordenada) ||
            this.isHorizontal(2) && coordenada.isHorizontal(4) && this.sameHorizontal(coordenada ||
                this.getShifted(0, 1).equals(coordenada))
    }
    this.checkBPawn = function (coordenada) {
        return this.getShifted(0, 6).equals(coordenada) && this.sameHorizontal(coordenada) ||
            this.isHorizontal(5) && coordenada.isHorizontal(7) && this.sameHorizontal(coordenada ||
                this.getShifted(0, 6).equals(coordenada))
    }
    this.checkTower = function (coordenada) {
        return this.sameHorizontal(coordenada) || this.sameVertical(coordenada);
    }

    this.checkBishop = function (coordenada) {
        return this.isDiagonal(coordenada) || this.isDiagonalInverse(coordenada);
    }

    this.checkHorse = function (coordenada) {

        return this.isHorizontal(coordenada) == 2 && this.isVertical(coordenada) == 1 ||
            this.isVertical(coordenada) == 2 && this.isHorizontal(coordenada) == 1 ||
            this.isHorizontal(coordenada) == 1 && this.isVertical(coordenada) == 2 ||
            this.isVertical(coordenada) == 1 && this.isHorizontal(coordenada) == 2;
    }

    this.checkQueen = function (coordenada) {
        return this.checkBishop(coordenada) || this.checkTower(coordenada);
    }
    this.checkKing = function (coordenada) {
        return this.checkQueen() && this.isVertical(coordenada) <= 1 && this.isHorizontal(coordenada) <= 1
    }

    this.checkPiece = function (coordenada) {
        if (this.checkBPawn(coordenada)) {
            return 'Peón negro';
        }
        if (this.checkWPawn(coordenada)) {
            return 'Peón blanco';
        }
        if (this.checkTower(coordenada)) {
            return 'Torre';
        }

        if (this.checkBishop(coordenada)) {
            return 'Alfil';
        }

        if (this.checkHorse(coordenada)) {
            return 'Caballo';
        }

        if (this.checkQueen(coordenada)) {
            return 'Reina';
        }

        if (this.checkKing(coordenada)) {
            return 'Rey';
        }
    }

}



let origin = new Coordinate(1, 2);
let target = new Coordinate(2, 2);
let msg = 'El movimiento de ' + origin.string() + ' hasta ' + target.string() + ' es válido para: ';

msg += origin.checkPiece(target);

console.log(msg);
