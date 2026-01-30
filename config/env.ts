import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const BASE_CLIENT_URL = process.env.BASE_CLIENT_URL || 'http://localhost:3000';
const HEADLESS_MODE = process.env.HEADLESS_MODE ? false : process.env.HEADLESS_MODE === 'true'; 
const CI = process.env.CI ? +process.env.CI : 1;
const RETRY_FAILED_TESTS = process.env.RETRY_FAILED_TESTS ? +process.env.RETRY_FAILED_TESTS : 0;


export default {
  BASE_CLIENT_URL,
  HEADLESS_MODE,
    CI,
    RETRY_FAILED_TESTS,
};

