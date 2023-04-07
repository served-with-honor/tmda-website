import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Thingy({ children }) {
  const ref = useRef(null);
	const [dims, setDims] = useState(null);
  
  useEffect(() => {
    if (ref.current) setDims({
      height: ref.current.clientHeight,
      width: ref.current.clientidth,
    });
  }, [ref]);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden',  }}>
      <div>
        {/* <Shape /> */}
      </div>
      {children}
    </div>
  )
}

const Shape = () => {
  
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      width="100"
      height="100"

      animate={{
        opacity: [0, 1],
        scale: [1, 2],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        repeatType: 'reverse',
      }}
    >
      <motion.path
        style="fill:#263C7F;"
        d="M91.5,41.5h-33v-33C58.5,3.8,54.7,0,50,0c-4.7,0-8.5,3.8-8.5,8.5v33h-33C3.8,41.5,0,45.3,0,50 c0,4.7,3.8,8.5,8.5,8.5h33v33c0,4.7,3.8,8.5,8.5,8.5c4.7,0,8.5-3.8,8.5-8.5v-33h33c4.7,0,8.5-3.8,8.5-8.5 C100,45.3,96.2,41.5,91.5,41.5z"
      />
    </motion.svg>
  );
}
