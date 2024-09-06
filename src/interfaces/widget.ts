import { SettingsScope } from './settings';
import { ServiceType } from './template';

export interface Widget {
  _id: string;
  autoUpdate: boolean;
  displayName: string;
  enabled: boolean;
  service: ServiceType;
  scopes: SettingsScope[];
  settings?: string;
  templateId: string;
  templateVersion?: string;
  token: string;
  userId: string;
}
