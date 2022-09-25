<script>
    import Tile from './Tile.svelte'
    import Piece from './Piece.svelte';
    import { board } from './store';

    let boardValue;
    board.subscribe(value => {
        boardValue = value
    })

    let pid = 0;
    function getTilePid(x, y) {
        pid = (x*7) + y
        return pid
    }

</script>

<table>
    {#each boardValue as v, i}
        <tr>
        {#each v as x, j}
            {#if x !== null}
                <Tile pid={getTilePid(i, j)}><Piece pid={x}></Piece></Tile>
            {:else}
                <Tile pid={getTilePid(i, j)}></Tile>
            {/if}
        {/each}
        </tr>
    {/each}
</table>

