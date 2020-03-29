const env = process.env.NODE_ENV || 'development';

const { hostname } = window.location;

export const BASE_URL = env === 'development' ? `http://${hostname}:7001` : '';