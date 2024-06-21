import { useState } from 'react'
import './App.css'

function App() {
let [color,setColor] = useState('green');

  return (
    
      <div className="main-container w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="outer-bar fixed flex flex-wrap justify-center bottom-12 w-full">
          <div className="inner-bar bg-white rounded-3xl flex flex-wrap justify-center gap-3 p-3">
            <button className="red rounded-3xl px-3 py-1" style={{backgroundColor:'red'}}
            onClick={()=>setColor('red')}>
              Red
            </button>
            <button className="green rounded-3xl px-3 py-1" style={{backgroundColor:'green'}}
            onClick={()=>setColor('green')}>
              Green
            </button>
            <button className="yellow rounded-3xl px-3 py-1" style={{backgroundColor:'yellow'}}
            onClick={()=>setColor('yellow')}>
              Yellow
            </button>
            <button className="blue rounded-3xl px-3 py-1" style={{backgroundColor:'blue'}}
            onClick={()=>setColor('blue')}>
              Blue
            </button>
            <button className="orange rounded-3xl px-3 py-1" style={{backgroundColor:'orange'}}
            onClick={()=>setColor('orange')}>
              Orange
            </button>
            <button className="purple rounded-3xl px-3 py-1" style={{backgroundColor:'purple'}}
            onClick={()=>setColor('purple')}>
              Purple
            </button>
          </div>
          
        </div>
      </div>
  )
}

export default App
