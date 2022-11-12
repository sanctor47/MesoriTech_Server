import { Schema, model } from 'mongoose';

const domainSchema = new Schema(
  {
    name: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    members:[{ type: Schema.Types.ObjectId, ref: "User" }],
    devices:[{ type: Schema.Types.ObjectId, ref: "Device" }],
    feilds:[{ type: Schema.Types.ObjectId, ref: "Feild" }]
  },
  {
    timestamps: true
  }
);

export default model('Domain', domainSchema);
