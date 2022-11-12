import Soil from '../models/soil.model';

//get all soils
export const getAllSoils = async () => {
  const data = await Soil.find();
  return data;
};

//create new soil
export const newSoil = async (body) => {
  const data = await Soil.create(body);
  return data;
};

//update single soil
export const updateSoil = async (_id, body) => {
  const data = await Soil.findByIdAndUpdate(
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

//delete single soil
export const deleteSoil = async (id) => {
  await Soil.findByIdAndDelete(id);
  return '';
};

//get single soil
export const getSoil = async (id) => {
  const data = await Soil.findById(id);
  return data;
};
