import { Client, Databases, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6639eaee0037a6356d84'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
