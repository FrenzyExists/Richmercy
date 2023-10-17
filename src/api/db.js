import { VercelPool, createPool } from '@vercel/postgres';

    /**
     * @returns VercelPool
     */
    const pool = createPool();

module.exports = pool