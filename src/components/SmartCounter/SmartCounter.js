import {useState} from 'react';

function SmartCounter() {
// Retorna um vetor
// 1. Variavel Stateful
// 2. Função amarada a essa váriavel que atualiza esse valor

    const [quantity, upQuantity] = useState(1);


    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1)}>+</button>
        </>
    )
}

export default SmartCounter;