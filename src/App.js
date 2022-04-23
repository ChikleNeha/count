import React from "react";
import "./style.css";

export default function App() {

  const [count, setCount] = React.useState(0)

  function add(){
    setCount(count + 1)
  }
  function remove(){
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={add}>+</button>
      <h1>{count}</h1>
      <button onClick={remove}>-</button>
    </div>
  );
}
