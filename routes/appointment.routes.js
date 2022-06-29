const Appointments = require('../models/Appointment.model')

const router = require('express').Router()

//get all
router.get('/', async (req, res, next) => {
    const allApp = await Appointments.find().populate('participant creator')
    // allApp.populate('creator')
    console.log('all:', allApp)
    res.json(allApp)
  })

//get specific
router.get('/:appointID', async (req, res, next) => {
    const { appointID } = req.params
  
    const app = await Appointments.findById(appointID)
    res.json(app)
  })

//create new
router.post('/create', async (req, res, next) => {
    try {
      const app = await Appointments.create(req.body)
  
      res.status(201).json({ message: 'New appointment created', id: app.id })
    } catch (error) {
      res.status(500).json(error)  
    }
  })

//update
router.put('/:appointID', async (req, res, next) => {
    const {appointID} = req.params
    try {
        const app = await Appointments.findByIdAndUpdate(appointID, req.body)
        res.status(201).json({ message: 'New appointment created', id: app.id })
      } catch (error) {
        res.status(500).json(error)
      }
})

//delete
router.delete('/:appointID', async (req, res, next) => {
    const { appointID } = req.params
  
    await Appointments.findByIdAndDelete(appointID)
    res.status(200).json({ message: 'Appointment deleted' })
  })


module.exports = router;