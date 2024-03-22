import { useRef, useEffect } from 'react'
import { motion, animate, useMotionValue, useTransform, useInView } from 'framer-motion';

export default function Counter({ from = 0, to, duration = 1, delay = 0, decimals = 0, parentRef, animateOnce = false }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(latest));
  const ref = useRef(null);
  const inViewAll = useInView(parentRef || ref, { amount: 'all' });
  const inViewSome = useInView(parentRef || ref, { amount: 'some' });

  useEffect(() => {
    if (animateOnce) {
      animate(count, to, { duration, delay });
    } else {
      if (inViewAll) {
        animate(count, to, { duration, delay });
      } else if (!inViewSome) {
        count.set(0);
      }
    }
  }, [count, inViewAll, inViewSome, to, duration, animateOnce]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
