import Button from '../Button/Button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { XCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import SectionWrapper from '../Layout/SectionWrapper';
import { useMediaQuery } from 'react-responsive';

function QuickContact({ person }: any) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [open, setOpen] = useState(isDesktop);

  useEffect(() => {
    setOpen(isDesktop);
  }, [isDesktop]);

  const toggleOpen = () => {
    if (!isDesktop) {
      setOpen(!open);
    }
  };
  //classes for mobile view when open
  const mobileOpenContainerClasses = 'flex';
  const mobileOpenContentClasses = 'flex justify-between h-full ml-4';

  //classes for desktop or when closed
  const containerClasses = `bg-discrete rounded-lg overflow-hidden ${open ? 'lg:w-max sm:w-full flex flex-row-reverse py-6 px-2 lg:px-16' : 'items-center w-full flex flex-row-reverse py-2 px-4'}`;
  const contentClasses = `flex w-full py-2 ${open ? 'lg:flex-col lg:items-center items-start' : 'items-center'}`;

  return (
    <SectionWrapper>
      <div className={`${containerClasses} ${!isDesktop && open ? mobileOpenContainerClasses : ''}`}>
        <button className="lg:hidden cursor-pointer flex justify-end" onClick={toggleOpen} aria-expanded={open} aria-label="toggle-contact-info">
          {open ? <XCircleIcon className="h-10" /> : <PlusCircleIcon className="h-10" />}
        </button>
        <div className={`${contentClasses} ${!isDesktop && open ? mobileOpenContentClasses : ''}`}>
          {person && (
            <Image src={person.image} alt={person.name} width={`${open ? "150" : "60"}`} height="150" className="rounded-full" />
          )}
          <div className='px-2'>
            <h2 className='text-xxl font-bold lg:text-center px-4'>Tips & Råd</h2>
            {open && (
              <div className="flex flex-col lg:items-center items-start">
                <p className='text-xs mb-4 lg:text-center md:text-start px-4'>Jag går gärna igenom processen ihop med er och hjälper er att formulera era behov</p>
                {person &&
                  <div className='flex flex-col lg:items-center my-2'>
                    <h5 className="text-xs font-bold px-4">{person.name || 'Default Name'}</h5>
                    <p className='text-xs mb-3 px-4'>{person.title || 'Default Role'}</p>
                    <div className='flex'>
                      <Button variant="primary" href={`tel:${person.phone}`}>
                        Telefon
                      </Button>
                      <Button variant="white" transparent href={`mailto:${person.email}`} >
                        Email
                      </Button>
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default QuickContact;