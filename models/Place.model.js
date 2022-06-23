const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the place model to whatever makes sense in this case
const placeSchema = new Schema(
  {
    placeName: {
      type: String,
      unique: true,
      required: [true, 'Name is required']
    },
    size: String,
    description: String,
    placeType: {
        type: String,
        enum: ['park', 'woods', 'dog park', 'beach', 'lake']
    },
    address: String,
    city: {type: String, required:[true, 'Please provide a city']}
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
