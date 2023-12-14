import { AppProps } from 'next/app';

import { getFooterData, getMenuData } from '@/api/blocks';
import '@/app/globals.css';
import StoryblokProvider from '@/storyblok/StoryblokProvider';

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
      <AppHeader blok={menuData.data} />
      <Component {...pageProps} />
      <Footer blok={footerData.data} />
    </StoryblokProvider>
  );
};

const appsInitialProps = async () => {
  const footerData = await getFooterData();
  const menuData = await getMenuData();
  return { footerData, menuData };
};

MyApp.getInitialProps = appsInitialProps;

export default MyApp;
