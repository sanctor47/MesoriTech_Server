import { Schema, model } from 'mongoose';

const plantSchema = new Schema(
  {
    name: { type: String },
    type: { type: String },
    imgURL: { type: String },
    airParams: {
      params: {
        minTemp: { type: Number },
        maxTemp: { type: Number },
        minHum: { type: Number },
        maxHum: { type: Number },
      }
    },
    soilParams: {
      type: { type: String },
      minOrganicMatter: { type: Number },
      params: {
        minPh: { type: Number },
        maxPh: { type: Number },
        optimalEC: { type: Number },
      }
    },
    water: {
      params: {
        minPh: { type: Number },
        maxPh: { type: Number },
        maxECw: { type: Number },
        maxTDS: { type: Number },
        maxSAR: { type: Number },
        maxChloride: { type: Number },
        maxBoron: { type: Number },
        maxNitrate: { type: Number },
        maxBicarbonate: { type: Number },
      }
    },

  },
  {
    timestamps: true
  }
);

export default model('Plant', plantSchema);
