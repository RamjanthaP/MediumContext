'use client';

import { RefObject, useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { BaseLink } from '@/types/common';
import { BaseProps } from '@/types/props';

import { scrollToTarget } from '@/utilities/helper';

import Button from '../Button/Button';
import { Container } from '../Layout/Container';
import Styles from './animated-header.module.css';

interface AnimatedHeaderProps extends BaseProps {
  title: string;
  topActionButton?: BaseLink;
  svgAnimation: {
    height: number;
    src: string;
    width: number;
  };
}

const AnimateHeader = ({
  title,
  topActionButton,
  className = '',
  svgAnimation,
}: AnimatedHeaderProps) => {
  const svgContainerRef = useRef<HTMLObjectElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const router = useRouter();
  const navigateTo = (url: string) => {
    router.push(url);
  };
  useEffect(() => {
    setTimeout(() => {
      const target = getSvgaPlayer(svgContainerRef);

      if (target?.svgatorPlayer) {
        target?.svgatorPlayer.ready(() => {
          startAnimationAndScrollToTarget(target.svgatorPlayer, titleRef);
        });
      } else {
        throw new Error('The player cannot be found');
      }
    }, 100);
  }, [svgContainerRef?.current?.contentDocument]);

  return (
    <div className={`pb-8 ${Styles.root} ${Styles.background} ${className}`}>
      <div className='h-[calc(100vh-300px)] flex justify-center items-center'>
        <object
          type='image/svg+xml'
          ref={svgContainerRef}
          data={svgAnimation.src}
          className='w-full h-full'
        >
          svg-animation
        </object>
      </div>
      <Container>
        <div className='w-1/2'>
          {topActionButton && (
            <Button
              variant='default'
              transparent
              size='small'
              href={topActionButton.url}
              onClick={() => navigateTo(topActionButton.url)}
            >
              <ArrowLeftIcon scale='4' className='w-3 h-3 mr-1' />
              {topActionButton.text}
            </Button>
          )}
          <h1
            ref={titleRef}
            className='text-Jumbo/sm md:text-Jumbo/lg font-bold transition-all mt-4'
          >
            {title}
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default AnimateHeader;

const startAnimationAndScrollToTarget = function (
  player: any,
  target: RefObject<HTMLElement>
) {
  if (!player?.ready) {
    throw new Error('The player is not ready');
  }
  if (!target?.current) {
    throw new Error('titleRef.current is null');
  }

  player.restart(); // play() only make sense if the animation has ended

  if (!window.scrollY && window.scrollY < target.current.scrollHeight) {
    player.on('end', () => {
      scrollToTarget(target);
    });
  }
};

const getSvgaPlayer = (svgContainerRef: RefObject<HTMLObjectElement>): any => {
  return svgContainerRef.current?.contentDocument?.querySelector('svg') as any;
};
