import { useState } from 'react'
import './App.css'

function App() {
  
  let counter=15

  const addvalue=()=>{
    counter=counter+1
    console.log(counter);
    
  }
  return (
    <>
      <h1>React course {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add Value</button>{" "}
      <button>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
