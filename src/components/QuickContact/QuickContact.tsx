'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { minDesktopScreen } from '@/config';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

import { BaseProps } from '@/types/props';
import { Person } from '@/types/types';

import Button from '../Button/Button';

export interface QuickContactProps extends BaseProps {
  person: Person;
}

function QuickContact({ person }: QuickContactProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(0);
  const [imgSize, setImgSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowSize >= minDesktopScreen) {
      setIsDesktop(true);
      setImgSize(150);
    } else {
      setIsDesktop(false);
      setImgSize(80);
    }
  }, [windowSize]);

  const toggleOpen = () => {
    if (!isDesktop) {
      setOpen(!open);
    }
  };

  //classes for mobile view when open
  const mobileOpenContainerClasses = 'flex';
  const mobileOpenContentClasses = 'flex justify-between h-full';

  //classes for desktop or when closed
  const containerClasses = `bg-discrete rounded-lg overflow-hidden p-4 ${
    isDesktop && open
      ? 'sm:w-full flex flex-row-reverse lg:px-16 relative'
      : 'items-center w-full flex flex-row-reverse py-2 '
  }`;
  const contentClasses = `flex w-full ${
    isDesktop && open
      ? 'lg:flex-col lg:items-center items-start'
      : 'items-center'
  }`;

  console.log(person);

  return (
    <div
      className={`${containerClasses} ${
        !isDesktop && open ? mobileOpenContainerClasses : ''
      }`}
    >
      <button
        className={`lg:hidden cursor-pointer flex justify-end ${
          open ? 'absolute top-2 right-2' : ''
        }`}
        onClick={toggleOpen}
        aria-expanded={open}
        aria-label='toggle-contact-info'
      >
        {open ? (
          <XCircleIcon className='h-10 text-primary-500' />
        ) : (
          <PlusCircleIcon className='h-10 text-primary-500' />
        )}
      </button>
      <div
        className={`${contentClasses} ${
          !isDesktop && open ? mobileOpenContentClasses : ''
        }`}
      >
        {person && (
          <Image
            src={person?.image?.filename}
            alt={person?.image?.name}
            width={imgSize}
            height={imgSize}
            className='rounded-full'
          />
        )}
        <div className='md:pr-2'>
          <h2 className='text-lg lg:text-xxl font-bold lg:text-center lg:pt-4 px-4'>
            Tips & Råd
          </h2>
          {open && (
            <div className='flex flex-col lg:items-center items-start'>
              <p className='text-md mb-4 lg:text-center md:text-start px-4 md:break-words'>
                Jag går gärna igenom processen ihop med er och hjälper er att
                formulera era behov
              </p>
              {person && (
                <div className='flex flex-col lg:items-center my-2'>
                  <h5 className='text-xs font-bold px-4'>
                    {person?.name || 'Default Name'}
                  </h5>
                  <p className='text-xs mb-3 px-4'>
                    {person?.title || 'Default Role'}
                  </p>
                  <div className='flex sm:flex-col gap-3'>
                    <Button variant='primary' href={`tel:${person?.phone}`}>
                      Telefon
                    </Button>
                    <Button
                      variant='inverted'
                      transparent
                      href={`mailto:${person?.email}`}
                    >
                      Email
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuickContact;
