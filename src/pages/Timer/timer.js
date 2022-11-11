import React from 'react'
import './timer.css'
import Header from '../../components/Header/header'
function timer() {
  return (
    <div className='timer-main'>
      <Header/>
      <h1 className='title-timer'>Timer</h1>

      <section className='timer-body'>
        <input type="text" placeholder="How many minutes?"/>
        <button type="submit" className='set-timer'>Set Timer</button>
        <p className='time'><span>00</span> : <span>00</span></p>
      </section>

      
      <section className='timer-body'>
        <div className='control-timer'>
          <button type="submit" className='start-timer'>Start</button>
          <button type="submit" className='stop-timer'>Stop</button>
          <button type="submit" className='clear-timer'>Clear</button>
        </div>
        <p className='time'><span>00</span> : <span>00</span></p>
      </section>
    </div>
  )
}

export default timer
