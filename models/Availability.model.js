const { Schema, model } = require("mongoose");
const User = require('./User.model')

// TODO: Please make sure you edit the availability model to whatever makes sense in this case
const availabilitySchema = new Schema(
  {
    startDate: {
        type: Date, 
        required: [true, 'Please enter a start date']},
    endDate: {
        type: Date, 
        required: [true, 'Please enter a end date']},
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    actionType: {
        type: String,
        enum: ['offer', 'request']},
    pets: [ String ],
    city: String,
    // place: Schema.Types.ObjectId, ref: 'Place',
  },
//   {
//     // this second object adds extra properties: `createdAt` and `updatedAt`
//     timestamps: true,
//   }
);

const Availability = model("Availability", availabilitySchema);

module.exports = Availability;
