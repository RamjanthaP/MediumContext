import Button from '../Button/Button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Open from '../../../public/icons/open.svg'
import Close from '../../../public/icons/close.svg'
import SectionWrapper from '../Layout/SectionWrapper'

function QuickContact({person }: any/* For now */) {
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

  const containerClasses = `bg-discrete rounded-lg overflow-hidden ${open ? 'lg:w-max sm:w-full flex flex-col py-6 px-2 lg:px-16' : 'items-center w-full flex flex-row-reverse py-2 px-4'}`;
  const contentClasses = `flex w-full py-2 ${open ? 'flex-col items-center flex-col-reverse' : 'items-center justify-end flex-row-reverse'}`;

  return (
    <SectionWrapper>
      <div className={containerClasses}>
        <button className="lg:hidden cursor-pointer flex justify-end" onClick={toggleOpen} aria-expanded={open} aria-label="toggle-contact-info">
          <Image src={open ? Close : Open} alt={open ? 'close-icon' : 'open-icon'} width="50" height="50" />
        </button>
        <div className={contentClasses}>
          <h2 className='text-xxl font-bold text-center px-2'>Tips & Råd</h2>
          {person && <Image src={person.image} alt={person.name} width={`${open ? "150" : "60"}`} height="150" className="rounded-full" />}
        </div>
        {open && (
          <div className="flex flex-col items-center">
            <p className='text-xs mb-4 text-center'>Jag går gärna igenom processen ihop med er och hjälper er att formulera era behov</p>
            {person &&
              <div className='flex flex-col items-center my-2'>
                <h5 className="text-xs font-bold">{person.name || 'Default Name'}</h5>
                <p className='text-xs mb-3'>{person.title || 'Default Role'}</p>
                <div>
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
    </SectionWrapper>
  );
}

export default QuickContact;