import { Schema, model } from 'mongoose';

const feildSchema = new Schema(
  {
    name: { type: String },
    area: { type: Number },
    domain: { type: Schema.Types.ObjectId, ref: "Domain" },
    devices: [{ type: Schema.Types.ObjectId, ref: "Device" }],
    production: { type: Schema.Types.ObjectId, ref: "Production" },
    alrams: [{ type: Schema.Types.ObjectId, ref: "Alarm" }],
  },
  {
    timestamps: true
  }
);

export default model('Feild', feildSchema);
