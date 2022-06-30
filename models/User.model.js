const { Schema, model } = require("mongoose");
const Pet = require("./Pet.model.js");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      lowercase: true,
      trim: true,
    },

    country: {
      type: String,
      trim: true,
      required: [true, "Country is required."],
    },
    city: { type: String, trim: true, required: [true, "City is required."] },
    passwordHashed: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kInj84qNz-MWcXqBgvrt5H8Lzj1w7TZNZQ&usqp=CAU",
    },
    owner: { type: Boolean, default: false },
    sitter: { type: Boolean, default: false },
    pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
    description: String,
    experience: String,
    //payment: Boolean
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
