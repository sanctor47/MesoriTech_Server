import { Schema, model } from 'mongoose';

const readingSchema = new Schema(
  {
    name: { type: String },
    unit: { type: String },
    value: { type: Number },
    timestamp: { type: Date },
    device: { type: Schema.Types.ObjectId, ref:"Device" },
  },
  {
    timestamps: true
  }
);

export default model('Reading', readingSchema);
