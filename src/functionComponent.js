import React, { useState, useEffect } from "react";

export default function FunctionComponent() {
  const [field, setField] = useState("value");
  useEffect(() => {
    console.log("useEffectCalled function");
    return () => {
      console.log("callback called");
    };
  });

  return (
    <div>
      <button onClick={() => setField("another value")}>click me</button>
      {field}
    </div>
  );
}
