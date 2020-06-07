import React from 'react'
import 'normalize.css'
import './styles.css'
import Date from '../../components/date'
import Class from '../../components/class'

export default function Main() {
  return (
    <>
      <div className='wrapper'>
        <Date />
        <Class />
      </div>
    </>
  )
}
