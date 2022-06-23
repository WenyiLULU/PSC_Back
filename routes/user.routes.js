const router = require("express").Router();
const User = require('../models/User.model')

// get user infos by id
router.get("/:userId", async (req, res, next) => {
    try {
        const { userId }= req.params
        const userInfo = await User.findById(userId)
        res.status(200).json({ message: 'User find', name: userInfo.username });

    } catch (error){
        res.status(500).json(error)
    }
    
});

// update user profile
router.put('/:userId', async (req, res, next) => {
    const { userId }= req.params
    const { username, email, country, city, image, owner, sitter, pets, description, experience } = req.body
    const newData = { username, email, country, city, image, owner, sitter, pets, description, experience }
  try {
    const user = await User.findByIdAndUpdate(userId, newData)

    res.status(201).json({ message: 'User profile updated', name: user.username })
  } catch (error) {
    res.status(500).json(error)
  }
})



module.exports = router;