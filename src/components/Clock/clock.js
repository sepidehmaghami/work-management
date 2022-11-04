import React, { useState} from "react";
import "./clock.css";
import moment from "jalali-moment";

function Clock() {

  let time = new Date().toLocaleTimeString();
  let [currentTime, settime] = useState(time);

  let date = new Date().toLocaleDateString();
  let [currentDate, setdate] = useState(date);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    settime(time);
    let date = new Date().toLocaleDateString();
    setdate(date);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <div className="main">
        <p className="clock">
          {currentTime}
        </p>
        <p className="date">
          {moment({ currentDate }).locale("fa").format("YYYY/M/D")}
        </p>
      </div>
    </>
  );
}

export default Clock;
