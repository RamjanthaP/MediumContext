
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
        <div className="md:flex p-4 justify-center md:flex-col md:items-center lg:flex-row">
          <div className="items-center my-auto mx-auto mb-8">
            <Image className="rounded-full mx-auto" src={`https:${image}`} alt={name ? name : 'Testimonial Image'} height="250" width="250"/>
          </div>
          <div className="lg:w-2/3 p-8 bg-default rounded-xl">            
            <p className="mt-2 text-xl p-1">{`"${quote}"`}</p>
            <div className='flex items-center mt-4'>
              <p className="text-lg text-bold pr-1 font-bold">{name},</p>
              <p className="text-lg">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard;