function checkBlackPawn(originColumn, originRow, targetColumn, targetRow) {
    if (targetRow < originRow && (originRow == 7 && (targetRow == 5 || targetRow == 6) && originColumn == targetColumn)) {
        return true;
    } else {
        if (originRow != 7 && (targetRow == originRow - 1) && (originColumn == targetColumn)) {
            return true;
        } else {
            return false;
        }
    }
}
function checkWhitePawn(originColumn, originRow, targetColumn, targetRow) {
    if (targetRow > originRow && (originRow == 2 && (targetRow == 3 || targetRow == 4) && originColumn == targetColumn)) {
        return true;
    } else {
        if (originRow != 2 && (targetRow == originRow + 1) && (originColumn == targetColumn)) {
            return true;
        } else {
            return false;
        }
    }
}

function checkTower(originColumn, originRow, targetColumn, targetRow) {
    if ((targetRow != originRow && originColumn == targetColumn) || (targetRow == originRow && originColumn != targetColumn)) {
        return true;
    } else {
        return false;
    }
}

function checkBishop(originColumn, originRow, targetColumn, targetRow) {
    if (originColumn == targetRow || originRow == targetColumn) {
        return true;
    } else {
        return false;
    }
}

function checkQueen(originColumn, originRow, targetColumn, targetRow) {
    if (checkTower() || checkBishop()) {
        return true;
    } else {
        return false;
    }
}

function checkKing(originColumn, originRow, targetColumn, targetRow) {
    if (originRow == originRow + 1 || originColumn == originColumn + 1) {
        return true;
    } else {
        return false;
    }
}


function checkCorrectMove(piece, originColumn, originRow, targetColumn, targetRow) {
    this.piece = piece;
    this.originColumn = originColumn;
    this.originRow = originRow;
    this.targetColumn = targetColumn;
    this.targetRow = targetRow;

    switch (this.piece) {
        case 'blackPawn':
            return checkBlackPawn(this.originColumn, this.originRow, this.targetColumn, this.targetRow);
            break;
        case 'whitePawn':
            return checkWhitePawn(this.originColumn, this.originRow, this.targetColumn, this.targetRow);
            break;
        case 'tower':
            return checkTower(this.originColumn, this.originRow, this.targetColumn, this.targetRow);
            break;
        case 'bishop':
            return checkBishop(this.originColumn, this.originRow, this.targetColumn, this.targetRow);
            break;
        case 'horse':
            return checkHorse(this.originColumn, this.originRow, this.targetColumn, this.targetRow);
            break;
        case 'king':
            return checkKing(this.originColumn, this.originRow, this.targetColumn, this.targetRow);
            break;
        case 'queen':
            return checkQueen(this.originColumn, this.originRow, this.targetColumn, this.targetRow);
            break;
        default:
            break;
    }

}
let originRow = 3;
let originColumn = 1;
let targetRow = 4;
let targetColumn = 1;

let pieceName = 'whitePawn';
let msg = "El movimiento de la pieza: " + pieceName + " es ";

if (checkCorrectMove(pieceName, originColumn, originRow, targetRow, targetColumn)) {
    msg += 'correcto'
} else {
    msg += 'incorrecto'
}

console.log(msg);
