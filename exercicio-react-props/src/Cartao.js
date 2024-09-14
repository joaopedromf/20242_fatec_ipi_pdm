import React from 'react'

const Cartao = (props) => {
  return (
    <div className='card p-2'>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Cartao