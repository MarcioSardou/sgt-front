import React, { useState, useEffect } from 'react'
import './styles.css'
import api from '../../services/api'

function WeekDay() {
  const [weekDay, setWeekDay] = useState([])

  useEffect(() => {
    api
      .post('/api', {
        query: `
        query{
          allClassRooms {
            edges {
              node {
                id
                dias_semana
              }
            }
          }
        }
      `,
      })
      .then((res) => setWeekDay(res.data.data.allClassRooms.edges.node))
  }, [])

  return (
    <>
      <div className='week-day'>SEGUNDA-FEIRA</div>
    </>
  )
}

export default WeekDay
