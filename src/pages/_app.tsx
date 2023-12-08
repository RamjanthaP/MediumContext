import { AppProps } from 'next/app';

import '@/app/globals.css';
import {
  getStoryblokFooterData,
  getStoryblokMenuData,
} from '@/services/getStoryBlokPage';
import StoryblokProvider from '@/storyblok/StoryblokProvider';
import { ContactFooterStoryblok, MenuStoryblok } from '@sb-types';

import Footer from '@/components/Footer/Footer';
import AppHeader from '@/components/Menu/AppHeader';

type OwnInitalProps = Awaited<ReturnType<typeof appsInitialProps>>;

const MyApp = ({
  Component,
  pageProps,
  menuData,
  footerData,
}: AppProps & OwnInitalProps) => {
  return (
    <StoryblokProvider>
      <AppHeader blok={menuData} />
      <Component {...pageProps} />
      <Footer blok={footerData} />
    </StoryblokProvider>
  );
};

const appsInitialProps = async (): Promise<{
  footerData: ContactFooterStoryblok;
  menuData: MenuStoryblok;
}> => {
  const footerData = await getStoryblokFooterData();
  const menuData = await getStoryblokMenuData();
  return { footerData, menuData };
};

MyApp.getInitialProps = appsInitialProps;

export default MyApp;
