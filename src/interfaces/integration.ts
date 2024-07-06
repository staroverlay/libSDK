export type IntegrationType = 'kick' | 'twitch' | 'youtube';

export interface Integration {
  _id: string;
  avatar: string;
  integrationId: string;
  username: string;
  type: IntegrationType;
}
