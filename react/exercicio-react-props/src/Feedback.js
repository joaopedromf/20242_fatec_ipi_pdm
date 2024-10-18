import React from 'react'

const Feedback = () => {
  return (
    <div className='d-flex justify-content-center gap-2 m-3'>
        <button type="button" className="btn btn-outline-primary">Aprovar</button>
        <button type="button" className="btn btn-outline-danger">Não aprovar</button>
    </div>
  )
}

export default Feedback