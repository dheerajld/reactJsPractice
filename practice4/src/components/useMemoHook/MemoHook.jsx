import React, { useMemo, useState } from "react";

export const MemoHook = () => {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState("");
  function showNumber(num) {
    for (let i = 0; i < num; i++) {
      console.log(i);
    }
  }

  useMemo(() => {
    showNumber(10000);
  }, [count]);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <h1>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Count
          </button>
        </h1>
      </div>
      <div>
        <h1>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </h1>
        <h1>Show Data : {input}</h1>
      </div>
    </>
  );
};
