import { StoryblokStory } from 'storyblok-generate-ts';

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface BodyStoryblok {
  animation?: string;
  body?: RichtextStoryblok;
  _uid: string;
  component: 'body';
  [k: string]: any;
}

export interface CarouselStoryblok {
  Title?: string;
  items?: (
    | BodyStoryblok
    | CarouselStoryblok
    | ContactFooterStoryblok
    | EmailStoryblok
    | FeatureStoryblok
    | FormStoryblok
    | FormInputsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HeroStartStoryblok
    | JumbotronStoryblok
    | LinkStoryblok
    | LogoCardStoryblok
    | MapBlockStoryblok
    | MaximumLengthStoryblok
    | MenuStoryblok
    | MenuLinkStoryblok
    | MinimumLengthStoryblok
    | NewsStoryblok
    | NoValidationStoryblok
    | OfficesStoryblok
    | OnelineTextStoryblok
    | PersonStoryblok
    | QuickContactStoryblok
    | RequiredStoryblok
    | ReUsableSectionStoryblok
    | ServiceItemsStoryblok
    | TemplateDefaultStoryblok
    | TemplateStartStoryblok
    | TemplateNewsStoryblok
    | TemplateServiceStoryblok
    | TestStoryblok
    | TestimonalStoryblok
    | UrlStoryblok
  )[];
  _uid: string;
  component: 'Carousel';
  [k: string]: any;
}

export interface ContactFooterStoryblok {
  offices?: OfficesStoryblok[];
  _uid: string;
  component: 'contact_footer';
  [k: string]: any;
}

