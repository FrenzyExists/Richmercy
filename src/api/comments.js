const db = require('./db')
const boom = require('@hapi/boom')

/**
 *
 * @param {Object} comment
 * @param {string} comment.text
 * @param {number} comment.user_id
 * @param {number} comment.parent_id
 */
const Comment = function (comment) {
  this.text = comment.text
  this.user_id = comment.user_id
  this.parent_id = comment.parent_id
}

/**
 * A Thing
 * @param {Object} newComment - The Comment Object generated from some input
 * @param {string} newComment.text
 * @param {number} newComment.user_id
 * @param {number|undefined} newComment.parent_id
 *
 * @example
 * ```js
 * const pool = createClient();
 * ```
 * @returns {Promise<Object>} A promise showing the newly created comment
 */
Comment.createComment = async (newComment, result) => {
  try {
    /**
     * @constant {QueryResult<QueryResultRow>} res
     */
    const res =
      await db.sql`INSERT INTO comments (text, user_id, parent_id) VALUES (${newComment.text}, ${newComment.user_id}, ${newComment.parent_id}) RETURNING *`
    console.log('New Comment got registered: ', json({ res }))
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

/**
 *
 * @param {number} article_id
 * @param {number} limit
 * @param {number} offset
 * @param {Object} result
 */
Comment.getComment = async (article_id, limit = 10, offset = 0, result) => {
  try {
    const res =
      await db.sql`SELECT comment.text, user.id, user.username, comment.id AS comment_id, comment.parent_id FROM comment INNER JOIN user ON user.id = comment.user_id WHERE comment.article_id = ${article_id} LIMIT ${limit} OFFSET ${offset}`
    console.log('Got some comemnts!')
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

Comment.getReplies = async (commentId, limit = 5, offset = 0, result) => {
  try {
    const res =
      await db.sql`SELECT comment.id AS comment_id, user.id, user.username FROM comment WHERE comment.parent_id = ${commentId} LIMIT ${limit} OFFSET ${offset}`
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

/**
 *
 * @param {number} commentId
 * @param {string} newComment
 * @param {*} result
 * @returns
 */
Comment.editComment = async (commentId, newComment, result) => {
  try {
    const res =
      await db.sql`UPDATE comment SET comment.text = ${newComment} WHERE id = ${commentId} `
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

/**
 *
 * @param {number} commentId
 * @param {*} result
 */
Comment.upvote = async (commentId, result) => {
  try {
    const res =
      await db.sql`UPDATE comment SET comment.vote = comment.vote + 1 WHERE comment.id = ${commentId}`
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

/**
 *
 * @param {number} commentId
 * @param {*} result
 */
Comment.downvote = async (commentId, result) => {
  try {
    const res =
      await db.sql`UPDATE comment SET comment.vote = comment.vote - 1 WHERE comment.id = ${commentId}`
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

/**
 *
 * @param {number} commentId
 * @param {*} result
 */
Comment.removeComment = async (commentId, result) => {
  try {
    const res = await db.sql`DELETE FROM comment WHERE id = ${commentId}`
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

/**
 *
 * @param {Object} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
  }

  const comment = new Comment({
    text: req.body.text,
    parent_id: req.body.parent_id,
    user_id: req.body.user_id
  })

  await Comment.createComment(comment, (err, _data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating a comment :('
      })
    else {
      console.log('SENDING...')
      res.send(_data)
    }
  })
}

/**
 *
 * @param {Object} req
 * @param {Object} req.body
 * @param {number|10} req.body.limit
 * @param {number|0} req.body.offset
 * @param {boolean|false} req.body.includeReplies
 * @param {number|5} req.body.repliesLimit
 * @param {number|0} req.body.repliesOffset
 * @param {Object} req.params
 * @param {number} req.params.id
 * @param {*} res
 */
exports.find = async (req, res) => {
  const id = parseInt(req.params.id, 10)
  await Comment.getComment(id, req.body.limit, req.body.offset, (err, _data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Could not find any comment for this article`
        })
      } else {
        res.status(500).send({
          message: `Error retrieving comments for that article`
        })
      }
    } else res.send(_data)
  })

  if (req.body.includeReplies) {
    await Comment.getReplies(id, req.body.repliesLimit, req.body.repliesOffset, (err, _data) => {
      if (err) {
      } else res.send(_data)
    })
  }
}

/**
 *
 * @param {Object} req
 * @param {*} res
 */
exports.vote = async (req, res) => {
  const id = parseInt(req.params.id, 10)
  await Comment.downvote(id, (err, _data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Could not downvote. Comment #${id} cannot be not found.`
        })
      } else {
        res.status(500).send({
          message: ``
        })
      }
    } else {
      if (req.body.vote === -1) {
        res.send(_data)
      } else {
      }
    }
  })

  await Comment.upvote(id, (err, _data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Could not upvote. Comment #${id} cannot be not found.`
        })
      } else if (err.kind === 'missing_data') {
        res.status(400).send({
          message: `Missing JSON object`
        })
      } else {
        res.status(500).send({
          message: ``
        })
      }
    } else {
      if (req.body.vote === -1) {
        res.send(_data)
      } else {
      }
    }
  })
}

/**
 *
 * @param {Object} req
 * @param {*} res
 */
exports.edit = async (req, res) => {
  await Comment.editComment(req.body.id, req.body.comment, (err, _data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: ``
        })
      } else if (err.kind === 'missing_data') {
        res.status(400).send({
          message: ``
        })
      } else {
        res.status(500).send({
          message: ``
        })
      }
    } else {
      res.send(_data)
    }
  })
}

/**
 *
 * @param {Object} req
 * @param {*} res
 */
exports.remove = async (req, res) => {
  const id = parseInt(req.params.id, 10)
  await Comment.removeComment(id, (err, _data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: ``
        })
      } else {
        res.status(500).send({
          message: ``
        })
      }
    } else {
      res.send(_data)
    }
  })
}
