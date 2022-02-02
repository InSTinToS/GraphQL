import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    ref: "User",
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
});

export default mongoose.model("Post", Schema);
