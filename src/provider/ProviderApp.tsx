
"use client"
import Motion from '@/app/_component/Motion'
import Navbar from '@/app/_component/NavBar'
import React, { FC,useEffect,useState } from 'react'

const ProviderApp: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme,setTheme] = useState("light")

    // useEffect(() => {
    //     if (theme === "light") {
    //         document.documentElement.classList.add("dark")
    //     } else {
    //         document.documentElement.classList.add("light")
    //     }
        
    // }, [theme])
    
    const ToggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
      console.log("omar")
    }
  return (
      <div>
      <Navbar ToggleTheme={ToggleTheme} />

      <div style={{marginTop:"65px"}}>
        <Motion>
          {children}
          </Motion>
      </div>
    </div>
  )
}

export default ProviderApp
