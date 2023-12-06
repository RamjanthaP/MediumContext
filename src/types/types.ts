import { AssetStoryblok } from '@sb-types';

interface QuickContactImage {
  filename?: AssetStoryblok;
  name?: string;
}

export interface QuickContactProps {
  name?: string;
  email?: string;
  phone?: string;
  title?: string;
  image: QuickContactImage;
}
