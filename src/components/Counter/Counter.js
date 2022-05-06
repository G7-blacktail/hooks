

function Counter() {

    let quantidade = 0;

    function upQuantidade(){
        quantidade = quantidade + 1;
        document.getElementById("Couter-Box").innerHTML = quantidade;
    }

    function downQuantidade(){
        if(quantidade > 0){
            quantidade = quantidade - 1;
            document.getElementById("Couter-Box").innerHTML = quantidade;
        }else {
            return;
         }
    }

    return(
        <>
            <h1 id="Couter-Box">{10}</h1>
            <button onClick={upQuantidade}>+</button>
            <button onClick={downQuantidade}>-</button>
        </>
    )
}

export default Counter;