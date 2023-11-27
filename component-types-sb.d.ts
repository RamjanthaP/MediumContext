import {StoryblokStory} from 'storyblok-generate-ts'

export interface ContactFooterStoryblok {
  offices?: OfficesStoryblok[];
  _uid: string;
  component: "contact_footer";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface FeatureStoryblok {
  title?: string;
  image?: AssetStoryblok;
  body?: string;
  ctaPrimary?: LinkStoryblok[];
  ctaSecondary?: LinkStoryblok[];
  layout?: "" | "content-left" | "content-right";
  theme?: "" | "default" | "inverted" | "discrete";
  expandBody?: RichtextStoryblok;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  title?: string;
  columns?: any[];
  theme?: "" | "default" | "inverted" | "discrete";
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  headLine: string;
  image: AssetStoryblok;
  ctaPrimary?: LinkStoryblok[];
  ctaSecondary?: LinkStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface JumbotronStoryblok {
  title: string;
  layout: "" | "content-left";
  content?: string;
  image: AssetStoryblok;
  ctaPrimary?: LinkStoryblok[];
  ctaSecondary?: LinkStoryblok[];
  _uid: string;
  component: "jumbotron";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface LinkStoryblok {
  text: string;
  link: MultilinkStoryblok;
  _uid: string;
  component: "Link";
  [k: string]: any;
}

export interface LogoCardStoryblok {
  name: string;
  svgLogo: AssetStoryblok;
  size: "" | "small" | "medium" | "large";
  _uid: string;
  component: "logo_card";
  [k: string]: any;
}

export interface MenuStoryblok {
  header_menu?: MenuLinkStoryblok[];
  _uid: string;
  component: "menu";
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  link: MultilinkStoryblok;
  title: string;
  subItems?: MenuLinkStoryblok[];
  _uid: string;
  component: "menu_link";
  [k: string]: any;
}

export interface OfficesStoryblok {
  streetadress?: string;
  zip?: string;
  city: string;
  _uid: string;
  component: "offices";
  [k: string]: any;
}

export interface PersonStoryblok {
  name: string;
  role?: string;
  phone?: string;
  email: string;
  image: AssetStoryblok;
  _uid: string;
  component: "person";
  [k: string]: any;
}

export interface QuickContactStoryblok {
  title?: string;
  description?: RichtextStoryblok;
  person: StoryblokStory<PersonStoryblok> | string;
  _uid: string;
  component: "quick_contact";
  [k: string]: any;
}

export interface ReUsableSectionStoryblok {
  _uid: string;
  component: "reUsableSection";
  [k: string]: any;
}

export interface ServiceItemsStoryblok {
  title: string;
  description?: RichtextStoryblok;
  animation?: string;
  Image?: string;
  button_link?: MultilinkStoryblok;
  button_title: string;
  _uid: string;
  component: "service_items";
  [k: string]: any;
}

export interface TemplateDefaultStoryblok {
  body?: any[];
  _uid: string;
  component: "template_default";
  [k: string]: any;
}

export interface TemplateServiceStoryblok {
  content?: RichtextStoryblok;
  relatedCase?: FeatureStoryblok[];
  contact_person?: StoryblokStory<PersonStoryblok> | string;
  _uid: string;
  component: "template_service";
  [k: string]: any;
}
