import React from 'react'
import './styles.css'

function Legends() {
  return (
    <>
      <div className='subtitle'>
        <div className='badge'>Legendas</div>
        <ul>
          <li>
            <span className='danger' /> Faltou
          </li>
          <li>
            <span className='alert' /> Ausente
          </li>
        </ul>
      </div>
    </>
  )
}

export default Legends
