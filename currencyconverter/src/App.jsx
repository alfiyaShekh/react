import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat blur-[2px]"
        style={{backgroundImage:`url(https://images.pexels.com/photos/29521831/pexels-photo-29521831.jpeg)`}}>
          
      </div>
    </>
  )
}

export default App
