import { Schema, model } from 'mongoose';

const soilSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Soil', soilSchema);
