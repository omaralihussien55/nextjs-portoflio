import React from 'react'

const GlobalSectionTitle:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='my-3 p-1'>
          <h2 className='p-2 text-center font-extrabold text-primary_dark text-2xl'>{children}</h2>
    </div>
  )
}

export default GlobalSectionTitle
