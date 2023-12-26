import React, { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  // interview question agr count ko 4 baar likh de toh kya 
  // hoga => so jitne baar likhenge vo utne time add hokr aygega
  // like 4 baar likha h toh 4 print hoga

  let add = () => {
    console.log("added")
    if (count < 20) setCount(add => (add + 1))
    if (count < 20) setCount(add => (add + 1))
    if (count < 20) setCount(add => (add + 1))
    if (count < 20) setCount(add => (add + 1))
  }

  let remove = () => {
    console.log("removed")
    if (count > 0) setCount(remove => remove - 1)
  }

  return (
    <div>
      <h1>lets Count the value {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default App
