export type StoryBlokRequest<ExpectedComponent> = {
  data: ExpectedComponent;
  revalidate: number;
};
