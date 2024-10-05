// import { createPool } from '@vercel/postgres'
// const boom = require('@hapi/boom')

// /**
//  * @returns VercelPool
//  */
// const pool = createPool()

// /**
//  * Init class that initializes the datababase and creates the tables... or something like that idk
//  */
// const Init = function () {}

// /**
//  *
//  * @param {*} result
//  * @returns
//  */
// Init.generateCommentTable = async (result) => {
//   try {
//     const res =
//       await pool.sql`CREATE TABLE IF NOT EXISTS comment ( id SERIAL PRIMARY KEY, text VARCHAR(255) NOT NULL, user_id INTEGER REFERENCES user(id), parent_id INTEGER REFERENCES comment(id), votes INTEGER DEFAULT 0, article_id INTEGER );`
//     return result(json({ res }))
//   } catch (error) {
//     console.log('error: ', error)
//     result(boom.internal(error.message), null)
//   }
// }

// /**
//  *
//  * @param {*} result
//  * @returns
//  */
// Init.generateUserTable = async (result) => {
//   try {
//     const res =
//       await pool.sql`CREATE TABLE user ( id SERIAL PRIMARY KEY, username VARCHAR(255) UNIQUE NOT NULL, email VARCHAR(255) NOT NULL, user_pic BITEA );`
//     return result(json({ res }))
//   } catch (error) {
//     console.log('error: ', error)
//     result(boom.internal(error.message), null)
//   }
// }

// module.exports = pool
// module.exports = Init
