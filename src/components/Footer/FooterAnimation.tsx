'use client';

import React, { useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { getRandomArrayKeys, getRandomInInterval } from '@/utilities/helper';

const DOTS_COUNT = 15;

const useBoundedAnimation = (
  containerWidth: number,
  containerHeight: number,
  index: number
) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateMotion = async () => {
      while (true) {
        const xTarget = Math.random() * (containerWidth - 24);
        const yTarget = Math.random() * (containerHeight - 24);

        await controls.start({
          x: xTarget,
          y: yTarget,
          transition: {
            type: 'spring',
            stiffness: 10,
            damping: 10,
            mass: 1 + Math.random(),
            velocity: 5,
          },
        });

        // Random pause between 0.5 and 2 seconds
        await new Promise((resolve) =>
          setTimeout(resolve, 500 + Math.random() * 2500)
        );
      }
    };

    animateMotion();
  }, [controls, containerWidth, containerHeight, index]);

  return controls;
};

const Dot = ({
  containerWidth,
  containerHeight,
  index,
}: {
  containerWidth: number;
  containerHeight: number;
  index: number;
}) => {
  const controls = useBoundedAnimation(containerWidth, containerHeight, index);
  const randomSize = getRandomInInterval(12, 96);
  const randomOpacityClass = 'opacity-' + getRandomArrayKeys([40, 50, 80]);
  return (
    <motion.div
      className={`absolute bg-primary-100 ${randomOpacityClass}`}
      style={{
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        borderRadius: '50%',
      }}
      animate={controls}
      initial={{
        x: Math.random() * (containerWidth - 24),
        y: Math.random() * (containerHeight - 24),
      }}
    />
  );
};

export default function Component(
  props: React.ComponentPropsWithoutRef<'div'>
) {
  const { className = '' } = props;
  const [containerSize, setContainerSize] = useState({
    width: 300,
    height: 200,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className={` ${className} z-0`}>
      <div
        ref={containerRef}
        className={`relative w-full h-64 rounded-lg`}
        aria-label='Container with bouncing green dots'
      >
        {[...Array(DOTS_COUNT)].map((_, index) => (
          <Dot
            key={index}
            containerWidth={containerSize.width}
            containerHeight={containerSize.height}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
