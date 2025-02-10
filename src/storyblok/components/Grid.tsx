import { GridStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';

import Grid, { GridProps } from '@/components/Grid/Grid';

const GridSb = ({ blok }: GridStoryblok) => {
  const componentData = mapGridDTOtoData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Grid
        {...componentData}
        className={clsx({ ' lg:grid-cols-3 xl:grid-cols-4': blok.title != '' })}
      />
    </div>
  );
};
export default GridSb;

function mapGridDTOtoData(dto: GridStoryblok): GridProps {
  return {
    title: dto.title,
    theme: dto.theme || undefined,
    columns: dto.columns,
    target_name: dto.target_name,
  };
}
