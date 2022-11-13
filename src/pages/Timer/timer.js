import React, {useState} from 'react'
import './timer.css'
import Header from '../../components/Header/header'
function Timer() {
  const [time,setTime] = useState(false);
  const [minute , setMinute] = useState(0);
  const [seconds , setSeconds] = useState(0);

  const timerHandler =() =>{
    setTime(!time);
  }
  const extra_styles = (start_timer) => {
    if (start_timer) {
        return {
          backgroundColor: "#2ED573" 
        };
    }
    else {
        return {}
    }
  }

  return (
    <div className='timer-main'  style={extra_styles(time)}>
      <Header/>
      <h1 className='title-timer'>Timer</h1>

      {!time ? ( 
        <section className='timer-body'>
          <input type="text" placeholder="How many minutes?"/>
          <button type="submit" className='set-timer'  onClick={timerHandler}>Set Timer</button>
          <p className='time'><span>00</span> : <span>00</span></p>
        </section>
      ):( 
        <section className='timer-body'>
          <p className='time'><span>00</span> : <span>00</span></p>
          <div className='control-timer'>
            <button type="submit" className='start-timer'>Start</button>
            <button type="submit" className='stop-timer'>Stop</button>
            <button type="submit" className='clear-timer' onClick={timerHandler}>Clear</button>
          </div>
        </section>
      )}
     
    </div>
  )
}

export default Timer
