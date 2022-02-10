import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(`New value of count: ${count}`);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(`New value of count: ${count}`);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button
          className="btn btn-primary mx-3"
          type="button"
          onClick={increment}
        >
          Increment
        </button>
        <button className="btn btn-primary" type="button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
