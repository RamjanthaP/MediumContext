import Grid from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
};

const Placeholder = ({ i }: { i: number }) => (
  <div className='bg-secondary-100 px-4 py-8 text-center'>Item {i + 1}</div>
);
const genItems = (n: number): number[] => Array.from(Array(n).keys());

export const With4Columns = {
  args: {
    title: 'Grid exemple.',
    children: (
      <>
        {genItems(4).map((i) => (
          <Placeholder key={i} i={i} />
        ))}
      </>
    ),
  },
};
export const With4ColumnsAnd3Items = {
  args: {
    title: 'Grid exemple.',
    children: (
      <>
        {genItems(3).map((i) => (
          <Placeholder key={i} i={i} />
        ))}
      </>
    ),
  },
};
export const With3Columns = {
  args: {
    title: 'Grid exemple.',
    columns: genItems(3),
    children: (
      <>
        {genItems(3).map((i) => (
          <Placeholder key={i} i={i} />
        ))}
      </>
    ),
  },
};
export const With3ColumnsAnd4Items = {
  args: {
    title: 'Grid exemple.',
    columns: genItems(3),
    children: (
      <>
        {genItems(4).map((i) => (
          <Placeholder key={i} i={i} />
        ))}
      </>
    ),
  },
};
export const With2IColumns = {
  args: {
    title: 'Grid exemple.',
    columns: genItems(2),
    children: (
      <>
        {genItems(2).map((i) => (
          <Placeholder key={i} i={i} />
        ))}
      </>
    ),
  },
};
export const With2IColumnsAnd3Items = {
  args: {
    title: 'Grid exemple.',
    columns: genItems(2),
    children: (
      <>
        {genItems(3).map((i) => (
          <Placeholder key={i} i={i} />
        ))}
      </>
    ),
  },
};
