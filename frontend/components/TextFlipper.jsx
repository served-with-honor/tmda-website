import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

export default function TextFlipper({ items, lineColor }) {
  const [currentItem, setCurrentItem] = useState(items[0]);
  
  useEffect(() => {
    const interval = setInterval(items => {
      setCurrentItem(previousItem => {
        const currentIndex = items.findIndex(a => a === previousItem);
        const isLastItem = currentIndex === items.length - 1;
        const newItem = isLastItem ? items[0] : items[currentIndex + 1];
        return newItem;
      });
    }, 2000, items);

    return () => clearInterval(interval);
  }, [items]);
  
  return items && items.length > 0 ? (
    <span style={{ position: 'relative' }}>
      {items.map((item, index) => (
        <Item
          key={`text-flipper-item-${index}`}
          isVisable={currentItem === item}
          text={item}
          lineColor={lineColor}
        />
      ))}
    </span>
   ) : null
}

const Item = ({ isVisable, text, lineColor }) => {
  return (
    <AnimatePresence>
      {isVisable && (
        <motion.span
          initial={{ opacity: 0, y: '-1em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: '1em' }}
          style={{
            position: 'absolute',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
        >
          {text}
          <Line color={lineColor} />
        </motion.span>
      )}
    </AnimatePresence>
  );
}

const Line = ({ color }) => (
  <motion.span
    style={{
      backgroundColor: color || 'currentColor',
      borderRadius: '1em',
      bottom: 0,
      left: 0,
      height: '0.125em',
      display: 'block',
      position: 'absolute',
    }}
    initial={{ width: '0%' }}
    animate={{ width: '100%' }}
  />
);