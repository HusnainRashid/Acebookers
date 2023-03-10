const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
      title: { 
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      photo: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      likes: { type: Number, default: 0 },
      likers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    {
      timestamps: true,
    });


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
