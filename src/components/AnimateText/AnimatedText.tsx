import React, { Children, ReactNode, useEffect } from 'react';

import {
  MotionValue,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

interface AnimTextItemProps {
  children: string;
}

interface AnimTextProps {
  children: ReactNode;
  delay?: number;
}

function AnimatedTextItem({ children }: AnimTextItemProps): JSX.Element {
  return <>{children}</>;
}

function AnimatedText({ children, delay = 0 }: AnimTextProps): JSX.Element {
  const textIndex: MotionValue<number> = useMotionValue(0);
  const texts: string[] = Children.toArray(children)
    .filter(
      (child): child is React.ReactElement<AnimTextItemProps> =>
        React.isValidElement(child) && child.type === AnimatedTextItem
    )
    .map((child) => child.props.children);

  const baseText: MotionValue<string> = useTransform(
    textIndex,
    (latest) => texts[latest] || ''
  );
  const count: MotionValue<number> = useMotionValue(0);
  const rounded: MotionValue<number> = useTransform(count, (latest) =>
    Math.round(latest)
  );
  const displayText: MotionValue<string> = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound: MotionValue<boolean> = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, delay, textIndex, texts.length, updatedThisRound]);

  return <motion.span className='inline'>{displayText}</motion.span>;
}

export { AnimatedText, AnimatedTextItem };
