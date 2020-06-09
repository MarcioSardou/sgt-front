import React from 'react'
import './styles.css'
import moment from 'moment'
import 'moment/min/locales';

function date() {
  let date = new Date()

  let dayName = moment(date).locale('pt-br').format('dddd');
  let monthName = moment(date).locale('pt-br').format('MMMM');
  let year = moment(date).locale('pt-br').format('Y');

  return (
    <>
      <div className='header'>
        <div className='box-day'>
          <h2>{ date.getDate() }</h2>
          <p>{dayName}</p>
          <small>{monthName}, {year}</small>
        </div>
      </div>
    </>
  )
}

export default date
