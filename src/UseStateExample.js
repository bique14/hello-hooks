import React, { useState } from "react";
import CodeExample from "./CodeExample";

const code = `function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="text-white text-center bg-gray-600 rounded w-2/5 p-4 m-auto overflow-auto"
      style={{ height: "70%" }}
    >
      <h1 className="font-bold text-4xl">useState</h1>
      <p>You click {count} times</p>
      <button
        className="rounded bg-white text-black px-2 py-1 my-2 w-full"
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>
    </div>
  );
}`;

function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="text-white text-center bg-gray-600 rounded w-2/5 p-4 m-auto overflow-auto"
      style={{ height: "70%" }}
    >
      <h1 className="font-bold text-4xl">useState</h1>
      <p>You click {count} times</p>
      <button
        className="rounded bg-white text-black px-2 py-1 my-2 w-full"
        onClick={() => setCount(count + 1)}
      >
        click me
      </button>
      <CodeExample code={code} />
    </div>
  );
}

export default UseStateExample;
