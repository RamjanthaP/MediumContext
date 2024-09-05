import Image from 'next/image';

import { ArrowLeftIcon } from '@heroicons/react/20/solid';

import Button from '@/components/Button/Button';
import { Container } from '@/components/Layout/Container';

import notFound from '../../public/assets/404.svg';

export default function NotFound() {
  return (
    <div className='min-h-[50vh]'>
      <Container>
        <div className='flex justify-center'>
          <div className='w-3/4 lg:w-1/2 flex flex-col gap-4 pt-12'>
            <h2 className='text-xxl mx-auto'>Sidan kunde inte hittas!</h2>
            <Image
              src={notFound}
              alt='not-found'
              width={600}
              height={500}
              className='object-contain'
            />
            <p className='text-lg'>
              Den sidan som du letar efter är antingen borttagen eller flyttad
              (och vi har slarvat med redirecten. Ber om ursäkt i så fall. 😅).
            </p>
            <div className='mx-auto'>
              <Button variant='default' transparent href='/' element='Link'>
                <ArrowLeftIcon className='inline-block h-4 mr-1' />
                Gå till start
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
