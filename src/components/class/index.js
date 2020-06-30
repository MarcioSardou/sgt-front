/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react'
import './styles.css'
import Legends from '../legends'
import WeekDay from '../day'
import api from '../../services/api'

function Class() {
  const [classRoom, setClassRoom] = useState([])

  useEffect(() => {
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
          dias_semana
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
  }, [])

  return (
    <>
      <div className='wrapper-class'>
        <div className='wrap-date-legend'>
          <WeekDay />
          <Legends />
        </div>
        <div className='next-class'>
          <ul>
            <div className='mae'>
              <div className='filho'>Codigo</div>
              <div className='filho'>Disciplina</div>
              <div className='filho'>Professor</div>
              <div className='filho'>Sala</div>
              <div className='filho'>Horário</div>
            </div>

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
