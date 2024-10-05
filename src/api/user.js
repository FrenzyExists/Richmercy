const db = require('./db')
const boom = require('@hapi/boom')

/**
 *
 * @param {Object} user
 * @param {string} user.username
 * @param {string} user.email
 * @param {string} user.password
 */
const User = function (user) {
  this.username = user.username
  this.email = user.email
  this.password = user.password
}

/**
 *
 * @param {Object} newUser
 * @param {*} result
 */
User.createUser = async (newUser, result) => {
  try {
    const res =
      await db.sql`INSERT INTO user (username, email, password) VALUES  (${newUser.username}, ${newUser.email}, ${newUser.password}) RETURNING * ;`
    console.log('New user got registered: ', json({ res }))
    return result(json({ res }))
  } catch (error) {
    console.log('error: ', error)
    result(boom.internal(error.message), null)
  }
}

/**
 *
 * @param {number} userId
 * @param {*} result
 */
User.removeUser = async (userId, result) => {
  try {
    const res = await db.sql`DELETE FROM user WHERE id = ${userId}`
    console.log(`Bye bye User No. ${userId}!`)
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

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  await User.createUser(user, (err, _data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating a comment :('
      })
    } else {
      console.log('SENDING...')
      res.send(_data)
    }
  })
}

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.remove = async (req, res) => {
  const id = parseInt(req.params.id, 10)
  await User.removeUser(id, (err, _data) => {
    if (err) {
    }
  })
}
