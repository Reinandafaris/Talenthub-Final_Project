import { Schema } from "mongoose";
import mongoose from "mongoose";

const menuSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    categorySlug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Menu", menuSchema);
