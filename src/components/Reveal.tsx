import React, { useEffect, useRef, useState, Children } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { EASE_OUT_EXPO, DURATION } from '@/lib/motion';

export type RevealDirection = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in milliseconds (kept as ms for backward compatibility). */
  delay?: number;
  /** When set with multiple children, each child animates in sequence. Seconds between children. */
  stagger?: number;
  direction?: RevealDirection;
  as?: keyof JSX.IntrinsicElements;
}

const hiddenFor = (dir: RevealDirection) => {
  switch (dir) {
    case 'left':
      return { opacity: 0, x: -48, y: 0, scale: 1 };
    case 'right':
      return { opacity: 0, x: 48, y: 0, scale: 1 };
    case 'scale':
      return { opacity: 0, x: 0, y: 0, scale: 0.96 };
    case 'up':
    default:
      return { opacity: 0, x: 0, y: 40, scale: 1 };
  }
};

const shown = { opacity: 1, x: 0, y: 0, scale: 1 };

const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  stagger,
  direction = 'up',
  as = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [reduced]);

  if (reduced) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = (motion as any)[as] ?? motion.div;
  const delaySec = (delay || 0) / 1000;
  const transition = {
    duration: DURATION.base + 0.1, // ~0.8s
    ease: [...EASE_OUT_EXPO] as [number, number, number, number],
  };

  // Staggered mode: wrap each direct child individually.
  if (stagger && stagger > 0) {
    const childArray = Children.toArray(children);
    const containerVariants: Variants = {
      hidden: {},
      show: {
        transition: {
          delayChildren: delaySec,
          staggerChildren: stagger,
        },
      },
    };
    const itemVariants: Variants = {
      hidden: hiddenFor(direction),
      show: { ...shown, transition },
    };
    return (
      <MotionTag
        ref={ref as any}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={visible ? 'show' : 'hidden'}
      >
        {childArray.map((child, i) => (
          <motion.div key={i} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref as any}
      className={className}
      initial={hiddenFor(direction)}
      animate={visible ? shown : hiddenFor(direction)}
      transition={{ ...transition, delay: delaySec }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
