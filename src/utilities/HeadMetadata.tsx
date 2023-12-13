import Head from 'next/head';

export function HeadMetadata(props: {
  title: string;
  description?: string;
  image?: string;
}) {
  const defaultTitle = 'Amaceit AB';
  const bodyData = 'Här är en beskrivning'; //TODO: Fixa beskrivning
  const { title, description, image } = props;
  const metaTitle = title === 'Home' ? defaultTitle : title;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description || bodyData} />
      <meta property='og:title' content={metaTitle} key='title' />
    </Head>
  );
}
