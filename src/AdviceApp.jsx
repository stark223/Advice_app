import React, { useEffect } from "react";
import "./Advice.css";
import { useState } from "react";

const Adviceapp = () => {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      <Counter count={count} />
    </div>
  );

  function Counter(props) {
    return (
      <p>
        You have read <b>{props.count}</b> pieces of advice
      </p>
    );
  }
};

export default Adviceapp;
