import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import imagemDoutor1 from './images/doutor-1.jpg';

const App = () => {
    const estilosPrimeiroElemento = () => {
        return {
            margin: 'auto',
            padding: 12,
            width: 1280,
            backgroundColor: '#EEE',
            border: '1px solid black',
            borderRadius: 8,
            fontSize: 10,
            textAlign: 'center'
        }
    }

    const nomesMedicos = {
        medico1: 'José da Silva',
        medico2: 'Maria da Silva',
        medico3: 'Jaqueline Mendes'
    }

    return (
        <div style={estilosPrimeiroElemento()}>
            <h1>Profissionais de saúde</h1>
            <div style={{padding: 10, border: '1px solid #e5e5e5', borderRadius: 8, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div className='estilos-terceiro-elemento'>
                    <img src={imagemDoutor1} alt="" />
                    <p>{nomesMedicos.medico1}</p>
                </div>
                <div className='estilos-terceiro-elemento'>
                    <img src={process.env.PUBLIC_URL+'doutor-2.jpg'} alt="" />
                    <p>{nomesMedicos.medico2}</p>
                </div>
                <div className='estilos-terceiro-elemento'>
                    <img src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80%27/" alt="" />
                    <p>{nomesMedicos.medico3}</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);