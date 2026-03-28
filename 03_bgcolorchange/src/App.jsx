import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {

   const [color,setColor]=useState('pink');
  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <>
     <div className='w-full h-screen duration-0 ' style={{backgroundColor:color}}>
         <div className=' fixed flex flex-wrap justify-center bottom-1.5 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={()=>setColor('red')} className='p-3 rounded-2xl bg-red-500'>Red</button>{" "}
              <button onClick={()=>setColor('green')} className='p-3 rounded-2xl bg-green-400'>Green</button>{" "}
              <button onClick={()=>setColor('blue')} className='p-3 rounded-2xl bg-blue-700'>blue</button>{" "}
          </div>
         </div>
     </div>
    </>
  )
}

export default App
