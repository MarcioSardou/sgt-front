import React, { useState, useEffect } from 'react'
import './styles.css'
import Legends from '../legends'
import api from '../../services/api'

function Class() {

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    let date = new Date()

    api
    .post('/api', {
      query: `query{
        allClassRooms(date: "${date.toISOString().split('T')[0]}"){
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
    }).then( res => {
      setClasses(res.data.data.allClassRooms.edges.node);
    });

  }, []);

  return (
    <>
      <div className='wrapper-class'>
        <Legends />
        <div className='next-class'>
          <ul>
            {
              classes.map(classes => (
                <li key={classes.id} className={
                  classes.status === 'confirmado' ? ''
                                                  : (classes.status === 'faltou' ? 'danger' : 'warning')
                }>
                  <div className='card-class'>
                    <ul className='card'>
                      <li>
                        <div className='subtitle'>Codigo</div>
                        <div className='value'>{classes.disciplina.codigo}</div>
                      </li>
                      <li className='grand-values'>
                        <div className='subtitle'>Disciplina</div>
                        <div className='value'>{classes.disciplina.nome}</div>
                      </li>
                      <li className='grand-values'>
                        <div className='subtitle'>Professor</div>
                        <div className='value'>{classes.professor.nome}</div>
                      </li>
                      <li>
                        <div className='subtitle'>Sala</div>
                        <div className='value'>{classes.sala}</div>
                      </li>
                      <li>
                        <div className='subtitle'>Horário</div>
                        <div className='value'>{classes.horario}</div>
                      </li>
                    </ul>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='classes' />
      </div>
    </>
  )
}

export default Class
