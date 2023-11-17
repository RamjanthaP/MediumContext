import Button from '../Button/Button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { XCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
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
  const mobileOpenContentClasses = 'flex justify-between h-full';

  //classes for desktop or when closed
  const containerClasses = `bg-discrete rounded-lg overflow-hidden ${open ? 'lg:w-max sm:w-full flex flex-row-reverse py-6 px-2 lg:px-16' : 'items-center w-full flex flex-row-reverse py-2 '}`;
  const contentClasses = `flex w-full py-2 ${open ? 'lg:flex-col lg:items-center items-start' : 'items-center'}`;

  return (
      <div className={`${containerClasses} ${!isDesktop && open ? mobileOpenContainerClasses : ''}`}>
        <button className="lg:hidden cursor-pointer flex justify-end" onClick={toggleOpen} aria-expanded={open} aria-label="toggle-contact-info">
          {open ? <XCircleIcon className="h-10 text-primary-500" /> : <PlusCircleIcon className="h-10 text-primary-500" />}
        </button>
        <div className={`${contentClasses} ${!isDesktop && open ? mobileOpenContentClasses : ''}`}>
          {person && (
            <Image src={person.image} alt={person.name} width={`${isDesktop ? "150" : "80"}`} height="150" className="rounded-full" />
          )}
          <div className='md:pr-2'>
            <h2 className='text-xxl font-bold lg:text-center lg:pt-4 px-4'>Tips & Råd</h2>
            {open && (
              <div className="flex flex-col lg:items-center items-start">
                <p className='text-xs mb-4 lg:text-center md:text-start px-4 md:break-words'>Jag går gärna igenom processen ihop med er och hjälper er att formulera era behov</p>
                {person &&
                  <div className='flex flex-col lg:items-center my-2'>
                    <h5 className="text-xs font-bold px-4">{person.name || 'Default Name'}</h5>
                    <p className='text-xs mb-3 px-4'>{person.title || 'Default Role'}</p>
                    <div className='flex sm:flex-col gap-3'>
                      <Button variant="primary" href={`tel:${person.phone}`}>
                        Telefon
                      </Button>
                      <Button variant="inverted" transparent href={`mailto:${person.email}`} >
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
  );
}

export default QuickContact;