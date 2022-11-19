import React from "react";
import "./stopwatch.css";
import Header from '../../components/Header/header'
import TimerContainer from "./stopwatchContainer";
import { BsStopwatch , BsPlayCircle , BsPauseCircle , BsStopCircle } from "react-icons/bs";

function Stopwatch() {
  const { timer, timeStart, timeStop, timeReset , timeOff} = TimerContainer(0);

  let milisec = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
  let second = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
  let minute = ("0" + Math.floor((timer / 10) % 100)).slice(-2);
  return (
    <div className="stopwatch-body"> 
      <Header/>
      <div className="stopwatchController">
        <h2>ST<BsStopwatch className="icon-stopwatch"/>PWATCH</h2>
      <div className="stopwatch">
        <span>{milisec}:</span>
        <span>{second}:</span>
        <span>{minute}</span>
      </div>
      <div className="btnController">
      {!timeOff ? ( 
        <button className="start" onClick={timeStart}>
          <BsPlayCircle/>
        </button>
         ):(
        <button className="stop" onClick={timeStop}>
          <BsPauseCircle/>
        </button>
         )}
        <button className="reset" onClick={timeReset}>
          <BsStopCircle/>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Stopwatch