import { useState, useRef } from "react";
const StopwatchContainer = () => {
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimrOn] = useState(false);
  const [timeOff, setTimeOff] = useState(false);
  const interval = useRef(null);

  const timeStart = () => {
    setTimrOn(true);
    setTimeOff(true);
    interval.current = setInterval(() => {
      setTimer((prevtime) => prevtime + 10);
    }, 10);
  };

  const timeStop = () => {
    clearInterval(interval.current);
    setTimeOff(false);
  };

  const timeReset = () => {
    clearInterval(interval.current);
    setTimrOn(false);
    setTimeOff(false);
    setTimer(0);
  };

  return {
    timer,
    timerOn,
    timeOff,
    timeStart,
    timeStop,
    timeReset,
  };
};

export default StopwatchContainer;;