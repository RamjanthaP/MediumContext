import { AnimatedText, AnimatedTextItem } from '../AnimateText/AnimatedText';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { forwardRef, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Amaceit from '../Logo/Amaceit';
import Button from '../Button/Button';
import ButtonWrapper from '../Button/ButtonWrapper';
import { useStickyContext } from '../StickyHeader/StickyHeaderContext';

type TODO = any
export interface StartHeroProps {

  video: {
    source: string,
    alt: string
  }
  texts: string[]
  primaryButton: TODO
  secondaryButton: TODO
}

const MotionButtonWrapper = motion(ButtonWrapper);

const StartHero = forwardRef<HTMLElement, StartHeroProps>(
  (
    {

      ...props
    },
    _ref
  ) => {
    const refBigLogo = useRef<HTMLDivElement>(null)
    const refHero = useRef<HTMLElement>(null)


    const isInView = useInView(refBigLogo, {
      once: false,
      amount: 0.5, // This means 50% of the element must be visible
    });

    const { hideHeaderLogo, showHeaderLogo, stick, unstick, refHeader } = useStickyContext()

    useEffect(() => {
      isInView ? hideHeaderLogo() : showHeaderLogo();
    }, [isInView]);


    useEffect(() => {
      const handleScroll = () => {
        if (refHero.current && refHeader?.current) { // Making sure both refs exists. Talking about header and hero
          if (window.scrollY > refHero.current.offsetHeight) {
            stick()
          } else {
            unstick()

          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let sequenceDelayValue = 0;
    let sequenceDelay = (extraDelay: number) => {
      sequenceDelayValue = extraDelay + sequenceDelayValue;
      return extraDelay;
    };

    return (
      <section
        ref={refHero}
        className='relative h-[calc(100vh-56px)] md:h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden bg-blue-600 dark:bg-blue-900'

      >
        <TonedVideo alt={props.video.alt} src={props.video.source} />
        <div className='relative z-10 text-center'        >

          <motion.div
            className='w-64 md:w-96 mx-auto mt-16'
            initial={{ scale: 2, y: -120, opacity: 0 }}
            whileInView={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0 }}
            ref={refBigLogo}
            transition={{
              type: 'spring',
              duration: 1500,
              damping: 20,
              delay: sequenceDelay(0.5),
            }}
          >
            <Amaceit />
          </motion.div>
          <motion.div
            className='h-16 flex content-center flex-wrap justify-center md:text-xl md:my-8 transition-all'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              duration: 1,
              delay: sequenceDelay(1.8),
            }}
          >
            <AnimatedText>
              {props.texts.map(text => <AnimatedTextItem key={text}>
                {text}
              </AnimatedTextItem>)}
            </AnimatedText>
          </motion.div>
          <MotionButtonWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: sequenceDelay(0.8) }}
          >
            <Button variant='primary' href={props.primaryButton.url}>
              {props.primaryButton.text} <ArrowDownIcon className='h-4 w-4 ml-1' />
            </Button>
            <Button variant='default' transparent href={props.secondaryButton.url}>
              {props.secondaryButton.text} <ArrowRightIcon className='h-4 w-4 ml-1' />
            </Button>
          </MotionButtonWrapper>
        </div>
      </section >
    );
  }
);
StartHero.displayName = 'StartHero'
export { StartHero };


interface TonedVideoProps {
  src: string,
  alt: string
}
function TonedVideo({ alt, src }: TonedVideoProps) {
  return (
    <video
      autoPlay
      loop
      aria-label={alt}
      muted
      src={src}
      className='absolute opacity-10 object-cover h-screen xl:h-auto lg:w-screen bg-primary-300'
    ></video>
  );
}
