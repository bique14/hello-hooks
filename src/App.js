import React, { useState } from "react";
import UseStateExample from "./UseStateExample";
import StateExample from "./StateExample";

function App() {
  return (
    <div className="h-full flex flex-row justify-around bg-gray-800">
      <UseStateExample />
      <StateExample />
    </div>
  );
}

export default App;
