import React, { useState, useEffect } from 'react'
import './styles.css'

function WeekDay() {
  const [weekDay, setWeekDay] = useState([])
  useEffect(() => {
    setWeekDay(new Date().toLocaleDateString('pt-BR', { weekday: 'long' }))
  }, [])

  return (
    <>
      <div className='week-day'>{weekDay}</div>
    </>
  )
}

export default WeekDay
