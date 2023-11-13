import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import DemoAnimation from '@/components/AnimatedHeader/Demo.svg';
import { TemplateServiceStoryblok } from '../../../component-types-sb';
import RichText from '../helpers/RichText';
import { Container } from '@/components/Layout/Container';
import AnimateHeader from '@/components/AnimatedHeader/AnimatedHeader';
import Placholder from '../fallback-component/Fallback';

// Used as entry point for all pages in Storyblok
const TemplateService = ({ blok, title }: TemplateServiceStoryblok) => {
  return (
    <>
      <AnimateHeader
        svgAnimation={DemoAnimation}
        title={title}
        topActionButton={{ text: 'Tjänster', url: '/services' }}
      />

      <main {...storyblokEditable(blok)}>
        <Container className='mt-4 md:mt-8'>
          <div className='grid md:grid-cols-12 gap-8'>
            {blok.content && (
              <div className='col-span-12 md:col-span-6'>
                <RichText
                  className='text-md md:text-lg'
                  __html={blok.content}
                />
              </div>
            )}
            <div className='col-span-12 md:col-span-4 md:col-start-9'>
              <Placholder blok={blok.quick_contact[0]} />
            </div>
          </div>
        </Container>

        <div className='col-4'></div>
        {blok.body?.map((nestedBlok: { _uid: string }) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
    </>
  );
};
export default TemplateService;
