import React from "react";

const ReactCounter = () => {
  let [counter, setCounter] = React.useState<number>(0);

  return (
    <>
      <div>This is a react component</div>

      <button
        className="g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => {
          setCounter(counter++);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
};

export default ReactCounter;
