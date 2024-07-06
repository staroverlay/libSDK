export interface TwitchCustomReward {
  broadcaster_id: string;
  broadcaster_login: string;
  broadcaster_name: string;
  id: string;
  title: string;
  prompt: string;
  cost: number;
  image?: TwitchImage;
  default_image: TwitchImage;
  background_color: string;
}

export interface TwitchImage {
  url_1x: string;
  url_2x: string;
  url_4x: string;
}
