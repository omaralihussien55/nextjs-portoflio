"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useState } from 'react'

const links = [{ href: "/", name: "Home" }, { href: "#services", name: "Services" }, { href: "#projects", name: "Projects" },
    {href:"#about",name:"About"},{href:"#contact",name:"Contact"}
]
const Navbar: FC<{ ToggleTheme: () => void }> = ({ ToggleTheme }) => {
  const [hidden,setHidden] = useState(false)
    const pathName = usePathname()

    const HandlePathName = (name:string) => {
        
    }

  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 left-0 z-50">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
   <h1 className='p-1 text-3xl font-extrabold text-primary_dark'>Omar</h1>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className={`${hidden?"hidden":""} md:block bg-teal-400 md:bg-transparent w-full mt-6`}>
       <ul className="flex items-center justify-center md:justify-start flex-col md:flex-row  text-sm">
        {
            links.map((item, idx) => {
                const containpath = pathName.slice(1)
                const IsActive = pathName.startsWith(item.href)
                return (
             <li key={idx} onClick={()=>HandlePathName(item.name)} className='mb-2 md:ml-2'>
            <a
              className={`${IsActive?"text-primary_dark":"text-gray-500 "} transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75`}
              href={item.href}
            >
              {item.name}
            </a>
          </li>
                )
           })                   
           }               
        
        </ul>
      </nav>

      <div className="flex items-center gap-4">
            <button
              onClick={()=> setHidden(!hidden)}
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
