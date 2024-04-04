import { useRef, useEffect } from 'react'
import { motion, animate, useMotionValue, useInView } from 'framer-motion';

export default function CircleFiller({
  radius = 150,
  percent = 100,
  stroke = 12,
  color = '#000',
  color2 = '#999',
  duration = 1,
  parentRef,
  animateOnce = false,
  children
}) {
  const ref = useRef(null);
  const inViewAll = useInView(parentRef || ref, { amount: 'all' });
  const inViewSome = useInView(parentRef || ref, { amount: 'some' });
  const circumference = 2 * Math.PI * radius;
  const offset = useMotionValue(circumference);
  const viewBox = (radius * 2) + stroke;
  const transform = `rotate(-90, ${radius}, ${radius})`;
  
  useEffect(() => {
    const amount = circumference - (circumference * (percent / 100));
    if (animateOnce) {
      animate(offset, amount, { duration });
    } else {
      if (inViewAll) {
        animate(offset, amount, { duration });
      } else if (!inViewSome) {
        offset.set(circumference);
      }
    }
  }, [offset, inViewAll, inViewSome, percent, animateOnce]);

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
          strokeDasharray={circumference}
          strokeDashoffset={offset}
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
