const router = require("express").Router();
// const mongoose = require("mongoose");
const Pet = require("../models/Pet.model");

// all the pets
router.get("/", async (req, res, next) => {
  const pets = await Pet.find();
  res.json(pets);
});

// Create a new pet
router.post("/create", async (req, res, next) => {
  // const userObjectId = mongoose.Types.ObjectId(userId);
  // console.log("Owner Id: ", userObjectId);
  try {
    console.log("Trying to add a pet: ", req.body);
    const pet = await Pet.create(req.body);

    res.status(201).json({ message: "New pet added", id: pet.id });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json(error);
  }
});

// one pet
router.get("/:petId", async (req, res, next) => {
  const { petId } = req.params;
  const pet = await Pet.findById(petId);
  res.json(pet);
});

// Update a pet
router.put("/:petId", async (req, res, next) => {
  const { petId } = req.params;
  // const { name, ...rest} = req.body

  // const newData = {}

  // if (name !== '') {
  //   newData.name = name.trim()
  // }

  // if (tagline !== '') {
  //   newData.tagline = tagline.trim()
  // }

  // if (volume !== '0') {
  //   newData.volume = parseFloat(volume)
  // }

  try {
    const pet = await Pet.findByIdAndUpdate(petId, req.body);
    res.status(200).json({ message: "Pet info updated" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a pet
router.delete("/:petId", async (req, res, next) => {
  const { petId } = req.params;

  await Pet.findByIdAndDelete(petId);
  res.status(200).json({ message: `your pet said goodbye` });
});

module.exports = router;
