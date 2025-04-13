import dotenv from 'dotenv';

// Load environment variables from the .env file based on the current environment
const env = process.env.NODE_ENV || 'test'; // Default to 'test' if NODE_ENV is not set
dotenv.config({ path: `.env.${env}` });

// Function to get a string value or throw an error if it's not defined
const getEnvVar = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not defined.`);
    }
    return value;
};

// Export the environment variables for use in other parts of the application
export const envVariables = {
    Appfactory: env === 'acc' ? getEnvVar('APP_FACTORY_URL_ACC') : getEnvVar('APP_FACTORY_URL'),
    AanvragenApp: env === 'acc' ? getEnvVar('AANVRAGEN_APP_URL_ACC') : getEnvVar('AANVRAGEN_APP_URL'),
    BUKApp: process.env.BUK_APP_URL || '', // Optional variable, use empty string if not defined
    Authorization_Endpoint: getEnvVar('AUTHORIZATION_ENDPOINT'),
    Access_Token_Endpoint: getEnvVar('ACCESS_TOKEN_ENDPOINT'),
    Token_revocation_Endpoint: getEnvVar('TOKEN_REVOCATION_ENDPOINT'),
    JWKS_Endpoint: getEnvVar('JWKS_ENDPOINT'),
    Token_introspection_Endpoint: getEnvVar('TOKEN_INTROSPECTION_ENDPOINT'),
    Userinfo_Endpoint: getEnvVar('USERINFO_ENDPOINT'),
};

console.log(`Loaded environment: ${env}`);
