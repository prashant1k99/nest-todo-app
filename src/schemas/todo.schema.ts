import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    description: { type: String, required: true },
  },
  { timestamps: true },
);
