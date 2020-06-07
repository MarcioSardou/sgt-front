import React from 'react'
import './styles.css'
import Legends from '../legends'

function Class() {
  return (
    <>
      <div className='wrapper-class'>
        <Legends />
        <div className='next-class'>
          <ul>
            <li>
              <div className='card-class'>
                <ul className='card'>
                  <li>
                    <div className='subtitle'>Codigo</div>
                    <div className='value'>CCT007</div>
                  </li>
                  <li className='grand-values'>
                    <div className='subtitle'>Disciplina</div>
                    <div className='value'>
                      Linguagem procedural para banco de dados
                    </div>
                  </li>
                  <li className='grand-values'>
                    <div className='subtitle'>Professor</div>
                    <div className='value'>Messala Pires Reis</div>
                  </li>
                  <li>
                    <div className='subtitle'>Sala</div>
                    <div className='value'>203A</div>
                  </li>
                  <li>
                    <div className='subtitle'>Horário</div>
                    <div className='value'>19:00 - 19:50</div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='danger'>
              <div className='card-class'>
                <ul className='card'>
                  <li>
                    <div className='subtitle'>Codigo</div>
                    <div className='value'>CCT007</div>
                  </li>
                  <li className='grand-values'>
                    <div className='subtitle'>Disciplina</div>
                    <div className='value'>
                      Linguagem procedural para banco de dados
                    </div>
                  </li>
                  <li className='grand-values'>
                    <div className='subtitle'>Professor</div>
                    <div className='value'>Messala Pires Reis</div>
                  </li>
                  <li>
                    <div className='subtitle'>Sala</div>
                    <div className='value'>203A</div>
                  </li>
                  <li>
                    <div className='subtitle'>Horário</div>
                    <div className='value'>19:00 - 19:50</div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='warning'>
              <div className='card-class'>
                <ul className='card'>
                  <li>
                    <div className='subtitle'>Codigo</div>
                    <div className='value'>CCT007</div>
                  </li>
                  <li className='grand-values'>
                    <div className='subtitle'>Disciplina</div>
                    <div className='value grand-values'>
                      Matematica computacional
                    </div>
                  </li>
                  <li className='grand-values'>
                    <div className='subtitle'>Professor</div>
                    <div className='value grand-values'>
                      Rodrigo Ribeiro Rodrigues Barreto
                    </div>
                  </li>
                  <li>
                    <div className='subtitle'>Sala</div>
                    <div className='value'>203A</div>
                  </li>
                  <li>
                    <div className='subtitle'>Horário</div>
                    <div className='value'>19:00 - 19:50</div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className='classes' />
      </div>
    </>
  )
}

export default Class
