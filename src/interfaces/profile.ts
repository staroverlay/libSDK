export type ProfileRole =
  | 'artist'
  | 'creator'
  | 'early-adopter'
  | 'staff'
  | 'translator';

export interface Profile {
  _id: string;
  avatar?: string;
  displayName: string;
  roles: ProfileRole[];
}
