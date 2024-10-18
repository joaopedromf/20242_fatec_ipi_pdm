import React from "react";
import ReactDOM from "react-dom";

//1. Um componente pode ser definido por meio de uma função Javascript que devolve a expressão JSX.

//2. Um componente pode ser definido por meio de uma classe Javascript que define uma função chamada render que, por sua vez, devolve a expressão JSX.

//1. Definir um componente React, chamado PrimeiroNome, que devolve um p com o seu primeiro nome.

const PrimeiroNome = () => {
    return <p>João Pedro</p>
}

//2. Definir um componente React, chamado Sobrenome, que devolve um p com o seu sobrenome.

const Sobrenome = () => {
    return <p>Martins</p>
}

//3. Fazer com que o componente App utilize ambos como filhos de um div raiz.

const App = () => {
    return <div>
        <PrimeiroNome/>
        <Sobrenome/>
    </div>
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);