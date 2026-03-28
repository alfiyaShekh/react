import { useState,useCallback,useEffect} from 'react'

import './App.css'

function App() {
    
  const [length,setLength]=useState(8)
  const[numberAllow,setNumAllow]=useState(false)
  const[charAllow,setCharAllow]=useState(false)
  const [password,setPassword]=useState('')

  const generatePass=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*()_+"

    for(let i=1;i<length;i++){
      const char=Math.floor(Math.random()*str.length +1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllow,charAllow])

  useEffect(()=>{
    generatePass()
  },[length,numberAllow,charAllow])

  const copyPassToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
    
  }

  return (
    <>
       <div className='h-screen bg-black flex flex-wrap text-white justify-center align-top'>
          <div className='bg-blue-950 h-fit m-10 rounded-2xl p-5 flex flex-col justify-center items-center'>
            <h1 className='pb-2'>Password generator</h1>
            <div className='mb-5'>
               <input type="text" value={password} placeholder='Password'readOnly className='bg-white text-orange-400 p-1 rounded-s-md'></input>
               <button className='bg-blue-600 p-1 rounded-e-md cursor-pointer' onClick={copyPassToClipboard}>Copy</button>
            </div>
           
           <div className='flex gap-2.5 '>
            <input type="range" min={6} max={20} value={length}
            onChange={(e)=>{setLength(e.target.value)}}></input>
            <label>Length:{length}</label>
            <label><input type="checkbox" defaultChecked={numberAllow} onChange={()=>setNumAllow((prev)=>!prev)}/>Numbers</label>
            <label><input type="checkbox" defaultChecked={charAllow}   onChange={()=>setCharAllow((prev)=>!prev)}/>Characters</label>
           </div>

          </div>
       </div>
    </>
  )
}

export default App
