const Comments = require('../models/Comment.model')

const router = require('express').Router()

//get all
router.get('/', async (req, res, next) => {
    const allComm = await Comments.find()
    res.json(allComm)
  })

//get specific
router.get('/:commentID', async (req, res, next) => {
    const { commentID } = req.params
  
    const comment = await Comments.findById(commentID)
    res.json(comment)
  })

//create new
router.post('/create', async (req, res, next) => {
    try {
      const comment = await Comments.create(req.body)
  
      res.status(201).json({ message: 'New availability created', id: comment.id })
    } catch (error) {
      res.status(500).json(error)
    }
  })

//update
router.put('/:commentID', async (req, res, next) => {
    const {commentID} = req.params
    try {
        const comment = await Comments.findByIdAndUpdate(commentID, req.body)
        res.status(201).json({ message: 'New availability created', id: comment.id })
      } catch (error) {
        res.status(500).json(error)
      }
})

//delete
router.delete('/:commentID', async (req, res, next) => {
    const { commentID } = req.params
  
    await Comments.findByIdAndDelete(commentID)
    res.status(200).json({ message: 'Availability deleted' })
  })


module.exports = router;