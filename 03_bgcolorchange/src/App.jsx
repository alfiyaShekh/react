import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {


  return (
    <>
      <h1 className='text-3xl bg-green-500 p-2'>Vite with Tailwind</h1>
      <Card username="alfiya" post="Manager" url="https://images.pexels.com/photos/7803385/pexels-photo-7803385.jpeg"/>
      <Card post="CEO"/>
      <Card />
    </>
  )
}

export default App
