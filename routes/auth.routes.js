const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('../middleware/jwt.middleware')

const User = require('../models/User.model')

const router = require('express').Router()

router.post('/signup', async (req, res, next) => {
  const { username, email, password, country, city } = req.body
  
  if (!username || !email || !password || !country ||!city) {
    res.status(403).json({ message: 'All fields are mandatory. Please fill them all.' });
    return;
  }
  const newUser = { username, email, country, city}

  const randomSalt = bcryptjs.genSaltSync(10)

  const passwordHash = bcryptjs.hashSync(password, randomSalt)

  newUser.passwordHashed = passwordHash
  try {
    await User.create(newUser)
    res.status(201).json({ message: 'New user created', status: 'OK' })
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(403).json({ message: 'Email is already in use', status: 'KO' })
    } else {
      res.status(500).json({ message: error, status: 'KO' })
    }
  }
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  
  const user = await User.findOne({ email })

  if (user === null) {
    res.status(404).json({ message: 'User not found', status: 'KO' })
  } else {
    const { _id, passwordHashed, createdAt, updatedAt } = user
    if (bcryptjs.compareSync(password, passwordHashed)) {
      const tempUser = { _id, email, createdAt, updatedAt }
      //delete tempUser.passwordHash
      const token = jwt.sign(tempUser, process.env.TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: '6h',
      })
      res.status(200).json({tempUser, token })
    } else {
      res.status(403).json({ message: 'Wrong password', status: 'KO' })
    }
  }
})

router.get('/verify', isAuthenticated, (req, res, next) => {
  // <== CREATE NEW ROUTE

  // If JWT token is valid the payload gets decoded by the
  // isAuthenticated middleware and made available on `req.payload`
  console.log(`req.payload`, req.payload)

  // Send back the object with user data
  // previously set as the token payload
  res.status(200).json(req.payload)
})

module.exports = router