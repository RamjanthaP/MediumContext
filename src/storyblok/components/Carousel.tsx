import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import { storyblokEditable } from '@storyblok/react';
import React from 'react'

interface CarouselSbProps {
  _uid: string,
  Title: string
  items: Array<{
    Name?: string
    _uid?: string
    Image?: string
    Title?: string
    Quotes?: string
    component?: string
  }>
  component: string
  [key: string]: any;
}

const CarouselSb = ({ blok }: { blok: CarouselSbProps }) => {
  return (
    <div {...storyblokEditable(blok)}>
   { blok.items && blok.items.map((blok) => (
     <TestimonialCard key={blok._uid} image={blok.Image} name={blok.Name} title={blok.Title} quote={blok.Quotes} />
   ))}  
    </div>
  );
};
export default CarouselSb;

