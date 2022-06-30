const { Schema, model } = require("mongoose");
const Place = require("./Place.model");
const Availability = require("./Availability.model");
const User = require("./User.model");
const Pet = require("./Pet.model");

const appointmentSchema = new Schema(
  {
    placeId: {
      type: Schema.Types.ObjectId,
      ref: "Place",
    },
    city: String,
    availabiltyId: {
      type: Schema.Types.ObjectId,
      ref: "Availability",
    },
    startDate: {
      type: Date,
      required: [true, "Please enter a start date"],
    },
    endDate: {
      type: Date,
      required: [true, "Please enter a end date"],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    participant: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],
    // private: boolean,
  },
  {
    timestamps: true,
  }
);

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
