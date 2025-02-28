import '@/app/globals.css';

import { StickyProvider, useStickyContext } from '@/components/StickyHeader/StickyHeaderContext';

import { AppProps } from 'next/app';
import Footer from '@/components/Footer/Footer';
import { HeaderSticky } from '@/components/StickyHeader/StickyHeader';
import StoryblokProvider from '@/storyblok/StoryblokProvider';
import { getFooterData, } from '@/api/blocks';
import { useRouter } from 'next/router';

type OwnInitalProps = Awaited<ReturnType<typeof appsInitialProps>>;

const MyApp = ({
  Component,
  pageProps,
  footerData,
}: AppProps & OwnInitalProps) => {

  const router = useRouter();
  const isHome = () => router.asPath === '/homey';

  return (
    <StoryblokProvider>
      <div className='relative'>
        <StickyProvider>

          {!isHome() && ( // In the Hero we're doing some manual work for adding the header
            <HeaderSticky />
          )}

          <StickyAnimationPadding>
            <Component {...pageProps} />
          </StickyAnimationPadding>

        </StickyProvider>
        <Footer blok={footerData.data} />
      </div>
    </StoryblokProvider>
  );
};

const appsInitialProps = async () => {
  const footerData = await getFooterData();
  return { footerData };
};

MyApp.getInitialProps = appsInitialProps;

export default MyApp;

type TODO = any
const StickyAnimationPadding = ({ children }: { children: TODO }) => {
  const { isSticky } = useStickyContext()
  return <div className={`${isSticky ? 'pt-16' : ''}`
  }> {/* TODO: Make this use context instead */}
    {children}
  </div>
}
