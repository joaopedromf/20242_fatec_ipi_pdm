import React from 'react'

const Comentario = (props) => {
  return (
      <div className='d-flex shadow p-2'>
        <div style={{minWidth: 190, width: 100}}>
            <img src={props.foto} alt="" className='w-100'/>
        </div>
        <div className='ms-3'>
            <h2 className='card-title border-bottom'>{props.nome}</h2>
            <p className='card-text'>
              {props.comentario}
            </p>
            <span className='text-muted'>{props.dataHora}</span>
        </div>
      </div>
  )
}

export default Comentario