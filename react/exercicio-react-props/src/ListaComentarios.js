import React from 'react'

const ListaComentarios = (props) => {
  return (
    <div className='container border mt-2 py-5'>
        {props.children}
    </div>
  )
}

export default ListaComentarios