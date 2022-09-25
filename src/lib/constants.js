/**
 * String id's of the two team's pieces
 * Array<string>
 */
export const pieceColors = ['white', 'black']

/**
 * Tile id's that are corners
 * Array<number>
 */
export const cornerTile = [0, 6, 42, 48]

/**
 * Tiles that are legal for the king only
 * Array<number>
 */
export const kingTile = cornerTile.concat([24]).sort()

/**
 * starting number of white pieces
 * number
 */
export const numWhitePieces = 5

/**
 * Starting number of black pieces
 * number
 */
export const numBlackPieces = 8

/**
 * King pieces id number
 * number
 */
export const kingPiece = 10

/**
 * number of rows on the board
 * number
 */
export const numRows = 7

/**
 * number of columns on the board
 * number
 */
export const numCols = 7

/**
 * Coordinates of the throne and the center Tile
 * Array<number>
 */
export const throneTile = [3, 3]
