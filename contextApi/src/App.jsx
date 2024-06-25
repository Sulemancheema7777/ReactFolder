import './App.css'
import ModeSwitcher from './components/ModeSwitcher/ModeSwitcher'
import Card from './components/Card/Card'
import { useEffect, useState } from 'react'
import { ModeSwitcherProvider } from './contexts/theme'

function App() {
  const [modeTheme,setModeTheme] = useState("light");

  const modeLight = ()=>{
    setModeTheme("light");
  }
  const modeDark = ()=>{
    setModeTheme("dark");
  }

  //changing the class in the html tag
  useEffect(()=>{
    let html = document.querySelector("html");
    html.classList.remove("dark","light");
    html.classList.add(modeTheme);
  },[modeTheme]);

  return (
    <ModeSwitcherProvider value={{modeTheme,modeLight,modeDark}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ModeSwitcher />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ModeSwitcherProvider>
  )
}

export default App
