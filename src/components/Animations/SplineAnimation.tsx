import Spline, { SPEObject } from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

import type { Application } from '@splinetool/runtime';
import { useInView } from 'framer-motion';

interface SplineAnimationProps {
  splineUrl: string;
  objectName: string;
  offset?: number;
}

export function SplineAnimation({
  splineUrl,
  offset = 0.5,
  objectName,
}: SplineAnimationProps) {
  const refAnimationContainer = useRef<HTMLDivElement>(null);

  const isInView = useInView(refAnimationContainer, {
    once: false,
    amount: offset,
  });

  const item = useRef<SPEObject | undefined>();

  const onLoad = (spline: Application) => {
    const obj = spline.findObjectByName(objectName);
    item.current = obj;
  };

  const rotateFront = () => {
    item.current?.emitEvent('keyDown');
  };

  const rotateBack = () => {
    item.current?.emitEventReverse('keyDown');
  };

  useEffect(() => {
    isInView ? rotateFront() : rotateBack();
  }, [isInView]);

  return (
    <div
      className='bg-gradient-to-tr from-primary-200 to-primary-600 rounded-xl '
      ref={refAnimationContainer}
    >
      <Spline onLoad={onLoad} scene={splineUrl} />
    </div>
  );
}
