import { Schema, model } from 'mongoose';

const bedSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Bed', bedSchema);
