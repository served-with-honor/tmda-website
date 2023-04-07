import { useRef, useEffect } from 'react'
import { motion, animate, useMotionValue, useInView } from 'framer-motion';

export default function CircleFiller({
  radius = 150,
  percent = 100,
  stroke = 12,
  color = '#000',
  color2 = '#999',
  duration = 1,
  children
}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const circumference = 2 * Math.PI * radius;
  const offset = useMotionValue(circumference);
  const viewBox = (radius * 2) + stroke;
  const transform = `rotate(-90, ${radius}, ${radius})`;
  
  useEffect(() => {
    if (inView) {
      const amount = circumference - (circumference * (percent / 100));
      animate(offset, amount, { duration });
    } else {
      animate(offset, circumference, { druation: 0 });
    }
  }, [offset, inView]);

  return (
    <div ref={ref}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox={`-${stroke / 2} -${stroke / 2} ${viewBox} ${viewBox}`}
        width={viewBox}
        height={viewBox}
      >
        {color2 ? (
          <circle
            fill="none"
            stroke={color2}
            strokeWidth={stroke}
            cx={radius}
            cy={radius}
            r={radius}
            transform={transform}
          />
        ) : null}
        <motion.circle
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          stroke-dasharray={circumference}
          stroke-dashoffset={offset}
          strokeLinecap="round"
          cx={radius}
          cy={radius}
          r={radius}
          transform={transform}
        />
      </motion.svg>
      {children}
    </div>
  );
}
