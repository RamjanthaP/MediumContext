import Head from 'next/head';

import { AssetProp } from '@/types/common';

/**
 *
 */
export function HeadMetadata(props: {
  title: string;
  description?: string;
  image?: AssetProp;
}) {
  const defaultTitle = 'Amaceit AB';
  const fallbackImage: AssetProp = {
    url: '/images/placeholder.png',
    alt: 'ALT image',
  }; // TODO: Fixa fallback image
  const bodyData = 'Här är en beskrivning'; //TODO: Fixa beskrivning
  const { title, description, image } = props;
  const metaTitle = title === 'Home' ? defaultTitle : title;
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={description || bodyData} />
      <meta property='og:title' content={metaTitle} />
      <meta property='og:image' content={image?.url || fallbackImage.url} />
      <meta property='og:image:alt' content={image?.url || fallbackImage.alt} />
      {/* TODO: Unclear how to implement these

      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
    </Head>
  );
}
