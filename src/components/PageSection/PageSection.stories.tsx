import PageSection from './PageSection';

export default {
  title: 'Components/PageSection',
  component: PageSection,
  tags: ['autodocs'],
};

const StoryChildren = () => (
  <div className='flex'>
    <div>
      <h1 className='text-xl font-bold'>Page section content.</h1>
      <p>
        Here is some Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Est officiis doloremque, eos saepe repudiandae pariatur aliquid
        accusantium molestias magni asperiores ea nobis quisquam odit adipisci
        rem numquam alias, esse odio.
      </p>
    </div>
    {/* eslint-disable @next/next/no-img-element */}
    <img src='https://unsplash.it/400/400' alt='Mockup bild' />
  </div>
);

export const Plain = {
  args: {
    title: 'Page section.',
    children: (
      <div className='h-[300px] bg-secondary-200 p-8 flex justify-center items-center'>
        Nested content (as child)
      </div>
    ),
  },
};

export const Styled = {
  args: {
    title: 'Page section.',
    className: 'bg-white',
    children: (
      <div className='h-[300px] bg-secondary-200 p-8 flex justify-center items-center'>
        Nested content (as child) This block is <em>not</em> transparent.
      </div>
    ),
  },
};

export const Exemple = {
  args: {
    title: 'Page section.',
    children: <StoryChildren />,
  },
};
