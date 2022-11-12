import Bed from '../models/bed.model';

//get all beds
export const getAllBeds = async () => {
  const data = await Bed.find();
  return data;
};

//create new bed
export const newBed = async (body) => {
  const data = await Bed.create(body);
  return data;
};

//update single bed
export const updateBed = async (_id, body) => {
  const data = await Bed.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single bed
export const deleteBed = async (id) => {
  await Bed.findByIdAndDelete(id);
  return '';
};

//get single bed
export const getBed = async (id) => {
  const data = await Bed.findById(id);
  return data;
};
