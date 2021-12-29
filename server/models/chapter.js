import mongoose from "mongoose";
const Lesson = require('./lesson').schema
const { ObjectId } = mongoose.Schema;

const chapterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: {},
      minlength: 200,
      required: true,
    },
    instructor: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: ObjectId,
      ref: "Course",
      required: true,
    },
    lessons: {
      type : [Lesson]
  }
  },
  { timestamps: true }
);

export default mongoose.model("Chapter", chapterSchema);
