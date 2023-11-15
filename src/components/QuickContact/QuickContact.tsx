import Button from '../Button/Button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Open from '../../../public/icons/open.svg'
import Close from '../../../public/icons/close.svg'
import SectionWrapper from '../Layout/SectionWrapper';

function QuickContact({ title, description, person }: any/* For now */) {
  const desktopBreakpoint = 1024;
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleWindowSizeChange() {
      setIsDesktop(window.innerWidth >= desktopBreakpoint);
    }

    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange(); // initialize the value

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  useEffect(() => {
    // Open the accordion if desktop size, close if not
    setOpen(isDesktop);
  }, [isDesktop]);

  const toggleOpen = () => {
    if (!isDesktop) {
      setOpen(!open);
    }
  };

  const containerClasses = `bg-discrete rounded-lg overflow-hidden ${open ? 'lg:w-max sm:w-full flex flex-col py-6 px-2 lg:px-16' : 'items-center w-max flex flex-row-reverse py-2 px-4'}`;
  const toggleIconClasses = `lg:hidden cursor-pointer flex justify-end ${open ? 'mx-3' : 'ml-24'}`;
  const contentClasses = `flex w-full py-2 ${open ? 'flex-col items-center' : 'items-center justify-between flex-row-reverse'}`;

  return (
    <SectionWrapper>
      <div className={containerClasses}>
        <button className={toggleIconClasses} onClick={toggleOpen} aria-expanded={open} aria-label="toggle-contact-info">
          <Image src={open ? Close : Open} alt={open ? 'close-icon' : 'open-icon'} width="50" height="50" />
        </button>
        <div className={contentClasses}>
          {title && <h2 className='text-xxl font-bold text-center'>{title}</h2>}
          {person && <Image src={person.url} alt={person.alt} width={`${open ? "150" : "60"}`} height="150" className="rounded-full mx-auto" />}
        </div>
        {open && (
          <div className="flex flex-col items-center">
            {description && <p className='text-xs mb-4 text-center'>{description}</p>}
            {person &&
              <div className='flex flex-col items-center my-2'>
                <h5 className="text-xs font-bold">{person.name || 'Default Name'}</h5>
                <p className='text-xs mb-3'>{person.role || 'Default Role'}</p>
                <div>
                  <Button variant="primary">
                    Telefon
                  </Button>
                  <Button variant="white" transparent>
                    Email
                  </Button>
                </div>
              </div>
            }
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

export default QuickContact;