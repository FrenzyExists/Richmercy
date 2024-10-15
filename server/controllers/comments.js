import { pool } from '../config/db'
import { Boom } from '@hapi/boom'
import express from 'express'

const app = express()

/**
 *
 * @param {Object} comment
 * @param {string} comment.text
 * @param {number} comment.id
 * @param {Date} comment.createdAt
 */
const Comment = (comment) => {
  this.text = comment.text
  this.comment_id = comment.id
  this.createdAt = comment.createdAt
}

Comment.createComment = async (req, res) => {
  const { text, name, thread_id } = req.body

  try {
    const results = await pool.query(
      'INSERT INTO comments (text, name, thread_id) VALUES ($1, $2, $3) RETURNING *',
      [text, name, thread_id]
    )

    // change this to happi
    res.status(201).json(results.rows[0])
  } catch (error) {
    // next(error)
    res.status(409).json({ error: error.message })
  }
}

Comment.createReply = async (req, res) => {
  const { text, name, thread_id, parent_id } = req.body
  try {
    const results1 = await pool.query(
      'INSERT INTO comments (text, name, thread_id) VALUES ($1, $2, $3) RETURNING *',
      [text, name, thread_id]
    )
    const results2 = await pool.query(
      'INSERT INTO table-reply (parent_comment, reply_comment) VALUES ($1, $2) RETURNING id',
      [parent_id, results1[0].id]
    )
    res.status(201).json(results2.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

Comment.getReplies = async (req, res) => {
  // its almost 2am im tired
  // const results = await pool.query('SELECT id, name, text, thread_id FROM comments JOIN table-reply')
}

Comment.getCommentById = async (req, res) => {}

Comment.getThreadComments = async (req, res) => {}
