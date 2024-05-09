import { mongoose } from "mongoose";

const conversationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.ObjectId,
  },
});
