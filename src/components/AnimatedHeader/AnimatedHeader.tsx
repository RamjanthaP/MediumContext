'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Button from '../Button/Button';
import { Container } from '../Layout/Container';
import Animation from './falling-ball.svg';

const AnimateHeader = () => {
  return (
    <div className='bg-primary-100 pb-8'>
      <div className='h-96  flex justify-center items-center'>
        <object
          type='image/svg+xml'
          data={Animation.src}
          className='w-6/12 md:w-4/12 h-full'
        >
          svg-animation
        </object>
      </div>
      <Container>
        <div className='w-1/4'>
          <Button variant='default' transparent size='small' href='/'>
            <ArrowLeftIcon className='w-4 h-4 mr-2' />
            Tjänster
          </Button>
          <h1 className='text-Jumbo/sm md:text-Jumbo/lg font-bold transition-all mt-4'>
            Modern applikationsutvekling
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default AnimateHeader;
