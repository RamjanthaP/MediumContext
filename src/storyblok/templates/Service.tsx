import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

import DemoAnimation from '@/components/AnimatedHeader/animations/Demo.svg';
import { PersonStoryblok, TemplateServiceStoryblok } from '@sb-types';
import RichText from '../helpers/RichText';
import { Container } from '@/components/Layout/Container';
import AnimateHeader from '@/components/AnimatedHeader/AnimatedHeader';
import QuickContact from '@/components/QuickContact/QuickContact';
// Used as entry point for all pages in Storyblok
const TemplateService = ({
  blok,
  title,
  contactPerson,
  relatedItem,
}: TemplateServiceStoryblok) => {
  const quickContactData = mapContactPersonDtoToQuickContactData(contactPerson);
  return (
    <>
      <AnimateHeader
        svgAnimation={DemoAnimation}
        title={title}
        topActionButton={{ text: 'Tjänster', url: '/services' }}
      />

      {/* <StoryblokComponent blok={relatedItem.content} /> */}
      <main {...storyblokEditable(blok)}>
        <Container className='mt-4 md:mt-8'>
          <div className='grid grid-cols-12 md:gap-8 '>
            {blok.content && (
              <div className='col-span-12 lg:col-span-6 mb-8 lg:mt-8 md:max-w-[70ch]'>
                <RichText
                  className='text-md md:text-lg'
                  __html={blok.content}
                />
              </div>
            )}
            <div className='col-span-12 lg:col-span-5 lg:col-start-8 pb-4 -order-1 lg:order-1'>
              {contactPerson && <QuickContact person={quickContactData} />}
            </div>
          </div>
        </Container>

        {!!blok.relatedCase?.length && (
          <StoryblokComponent
            blok={blok.relatedCase[0]}
            key={blok.relatedCase?._uid}
          />
        )}
      </main>
    </>
  );
};
export default TemplateService;

function mapContactPersonDtoToQuickContactData(contactPerson: {
  content: PersonStoryblok;
}) {
  if (!contactPerson) return null;
  const { name, email, phone, role, image } = contactPerson.content;
  return {
    name,
    email,
    phone,
    title: role,
    image,
  };
}
