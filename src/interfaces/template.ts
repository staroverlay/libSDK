export type ServiceType = 'twitch';

export const ServiceTypes = [
  {
    id: 'twitch',
    name: 'Twitch',
  },
];

export interface Template {
  _id: string;
  creatorId: string;
  description?: string;
  lastVersion?: string;
  lastVersionId: string;
  name: string;
  price?: number;
  service?: ServiceType;
  storeDescription?: string;
  thumbnail?: string;
  visibility: TemplateVisibility;
}

export type TemplateVisibility = 'public' | 'unlisted' | 'private';

export const TemplateVisibilities = [
  {
    id: 'public',
    name: 'Public',
  },

  {
    id: 'unlisted',
    name: 'Unlisted',
  },

  {
    id: 'private',
    name: 'Private',
  },
];
