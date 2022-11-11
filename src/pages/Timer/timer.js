import React from 'react'
import './timer.css'
import Header from '../../components/Header/header'
function timer() {
  return (
    <div className='timer-main'>
      <Header/>
      <section className='timer-body'>
        <h1>Timer</h1>
        <input type="text" placeholder="How many minutes?"/>
        <button type="submit">Set Timer</button>
      </section>
    </div>
  )
}

export default timer
