import { useRef, useEffect } from 'react'
import { motion, animate, useMotionValue, useTransform, useInView } from 'framer-motion';

export default function Counter({ from = 0, to, duration = 1 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    } else {
      animate(count, from, { duration: 0 });
    }
  }, [count, inView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
