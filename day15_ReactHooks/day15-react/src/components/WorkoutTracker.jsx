import React, { useState } from "react";
import useTimer from "../hooks/useTimer";

export default function WorkoutTracker() {
  const [sets, setSets] = useState(0);
  const { seconds, start, stop, reset } = useTimer(0);

  const addSet = () => {
    setSets((s) => s + 1);
    reset(0);
    start();
  };

  return (
    <div className="card p-3 my-3">
      <h4>Workout Tracker</h4>
      <p>Sets completed: <strong>{sets}</strong></p>
      <p>Rest timer: {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}</p>
      <div>
        <button className="btn btn-success me-2" onClick={addSet}>
          Start
        </button>
        <button className="btn btn-warning me-2" onClick={stop}>
          Stop
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            reset(0);
            setSets(0);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
