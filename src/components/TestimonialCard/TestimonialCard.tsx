
import React from 'react'
import Image from 'next/image';

export interface TestimonialCardProps {
  image?: string, 
  name?: string, 
  title?: string,
  quote?: string;
 }

function TestimonialCard({  image, name, title, quote }: TestimonialCardProps) {
  return (
    <div className='bg-discrete'>
      <div className="container mx-auto">
        <div className="md:flex p-4 justify-center h-4/6">
          <div className="w-1/3 h-48 md:h-auto md:w-48 items-center my-auto lg:mr-12">
            <Image className="rounded-full" src={`https:${image}`} alt={name ? name : 'Testimonial Image'} height="250" width="250"/>
          </div>
          <div className="w-2/3 p-8 bg-default rounded-xl">            
            <p className="mt-2 text-xl p-1">{`"${quote}"`}</p>
            <div className='flex items-center mt-4'>
              <p className="text-lg text-bold">{name}</p>,
              <p className="text-lg">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard;