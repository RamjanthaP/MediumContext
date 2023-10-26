import {StoryblokStory} from 'storyblok-generate-ts'

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
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

export interface CaseStoryblok {
  Client?: string;
  Summary?: RichtextStoryblok;
  Image?: AssetStoryblok;
  _uid: string;
  component: "Case";
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

export interface FeatureStoryblok {
  title?: string;
  image?: AssetStoryblok;
  body?: string;
  ctaPrimary?: MultilinkStoryblok;
  ctaSecondary?: MultilinkStoryblok;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
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

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PeopleStoryblok {
  Role?: string;
  Github?: MultilinkStoryblok;
  Image?: AssetStoryblok;
  _uid: string;
  component: "People";
  [k: string]: any;
}

export interface ServiceStoryblok {
  content?: RichtextStoryblok;
  relatedCase?: CaseStoryblok[];
  _uid: string;
  component: "Service";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
