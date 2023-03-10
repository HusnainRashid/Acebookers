const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  likes:   {type: Number, default: 0, required: true},
  likers:[{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  user_id: { type: mongoose.Schema.Types.ObjectId,
    ref: "User", required: true },
  post_id: { type: mongoose.Schema.Types.ObjectId,
    ref: "Post" }
  }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
