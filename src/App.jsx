import StopwatchButton from "./StopwatchButton";
import StopwatchClock from "./StopwatchClock";
import { useState } from "react";
import "./App.css";

function App() {
  const [rootStatus, setRootStatus] = useState("stop");

  return (
    <>
      <div className="center-container">
        <div className="clock-container">
          <StopwatchClock status={rootStatus} />
        </div>
        <div className="button-container">
          <StopwatchButton setRootStatus={setRootStatus} />
        </div>
      </div>


    </>
  )
}

export default App
