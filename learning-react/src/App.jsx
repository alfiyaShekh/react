import { useState } from 'react'
import './App.css'

function App() {

  // here counter is variable name and setCounter is method name
  const [counter,setCounter]=useState(1)
  


  const addvalue=()=>{
    if(counter<5){
    setCounter(counter+1)}
  }

  const decValue=()=>{
    if(counter>0){
    setCounter(counter-1)}
  }
  return (
    <>
      <h1>React course {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add Value</button>{" "}
      <button onClick={decValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
