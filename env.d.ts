/**
 * @description: This will get us type-completion for the process.env variables
 */
declare namespace NodeJS {
  export interface ProcessEnv {
    APP_DOMAIN: string;
    APP_URL: string;
    AZURE_EMAIL_CONNECTION_STRING: string;
    AZURE_EMAIL_SENDER_ADDRESS: string;
    AZURE_EMAIL_FORM_RECIEVER_ADDRESS: string;
    STORYBLOK_API_TOKEN: string;
    STORYBLOK_API_ENVIRONMENT: 'draft' | 'published';
    NEXT_PUBLIC_STORYBLOCK_API_TOKEN: string;
    MAILTRAP_INBOX_ID: number;
    MAILTRAP_API_TOKEN: string;
    MAILTRAP_ACCOUNT_ID: number;
  }
}
