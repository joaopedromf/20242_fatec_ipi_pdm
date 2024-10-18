import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaComentarios from "./ListaComentarios";
import Cartao from "./Cartao";
import Comentario from "./Comentario";
import Feedback from "./Feedback";
import foto1 from "./assets/foto1.png"
import foto2 from "./assets/foto2.png"
import foto3 from "./assets/foto3.png"

const App = () => {
    return (
        <ListaComentarios>
            <Cartao>
                <Comentario 
                    foto={foto1}
                    nome="Mary.Lockman69"
                    comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet eu nibh at vehicula. Praesent mollis ut sem nec dictum. Nulla sollicitudin pretium nisi, at accumsan odio porttitor et. Ut suscipit, arcu et pharetra eleifend, diam purus tincidunt lacus."
                    dataHora="6:52:40 PM"
                />
                <Feedback />
            </Cartao>
            <Cartao>
                <Comentario 
                    foto={foto2}
                    nome="Brock_Reichel18"
                    comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet eu nibh at vehicula. Praesent mollis ut sem nec dictum. Nulla sollicitudin pretium nisi, at accumsan odio porttitor et."
                    dataHora="6:52:40 PM"
                />
                <Feedback />
            </Cartao>
            <Cartao>
                <Comentario 
                    foto={foto3}
                    nome="Nils_Steuber"
                    comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet eu nibh at vehicula. Praesent mollis ut sem nec dictum."
                    dataHora="6:52:40 PM"
                />
                <Feedback />
            </Cartao>
        </ListaComentarios>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)