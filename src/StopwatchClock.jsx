import { useState, useEffect } from 'react';

function StopwatchClock({ status }) {

  const [time, setTime] = useState("00:00:00");
  const [milliseconds, setMilliseconds] = useState("00");

  useEffect(() => {
    let interval = null;
    let millisecondsInterval = null;

    if (status === "start") {

      // for hours, minutes, and seconds
      interval = setInterval(() => {
        setTime((prevTime) => {
          const timeArray = prevTime.split(":");
          const hour = parseInt(timeArray[0]);
          const minute = parseInt(timeArray[1]);
          const second = parseInt(timeArray[2]);
          if (second < 59) {
            return `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${second + 1 < 10 ? "0" + (second + 1) : second + 1}`;
          } else if (minute < 59) {
            return `${hour < 10 ? "0" + hour : hour}:${minute + 1 < 10 ? "0" + (minute + 1) : minute + 1}:00`;
          } else {
            return `${hour + 1 < 10 ? "0" + (hour + 1) : hour + 1}:00:00`;
          }
        });
      }, 1000);

      // for milliseconds
      millisecondsInterval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => {
          if (parseInt(prevMilliseconds) < 99) {
            return parseInt(prevMilliseconds) + 1 < 10 ? "0" + (parseInt(prevMilliseconds) + 1) : (parseInt(prevMilliseconds) + 1).toString();
          } else {
            return "00";
          }
        });
      }, 10);


    } else if (status === "stop") {
      clearInterval(interval);
      clearInterval(millisecondsInterval);
      setTime("00:00:00");
      setMilliseconds("00");
    }

    return () => {
      clearInterval(interval);
      clearInterval(millisecondsInterval);
    }
  }, [status]);


  return (
    <div>
      <h1>{time}</h1>
      <h2>
        {milliseconds}
      </h2>
    </div>
  )
}

export default StopwatchClock;
