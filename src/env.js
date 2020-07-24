import dotenv from 'dotenv';

const { error, parsed } = dotenv.config();

if (error) throw error;

/**
 * @type {'production' | 'testing' | 'development'}
 */
export const NODE_ENV = parsed.NODE_ENV;
