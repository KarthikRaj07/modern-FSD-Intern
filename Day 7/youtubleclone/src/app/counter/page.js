"use client";
import { useState } from "react";

const Counter = () => {
  const [val, setVal] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{val}</p>
      <div>
        <button onClick={() => setVal(val + 1)}>Incre</button>
        <button onClick={() => setVal(val - 1)}>Decre</button>
      </div>
    </div>
  );
};

export default Counter;
