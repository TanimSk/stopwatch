import { useState } from 'react';

function StopwatchButton({ setRootStatus }) {
  const [status, setStatus] = useState("Start");

  const handleClick = () => {
    if (status === "Start") {
      setStatus("Stop");
      setRootStatus("start");
    } else {
      setStatus("Start");
      setRootStatus("stop");
    }
  }

  return (
    <button onClick={handleClick}>
      {status}
    </button>
  )
}

export default StopwatchButton;
