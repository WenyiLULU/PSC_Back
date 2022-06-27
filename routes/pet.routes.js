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
  const { name, age, category, size, userId } = req.body;
  console.log("body from frontend: ", req.body);
  // const userObjectId = mongoose.Types.ObjectId(userId);
  // console.log("Owner Id: ", userObjectId);
  try {
    const pet = await Pet.create({
      name: name.trim(),
      age: parseInt(age),
      category: category.trim(),
      size: size.trim(),
      owner: userId,
    });

    res.status(201).json({ message: "New pet added", pet });
  } catch (error) {
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
    res.status(200).json({ message: "Pet info updated", id: pet.id });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a pet
router.delete("/:petId", async (req, res, next) => {
  const { petId } = req.params;

  await Pet.findByIdAndDelete(petId);
  res.status(200).json({ message: `${pet.name} said goodbye` });
});

module.exports = router;
