import dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = (process.env.NODE_ENV === 'production') ? '/api/v1' : 'http://localhost:8300/api/v1';
