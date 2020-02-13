import React, { useState } from 'react';

function Counter1(props) {

  const [counter, setCount] = useState(props.init);

  const inc = () => {
    debugger;
    setCount(counter + 1)
  }

  const dec = () => {
    setCount(counter - 1)
  }

  return (
    <div>
      <button
        onClick={dec}
      >-</button>

      <input type="text" value={counter} ></input>

      <button onClick={inc}>+</button>
    </div>);
}

export default Counter1;