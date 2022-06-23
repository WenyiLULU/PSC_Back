const { Schema, model } = require("mongoose");
const User = require('./User.model')

const petSchema = new Schema(
  {
    name: {
      type: String, 
      required: [true, 'Pet name is required.']
    },
    age: Number,
    breed: String,
    img: [String],
    habits: [String],
    specialNeeds: [String],
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    category: {type: String, enum: ["Dog", "Cat"]},
    size: {type: String, enum: ["s", "m", "l"]},
    bestFriend: {type: Schema.Types.ObjectId, ref: "Pet"}
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

module.exports = Pet;
