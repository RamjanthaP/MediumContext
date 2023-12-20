import PageSection from '@/components/PageSection/PageSection';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import { storyblokEditable } from '@storyblok/react';
import React from 'react'
import Slider from "react-slick";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div {...storyblokEditable(blok)} className='bg-discrete'>
      <div className='container'>
        <PageSection title={blok.Title} theme="discrete">
          <Slider {...settings}>
            {blok.items && blok.items.map((blok) => (
              <TestimonialCard key={blok._uid} image={blok.Image} name={blok.Name} title={blok.Title} quote={blok.Quotes} />
            ))}
          </Slider>
        </PageSection>
      </div>
    </div>
  );
};
export default CarouselSb;

