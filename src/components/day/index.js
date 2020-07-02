import React, { useState, useEffect } from 'react'
import './styles.css'

function WeekDay() {
  const [weekDay, setWeekDay] = useState([])
  const [day, setDay] = useState([])

  useEffect(() => {
    setWeekDay(new Date().toLocaleDateString('pt-BR', { weekday: 'long' }))
    setDay(new Date().toLocaleDateString('pt-BR'))
  }, [])

  return (
    <>
      <div className="content-day">
        <div className='week-day'>{weekDay}</div>
        <div className='date'>{day}</div>
      </div>
    </>
  )
}

export default WeekDay
