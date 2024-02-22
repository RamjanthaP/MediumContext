import { TemplateNewsStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react/rsc';
import NewsCard from '@/components/NewsCard/NewsCard';
import { SetStateAction, useState } from 'react';
import Pagination from '@/components/Pagination/Pagination';

const NewsSb = ({ blok }: TemplateNewsStoryblok) => {
  const componentData = mapNewsToData(blok);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalItems = componentData.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = componentData.slice().reverse().slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <>
      <div {...storyblokEditable(blok)} className='py-20'>
        {currentItems.map((item, index) => (
          <NewsCard key={item.uid} {...item} index={index} />
        ))}
      </div>
      <div className='container w-full mx-auto'>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={paginate} />
      </div>
    </>
  );
};
export default NewsSb;

const mapNewsToData = (blok: TemplateNewsStoryblok) => {
  const { block } = blok;

  if (!Array.isArray(block)) {
    console.error('Expected block to be an array');
    return [];
  }

  // Map each item in the block to a new structure
  return block.map(item => {
    const { link, image, title, caption } = item;

    const mappedItem = {
      uid: item._uid,
      title: title,
      caption: caption,
      link: link, 
      image: image && {
        alt: image.alt || '',
        url: image.filename,
      },
    };

    return mappedItem;
  });
};
