/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import './styles.css'
import Legends from '../legends'
import Date from '../date'
import api from '../../services/api'

function Class() {
  const [classRoom, setClassRoom] = useState([])

  api
    .post('/api', {
      query: `query{
    allClassRooms{
      edges{
        node {
          id,
          disciplina{
            id,
            nome,
            codigo
          },
          professor{
            id,
            nome
          },
          data,
          status,
          turno,
          turma,
          sala,
          horario
        }
      }
      totalCount
    }
  }`,
    })
    .then((res) => {
      setClassRoom(res.data.data.allClassRooms.edges.node)
    })
  useEffect(() => {}, [])

  return (
    <>
      <div className='wrapper-class'>
        <div className='wrap-date-legend'>
          <Date />
          <Legends />
        </div>
        <div className='next-class'>
          <ul>
            {classRoom.map((item) => (
              <li
                key={item.id}
                className={
                  item.status === 'confirmado'
                    ? ''
                    : item.status === 'faltou'
                    ? 'danger'
                    : 'warning'
                }
              >
                <div className='card-class'>
                  <ul className='card'>
                    <li>
                      <div className='subtitle'>Codigo</div>
                      <div className='value'>{item.disciplina.codigo}</div>
                    </li>
                    <li className='grand-values'>
                      <div className='subtitle'>Disciplina</div>
                      <div className='value'>{item.disciplina.nome}</div>
                    </li>
                    <li className='grand-values'>
                      <div className='subtitle'>Professor</div>
                      <div className='value'>{item.professor.nome}</div>
                    </li>
                    <li>
                      <div className='subtitle'>Sala</div>
                      <div className='value'>{item.sala}</div>
                    </li>
                    <li>
                      <div className='subtitle'>Horário</div>
                      <div className='value'>{item.horario}</div>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='classes' />
      </div>
    </>
  )
}

export default Class
