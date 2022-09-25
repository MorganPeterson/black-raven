import {
  numRows,
  numCols,
  numBlackPieces,
  kingPiece,
  throneTile,
} from './constants'

/**
 * Given a tiles id number return it's x-y coords
 *
 * @param v { number } tile id
 *
 * @return Array<number> length of 2
 */
export const coords = (v) => {
  return [Math.trunc(v / numRows), v % numRows]
}

/**
 * Check if a piece is a black piece given it's id
 *
 * @param val { number | null } piece id
 * @returns boolean
 */
export const isBlack = (val) => {
  if (val !== null) {
    if (val < numBlackPieces) {
      return true
    }
  }
  return false
}

/**
 * Check if a piece is a king given it's id
 *
 * @param val { number | null } piece id
 * @returns boolean
 */
export const isKing = (val) => {
  if (val !== null) {
    if (val === kingPiece) {
      return true
    }
  }
  return false
}

/**
 * Check if a piece is a white piece given it's id
 *
 * @param val { number | null } piece id
 * @returns boolean
 */
export const isWhite = (val) => {
  if (val !== null) {
    if (val >= numBlackPieces) {
      return true
    }
  }
  return false
}

/**
 * Check if tile (x, y) is a corner tile
 *
 * @param x { number } row
 * @param y { number } column
 * @returns boolean
 */
export const isCorner = (x, y) => {
  const maxCols = numCols - 1
  if (x === 0) {
    if (y === maxCols || y === 0) {
      return true
    }
  }

  if (x === 6) {
    if (y === 0 || y === maxCols) {
      return true
    }
  }

  return false
}

/**
 * Check if tile (y, z) is legal to move to from (w,x)
 *
 * @param brd { Array<Array<number|null>> }
 *  @param w { number } current tile x coord
 *  @param x { number } current tile y coord
 *  @param y { number } move-to tile x coord
 *  @param z { number } move-to tile y coord
 *
 *  @returns boolean
 */
export const isLegal = (brd, w, x, y, z) => {
  const king = brd[w][x] === 10
  const maxCols = numCols - 1

  if (!king) {
    if ((y === 0 || y === maxCols) && (z === 0 || z === maxCols)) {
      return false
    }

    if (y === throneTile[0] && z === throneTile[1]) {
      return false
    }
  }

  if (w === y) {
    if (x > z) {
      for (let i = z; i < x; i++) {
        if (brd[w][i] !== null) {
          return false
        }
      }
    }

    if (z > x) {
      for (let i = x + 1; i < z; i++) {
        if (brd[w][i] !== null) {
          return false
        }
      }
    }
    return true
  }

  if (x === z) {
    if (w > y) {
      for (let i = y; i < w; i++) {
        if (brd[i][x] !== null) {
          return false
        }
      }
    }

    if (y > w) {
      for (let i = w + 1; i < y; i++) {
        if (brd[i][x] !== null) {
          return false
        }
      }
    }
    return true
  }
  return false
}

/**
 * See if the latest move removes any pieces from the board
 *
 * @param b { Array<Array<number|null>> } the board
 * @param y { number } the x coord
 * @param z { number } the y coord
 *
 * @returns Array<Array<number|null>>
 */
export const removePiece = (b, y, z) => {
  if (y + 2 < 7) {
    if (
      isWhite(b[y][z]) &&
      isBlack(b[y + 1][z]) &&
      (isWhite(b[y + 2][z]) || isCorner(y + 2, z))
    ) {
      b[y + 1][z] = null
    }

    if (
      isBlack(b[y][z]) &&
      isWhite(b[y + 1][z]) &&
      (isBlack(b[y + 2][z]) || isCorner(y + 2, z))
    ) {
      b[y + 1][z] = null
    }
  }

  if (y - 2 > -1) {
    if (
      isWhite(b[y][z]) &&
      isBlack(b[y - 1][z]) &&
      (isWhite(b[y - 2][z]) || isCorner(y - 2, z))
    ) {
      b[y - 1][z] = null
    }

    if (
      isBlack(b[y][z]) &&
      isWhite(b[y - 1][z]) &&
      (isBlack(b[y - 2][z]) || isCorner(y - 2, z))
    ) {
      b[y - 1][z] = null
    }
  }

  if (z + 2 < 7) {
    if (
      isWhite(b[y][z]) &&
      isBlack(b[y][z + 1]) &&
      (isWhite(b[y][z + 2]) || isCorner(y, z + 2))
    ) {
      b[y][z + 1] = null
    }

    if (
      isBlack(b[y][z]) &&
      isWhite(b[y][z + 1]) &&
      (isBlack(b[y][z + 2]) || isCorner(y, z + 2))
    ) {
      b[y][z + 1] = null
    }
  }

  if (z - 2 > -1) {
    if (
      isWhite(b[y][z]) &&
      isBlack(b[y][z - 1]) &&
      (isWhite(b[y][z - 2]) || isCorner(y, z - 2))
    ) {
      b[y][z - 1] = null
    }

    if (
      isBlack(b[y][z]) &&
      isWhite(b[y][z - 1]) &&
      (isBlack(b[y][z - 2]) || isCorner(y, z - 2))
    ) {
      b[y][z - 1] = null
    }
  }

  return b
}
