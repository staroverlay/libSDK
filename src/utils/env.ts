export const BACKEND_DEV = 'http://localhost:4000';
export const BACKEND_PROD = 'https://api.staroverlay.com/';
export const BACKEND_STAGE = 'https://dev.api.staroverlay.com/';

type ENV = 'development' | 'production' | 'stage';

export function getEnv(): ENV {
  const { hostname } = location;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'development';
  } else if (hostname === 'widgets.dev.staroverlay.com') {
    return 'stage';
  } else if (hostname === 'widgets.staroverlay.com') {
    return 'production';
  } else {
    throw new Error('Cannot determine execution environment.');
  }
}

export function getBackendURL() {
  const env = getEnv();
  switch (env) {
    case 'development':
      return BACKEND_DEV;
    case 'production':
      return BACKEND_PROD;
    case 'stage':
      return BACKEND_STAGE;
  }
}
