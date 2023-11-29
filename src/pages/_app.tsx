import '@/app/globals.css';

import App, { AppProps } from 'next/app';

import StoryblokProvider from '@/storyblok/StoryblokProvider';
import {
  getStoryblokFooterData,
  getStoryblokMenuData,
} from '@/services/getStoryBlokPage';
import AppHeader from '@/components/Menu/AppHeader';
import Footer from '@/components/Footer/Footer';
import { ContactFooterStoryblok, MenuStoryblok } from '@sb-types';

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
