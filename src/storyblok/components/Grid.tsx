import Grid, { GridProps } from '@/components/Grid/Grid';
import { GridStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';

const GridSb = ({ blok }: GridStoryblok) => {
  const componentData = mapGridDTOtoData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Grid {...componentData} />
    </div>
  );
};
export default GridSb;

function mapGridDTOtoData(dto: GridStoryblok): GridProps {
  return {
    title: dto.title,
    theme: dto.theme || undefined,
    columns: dto.columns,
  };
}
