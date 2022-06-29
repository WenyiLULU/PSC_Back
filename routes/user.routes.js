const router = require("express").Router();
const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const fileUploader = require("../config/cloudinary.config");

// get user infos by id
router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userInfo = await User.findById(userId);

    res.json(userInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update user profile
router.put(
  "/:userId",
  fileUploader.single("userPhoto"),
  async (req, res, next) => {
    const { userId } = req.params;
    console.log("req.body", req.body);
    const {
      username,
      email,
      country,
      city,
      owner,
      sitter,
      pets,
      description,
      experience,
      image,
    } = req.body;
    const newData = {
      username,
      email,
      country,
      city,
      owner,
      sitter,
      pets,
      description,
      experience,
      image,
    };
    console.log("req.file", req.file);
    if (req.file) {
      newData.image = req.file.path;
    }
    console.log("new data:", newData);
    try {
      const user = await User.findByIdAndUpdate(userId, newData);

      res
        .status(201)
        .json({ message: "User profile updated", name: user.username });
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

// change password
router.put("/:userId/password", async (req, res, next) => {
  const { userId } = req.params;
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(userId);
    const { passwordHashed } = user;
    if (bcryptjs.compareSync(currentPassword, passwordHashed)) {
      const randomSalt = bcryptjs.genSaltSync(10);

      const newPasswordHash = bcryptjs.hashSync(newPassword, randomSalt);
      const newPasswordHashed = { passwordHashed: newPasswordHash };
      try {
        const userWithNewKey = await User.findByIdAndUpdate(
          userId,
          newPasswordHashed
        );
        res.status(201).json({
          message: "User profile updated",
          name: userWithNewKey.username,
        });
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json({ message: "Wrong current password", status: "KO" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
