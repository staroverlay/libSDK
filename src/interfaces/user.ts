export interface User {
  _id: string;
  email: string;
  isEmailVerified: boolean;
  isCreator: boolean;
  profileId?: string;
  createdAt: string;
  updatedAt: string;
}
