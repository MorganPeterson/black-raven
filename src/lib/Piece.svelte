<script>
    export let pid = 0;

    let king = false;
    let color = 'black';

    const type = parseInt(pid)
    
    if (type > 7) {
        if (type === 10) {
            color = 'white king'
        } else {
            color = 'white'
        }
    }
</script>

<div class={color} id={pid}></div>

<style>
    .black {
        width: 20px;
        height: 20px;
        padding: 12px;
        margin: 12px;
        background-color: black;
        border: 1px solid white;
        border-radius: 50px;
    }

    .white {
        width: 20px;
        height: 20px;
        padding: 12px;
        margin: 12px;
        background-color: white;
        border: 1px solid black;
        border-radius: 50px;
    }

    .king {
        background-color: grey;
        color: white;
        font-size: 1.5rem;
    }
</style>
