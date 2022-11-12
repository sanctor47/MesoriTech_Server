import Plant from '../models/plant.model';

//get all plants
export const getAllPlants = async () => {
  const data = await Plant.find();
  return data;
};

//create new plant
export const newPlant = async (body) => {
  const data = await Plant.create(body);
  return data;
};

//update single plant
export const updatePlant = async (_id, body) => {
  const data = await Plant.findByIdAndUpdate(
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

//delete single plant
export const deletePlant = async (id) => {
  await Plant.findByIdAndDelete(id);
  return '';
};

//get single plant
export const getPlant = async (id) => {
  const data = await Plant.findById(id);
  return data;
};
