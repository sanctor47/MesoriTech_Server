import { Schema, model } from 'mongoose';

const deviceSchema = new Schema(
  {
    name: { type: String },
    label: { type: String },
    clientId: { type: String },
    password: { type: String },
    active: { type: Boolean, default: false },
    lastReading: { type: String },
    sensors: [{
      name: { type: String },
      unit: { type: String },
    }],
    location: {
      lat: { type: Number },
      lon: { type: Number },
    },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    feild: { type: Schema.Types.ObjectId, ref: "Feild" },
    domain: { type: Schema.Types.ObjectId, ref: "Domain" },
    isGateway: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

export default model('Device', deviceSchema);
