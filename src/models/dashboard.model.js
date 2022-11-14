import { Schema, model } from 'mongoose';

const dashboardSchema = new Schema(
  {
    name: { type: String },
    feild: { type: Schema.Types.ObjectId, ref: "Feild" },
    domain: { type: Schema.Types.ObjectId, ref: "Domain" },
    dataObj:{
      soilQuality:{
        index: { type: Number},
      }
    }
  },
  {
    timestamps: true
  }
);

export default model('Dashboard', dashboardSchema);
