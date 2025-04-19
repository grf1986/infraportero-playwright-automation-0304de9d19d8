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

const resolveEnvVar = (baseKey: string): string => {
    if (env === 'acc') return getEnvVar(`${baseKey}_ACC`);
    if (env === 'dev') return getEnvVar(`${baseKey}_DEV`);
    return getEnvVar(baseKey);
};


export const envVariables = {
    testEnv: resolveEnvVar('ENV_URL'),
    accEnv: resolveEnvVar('ENV_URL'),

};

console.log(`Loaded environment: ${env}`);
