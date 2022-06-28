const Avail = require('../models/Availability.model')

const router = require('express').Router()

//get all
router.get('/', async (req, res, next) => {
    const allAvail = await Avail.find().populate('author')
    console.log("Hello!", allAvail)
    res.json(allAvail)
  })

//get specific
router.get('/:availId', async (req, res, next) => {
    const { availId } = req.params
  
    const avail = await Avail.findById(availId).populate('author')
    res.json(avail)
  })

//create new
router.post('/create', async (req, res, next) => {
    try {
      console.log('Hello!')
      const avail = await Avail.create(req.body)
  
      res.status(201).json({ message: 'New availability created', id: avail.id })
    } catch (error) {
      res.status(500).json(error)
    }
  })

//update
router.put('/:availID', async (req, res, next) => {
    const {availID} = req.params
    try {
        const avail = await Avail.findByIdAndUpdate(availID, req.body)
        res.status(201).json({ message: 'New availability created', id: avail.id })
      } catch (error) {
        res.status(500).json(error)
      }
})

//delete
router.delete('/:availID', async (req, res, next) => {
    const { availID } = req.params
  
    await Avail.findByIdAndDelete(availID)
    res.status(200).json({ message: 'Availability deleted' })
  })

module.exports = router;