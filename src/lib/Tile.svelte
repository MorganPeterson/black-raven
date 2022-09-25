<script>
    import { turn, selected, board } from './store';
    import {
        pieceColors,
        cornerTile,
        kingTile,
        numWhitePieces,
        numBlackPieces,
        kingPiece,
        numRows,
        numCols,
        throneTile,
    } from './constants'

    import {
        coords,
        isKing,
        isWhite,
        isBlack,
        isCorner,
        isLegal,
        removePiece
    } from './utils'

    export let type = '';
    export let pid = 0;

    let whitesTurn;      // whose turn is it
    turn.subscribe((t) => {
        whitesTurn = t
    })

    let ps;     // previously selected tile
    selected.subscribe((x) => {
        ps = x;
    })

    let brd;    // current board state 
    board.subscribe((b) => {
        brd = b;
    })

    function updateSelected(val) {
        if (val === null) {
            selected.update(() => null)
        } else {
            selected.update(() => val)
        }
    }

    function movePiece(ps, cs, className) {
        if(ps !== cs && !pieceColors.includes(className)) {
            board.update((b) => {
                const [w, x] = coords(ps)
                const [y, z] = coords(cs)
                if (isLegal(b, w, x, y, z)) {
                    b[y][z] = b[w][x]
                    b[w][x] = null
                    
                    b = removePiece(b, y, z)
                    
                    turn.update(t => !t)

                }
                return b
            })
        }
        updateSelected(null)
    }

    function selectPiece(className) {
        if (pieceColors.includes(className))
            updateSelected(pid)
    }

    function handleClick(e) {
        const cl = e.target.classList[0];
        if ((whitesTurn && cl === 'black') || (!whitesTurn && cl === 'white')) {
            return
        }

        if (ps !== null) {
            movePiece(ps, pid, cl)
        } else {
            selectPiece(cl)
        }
    }
</script>

<td 
  class={`${type} ${kingTile.includes(pid) ? 'corner' : ''} ${ps === pid ? 'border' : ''}`}
  pid={pid}
  on:click|preventDefault={handleClick}
>
  <slot />
</td>

<style>
    td {
        background-color: #BA7A3A;
        width: 70px;
        height:70px;
        min-width: 65px;
        min-height: 65px;
        text-align: center;
        border: 2px solid #BA7A3A;
    }

    .corner {
        background-color: #975717;
    }

    .border {
        border: 2px solid red;
        background-color: #975;
    }
</style>

