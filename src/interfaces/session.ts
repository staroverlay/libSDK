import { IntegrationType } from './integration';
import { Profile } from './profile';
import { User } from './user';

export interface Session {
  _id: string;
  device: string;
  date: string;
  location: string;
  method?: IntegrationType;
}

export interface SessionWithToken extends Session {
  token: string;
}

export interface SessionAndUser {
  profile: Profile | null;
  session: SessionWithToken;
  user: User;
}
