"use client" 

import React, { FC } from 'react'
import {motion} from "framer-motion"
const Motion:FC<{children:React.ReactNode}> = ({children}) => {
  return (
      <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ease:"easeInOut",duration:0.75}}
      >
      {children}
    </motion.div>
  )
}

export default Motion
