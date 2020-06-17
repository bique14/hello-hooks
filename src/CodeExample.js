import React from "react";

function CodeExample({ code }) {
  return (
    <div className="bg-black rounded text-green-400 mt-4">
      <pre className="overflow-auto text-left p-2 " style={{ fontSize: "8px" }}>
        {code}
      </pre>
    </div>
  );
}

export default CodeExample;
