import React from "react";

const ReactCounter = () => {
  let [counter, setCounter] = React.useState<number>(1);

  return (
    <>
      <div>This is a react component</div>

      {counter}

      <button
        className="border  border-gray-700"
        onClick={() => {
          setCounter(counter++);
        }}
      >
        increment
      </button>
    </>
  );
};

export default ReactCounter;