export interface EmailStoryblok {
  errorMessage: string;
  _uid: string;
  component: 'Email';
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface FeatureStoryblok {
  pre_title?: string;
  title?: string;
  image?: AssetStoryblok;
  body?: string;
  ctaPrimary?: LinkStoryblok[];
  ctaSecondary?: LinkStoryblok[];
  layout?: '' | 'content-left' | 'content-right';
  theme?: '' | 'default' | 'inverted' | 'discrete';
  expandText?: string;
  expandTitle?: string;
  expandBody?: RichtextStoryblok;
  _uid: string;
  component: 'feature';
  [k: string]: any;
}

export interface FormStoryblok {
  Inputs: (
    | BodyStoryblok
    | CarouselStoryblok
    | ContactFooterStoryblok
    | EmailStoryblok
    | FeatureStoryblok
    | FormStoryblok
    | FormInputsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HeroStartStoryblok
    | JumbotronStoryblok
    | LinkStoryblok
    | LogoCardStoryblok
    | MapBlockStoryblok
    | MaximumLengthStoryblok
    | MenuStoryblok
    | MenuLinkStoryblok
    | MinimumLengthStoryblok
    | NewsStoryblok
    | NoValidationStoryblok
    | OfficesStoryblok
    | OnelineTextStoryblok
    | PersonStoryblok
    | QuickContactStoryblok
    | RequiredStoryblok
    | ReUsableSectionStoryblok
    | ServiceItemsStoryblok
    | TemplateDefaultStoryblok
    | TemplateStartStoryblok
    | TemplateNewsStoryblok
    | TemplateServiceStoryblok
    | TestStoryblok
    | TestimonalStoryblok
    | UrlStoryblok
  )[];
  Endpoint?: string;
  _uid: string;
  component: 'Form';
  [k: string]: any;
}

export interface FormInputsStoryblok {
  Name?: string;
  Label?: string;
  Placeholder?: string;
  Type?: '' | 'text' | 'email' | 'textArea';
  Validators?: (
    | EmailStoryblok
    | MaximumLengthStoryblok
    | MinimumLengthStoryblok
    | NoValidationStoryblok
    | RequiredStoryblok
    | UrlStoryblok
  )[];
  _uid: string;
  component: 'Form Inputs';
  [k: string]: any;
}

export interface GridStoryblok {
  title?: string;
  columns?: (
    | BodyStoryblok
    | CarouselStoryblok
    | ContactFooterStoryblok
    | EmailStoryblok
    | FeatureStoryblok
    | FormStoryblok
    | FormInputsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HeroStartStoryblok
    | JumbotronStoryblok
    | LinkStoryblok
    | LogoCardStoryblok
    | MapBlockStoryblok
    | MaximumLengthStoryblok
    | MenuStoryblok
    | MenuLinkStoryblok
    | MinimumLengthStoryblok
    | NewsStoryblok
    | NoValidationStoryblok
    | OfficesStoryblok
    | OnelineTextStoryblok
    | PersonStoryblok
    | QuickContactStoryblok
    | RequiredStoryblok
    | ReUsableSectionStoryblok
    | ServiceItemsStoryblok
    | TemplateDefaultStoryblok
    | TemplateStartStoryblok
    | TemplateNewsStoryblok
    | TemplateServiceStoryblok
    | TestStoryblok
    | TestimonalStoryblok
    | UrlStoryblok
  )[];
  theme?: '' | 'default' | 'inverted' | 'discrete';
  target_name?: string;
  _uid: string;
  component: 'grid';
  [k: string]: any;
}

export interface HeroStoryblok {
  headLine: RichtextStoryblok;
  image?: AssetStoryblok;
  bodyText?: RichtextStoryblok;
  ctaPrimary?: LinkStoryblok[];
  ctaSecondary?: LinkStoryblok[];
  _uid: string;
  component: 'hero';
  [k: string]: any;
}

export interface HeroStartStoryblok {
  video: AssetStoryblok;
  animated_texts: OnelineTextStoryblok[];
  ctaPrimary?: LinkStoryblok[];
  ctaSecondary?: LinkStoryblok[];
  _uid: string;
  component: 'hero_start';
  [k: string]: any;
}

export interface JumbotronStoryblok {
  title: string;
  layout: '' | 'content-left';
  content?: string;
  image: AssetStoryblok;
  ctaPrimary?: LinkStoryblok[];
  ctaSecondary?: LinkStoryblok[];
  _uid: string;
  component: 'jumbotron';
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'story';
      target?: '_self' | '_blank';
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: 'asset' | 'url';
      target?: '_self' | '_blank';
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: 'email';
      target?: '_self' | '_blank';
      [k: string]: any;
    };

export interface LinkStoryblok {
  text: string;
  link: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >;
  _uid: string;
  component: 'Link';
  [k: string]: any;
}

export interface LogoCardStoryblok {
  name: string;
  svgLogo: AssetStoryblok;
  size: '' | 'small' | 'medium' | 'large';
  _uid: string;
  component: 'logo_card';
  [k: string]: any;
}

export interface MapBlockStoryblok {
  animations?: string;
  _uid: string;
  component: 'map_block';
  [k: string]: any;
}

export interface MaximumLengthStoryblok {
  errorMessage?: string;
  maxLength: string;
  _uid: string;
  component: 'Maximum Length';
  [k: string]: any;
}

export interface MenuStoryblok {
  header_menu?: MenuLinkStoryblok[];
  _uid: string;
  component: 'menu';
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  link: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >;
  title: string;
  subItems?: MenuLinkStoryblok[];
  _uid: string;
  component: 'menu_link';
  [k: string]: any;
}

export interface MinimumLengthStoryblok {
  errorMessage?: string;
  minLength: string;
  _uid: string;
  component: 'Minimum Length';
  [k: string]: any;
}

export interface NewsStoryblok {
  title?: string;
  image: AssetStoryblok;
  caption?: string;
  link: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >;
  _uid: string;
  component: 'News';
  [k: string]: any;
}

export interface NoValidationStoryblok {
  _uid: string;
  component: 'no_validation';
  [k: string]: any;
}

export interface OfficesStoryblok {
  streetadress: string;
  zip: string;
  city: string;
  coordinates?: any;
  longitude: string;
  latitude: string;
  zoom: string;
  _uid: string;
  component: 'offices';
  [k: string]: any;
}

export interface OnelineTextStoryblok {
  Text: string;
  _uid: string;
  component: 'OnelineText';
  [k: string]: any;
}

export interface PersonStoryblok {
  name: string;
  role?: string;
  phone?: string;
  email: string;
  image: AssetStoryblok;
  _uid: string;
  component: 'person';
  [k: string]: any;
}

export interface QuickContactStoryblok {
  title?: string;
  description?: RichtextStoryblok;
  person: StoryblokStory<PersonStoryblok> | string;
  _uid: string;
  component: 'quick_contact';
  [k: string]: any;
}

export interface RequiredStoryblok {
  errorMessage: string;
  _uid: string;
  component: 'Required';
  [k: string]: any;
}

export interface ReUsableSectionStoryblok {
  content: any;
  _uid: string;
  component: 'reUsableSection';
  [k: string]: any;
}

export interface ServiceItemsStoryblok {
  title: string;
  description?: RichtextStoryblok;
  animation?: string;
  Image?: string;
  button_link?: Exclude<
    MultilinkStoryblok,
    { linktype?: 'email' } | { linktype?: 'asset' }
  >;
  button_title: string;
  _uid: string;
  component: 'service_items';
  [k: string]: any;
}

export interface TemplateDefaultStoryblok {
  body?: (
    | BodyStoryblok
    | CarouselStoryblok
    | ContactFooterStoryblok
    | EmailStoryblok
    | FeatureStoryblok
    | FormStoryblok
    | FormInputsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HeroStartStoryblok
    | JumbotronStoryblok
    | LinkStoryblok
    | LogoCardStoryblok
    | MapBlockStoryblok
    | MaximumLengthStoryblok
    | MenuStoryblok
    | MenuLinkStoryblok
    | MinimumLengthStoryblok
    | NewsStoryblok
    | NoValidationStoryblok
    | OfficesStoryblok
    | OnelineTextStoryblok
    | PersonStoryblok
    | QuickContactStoryblok
    | RequiredStoryblok
    | ReUsableSectionStoryblok
    | ServiceItemsStoryblok
    | TemplateDefaultStoryblok
    | TemplateStartStoryblok
    | TemplateNewsStoryblok
    | TemplateServiceStoryblok
    | TestStoryblok
    | TestimonalStoryblok
    | UrlStoryblok
  )[];
  _uid: string;
  component: 'template_start';
  [k: string]: any;
}

export interface TemplateNewsStoryblok {
  block?: (
    | BodyStoryblok
    | CarouselStoryblok
    | ContactFooterStoryblok
    | EmailStoryblok
    | FeatureStoryblok
    | FormStoryblok
    | FormInputsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HeroStartStoryblok
    | JumbotronStoryblok
    | LinkStoryblok
    | LogoCardStoryblok
    | MapBlockStoryblok
    | MaximumLengthStoryblok
    | MenuStoryblok
    | MenuLinkStoryblok
    | MinimumLengthStoryblok
    | NewsStoryblok
    | NoValidationStoryblok
    | OfficesStoryblok
    | OnelineTextStoryblok
    | PersonStoryblok
    | QuickContactStoryblok
    | RequiredStoryblok
    | ReUsableSectionStoryblok
    | ServiceItemsStoryblok
    | TemplateDefaultStoryblok
    | TemplateStartStoryblok
    | TemplateNewsStoryblok
    | TemplateServiceStoryblok
    | TestStoryblok
    | TestimonalStoryblok
    | UrlStoryblok
  )[];
  _uid: string;
  component: 'template_news';
  [k: string]: any;
}

export interface TemplateServiceStoryblok {
  content?: RichtextStoryblok;
  relatedCase?: FeatureStoryblok[];
  contact_person?: StoryblokStory<PersonStoryblok> | string;
  _uid: string;
  component: 'template_service';
  [k: string]: any;
}

export interface TemplateStartStoryblok {
  StartHero: HeroStartStoryblok[];
  body?: (
    | BodyStoryblok
    | CarouselStoryblok
    | ContactFooterStoryblok
    | EmailStoryblok
    | FeatureStoryblok
    | FormStoryblok
    | FormInputsStoryblok
    | GridStoryblok
    | HeroStoryblok
    | HeroStartStoryblok
    | JumbotronStoryblok
    | LinkStoryblok
    | LogoCardStoryblok
    | MapBlockStoryblok
    | MaximumLengthStoryblok
    | MenuStoryblok
    | MenuLinkStoryblok
    | MinimumLengthStoryblok
    | NewsStoryblok
    | NoValidationStoryblok
    | OfficesStoryblok
    | OnelineTextStoryblok
    | PersonStoryblok
    | QuickContactStoryblok
    | RequiredStoryblok
    | ReUsableSectionStoryblok
    | ServiceItemsStoryblok
    | TemplateDefaultStoryblok
    | TemplateNewsStoryblok
    | TemplateServiceStoryblok
    | TemplateStartStoryblok
    | TestStoryblok
    | TestimonalStoryblok
    | UrlStoryblok
  )[];
  _uid: string;
  component: 'template_start';
  [k: string]: any;
}

export interface TestStoryblok {
  _uid: string;
  component: 'Test';
  [k: string]: any;
}

export interface TestimonalStoryblok {
  Image?: string;
  Name?: string;
  Title?: string;
  Quotes?: string;
  _uid: string;
  component: 'Testimonal';
  [k: string]: any;
}

export interface UrlStoryblok {
  _uid: string;
  component: 'Url';
  [k: string]: any;
}
