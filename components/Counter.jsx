import { useRef, useEffect } from 'react'
import { motion, animate, useMotionValue, useTransform, useInView } from 'framer-motion';

export default function Counter({ from = 0, to, duration = 1, parentRef }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(latest));
  const ref = useRef(null);
  const inViewAll = useInView(parentRef || ref, { amount: 'all' });
  const inViewSome = useInView(parentRef || ref, { amount: 'some' });

  useEffect(() => {
    if (inViewAll) {
      animate(count, to, { duration });
    } else if (!inViewSome) {
      count.set(0);
    }
  }, [count, inViewAll, inViewSome, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
