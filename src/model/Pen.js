import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const Pen = new Schema(
  {
    color: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
export default mongoose.model(`Pen`, Pen, `Pen`);
