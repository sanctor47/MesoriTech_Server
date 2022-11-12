import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    role: { type: String },
    domain: { type: Schema.Types.ObjectId, ref: "Domain" },
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
