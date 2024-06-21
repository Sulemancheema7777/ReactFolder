import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState();
  const passRef = useRef(null);

  const passwordGen = useCallback(()=>{
    let pass = '';
    let ingredients = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed) ingredients += '0123456789';
    if(charAllowed) ingredients += '@$%^&*!';

    for(let i=1;i<=length;i++){
      let index = Math.floor(Math.random()*ingredients.length+1);
      pass += ingredients.charAt(index);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(()=>{
    passwordGen();
  },[length,numberAllowed,charAllowed,passwordGen]);

  const copyPassword = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="password-container bg-black rounded-md shadow-md my-5 px-4 py-2 mx-auto max-w-3xl">
      <h1 className="text-white text-center mt-4 mb-2 text-3xl">Password Generator</h1>
      <div className="form-first flex justify-start align-middle">
        <input type="text" ref={passRef} value={password} readOnly placeholder="Password" className="border-none w-full outline-none p-3 rounded-l-md " />
        <button type="button"  onClick={copyPassword} className="border-none rounded-r-md outline-none p-3 bg-blue-600 text-white">Copy</button>
      </div>
       <div className="form-second flex justify-start align-middle gap-3 mt-3">

        <div className="flex justify-start align-middle gap-1">
          <input type="range" min="8" max="16" value={length} className="border-none rounded-md "
          onChange={(e)=> {setLength(e.target.value)}}/>
          <label className="text-white">Length:{length}</label>
        </div>
        <div className="flex justify-start align-middle gap-1"> 
          <input type="checkbox" defaultChecked={numberAllowed} className="border-none rounded-md "
          onChange={()=>setNumberAllowed((prev)=>!prev) }/>
          <label className="text-white">Numbers</label>
        </div>
        <div className="flex justify-start align-middle gap-1">
          <input type="checkbox" defaultChecked={charAllowed} className="border-none rounded-md "
          onChange={()=>setCharAllowed((prev)=>!prev) }/>
          <label className="text-white">Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
