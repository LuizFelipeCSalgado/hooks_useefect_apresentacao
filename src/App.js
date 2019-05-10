import React, { useState } from "react";

import ClassComponent from "./classComponent";
import FunctionComponent from "./functionComponent";

function App() {
  const [classShouldRender, setClassShouldRender] = useState(true);
  const [functionShouldRender, setFunctionShouldRender] = useState(true);
  return (
    <div>
      <button onClick={() => setClassShouldRender(!classShouldRender)}>
        toggle
      </button>
      {classShouldRender ? <ClassComponent /> : null}

      <button onClick={() => setFunctionShouldRender(!functionShouldRender)}>
        toggle
      </button>
      {functionShouldRender ? <FunctionComponent /> : null}
    </div>
  );
}

export default App;
