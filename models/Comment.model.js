const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the comment model to whatever makes sense in this case
const commentSchema = new Schema(
  {
    commentContent: {
      type: String,
      required: [true, 'Please type a comment']
    },
    authorId : {
        type: Schema.Types.ObjectId, ref: 'User',
    },
    rating: {
        type: Number,
        default: '0'
    },
    targetUser: {
        type: Schema.Types.ObjectId, ref: 'User',
    },
    // targetPlace: {
    //     type: Schema.Types.ObjectId, ref: 'Place',
    // }

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
