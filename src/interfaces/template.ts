export interface Template {
  _id: string;
  author: string;
  name: string;
  description: string;
  service: 'twitch';
  html: string;
  version: number;
}
