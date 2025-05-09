declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_STRAPI_API_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
