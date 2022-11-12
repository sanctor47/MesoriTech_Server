import Sensor from '../models/sensor.model';

//get all sensors
export const getAllSensors = async () => {
  const data = await Sensor.find();
  return data;
};

//create new sensor
export const newSensor = async (body) => {
  const data = await Sensor.create(body);
  return data;
};

//update single sensor
export const updateSensor = async (_id, body) => {
  const data = await Sensor.findByIdAndUpdate(
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

//delete single sensor
export const deleteSensor = async (id) => {
  await Sensor.findByIdAndDelete(id);
  return '';
};

//get single sensor
export const getSensor = async (id) => {
  const data = await Sensor.findById(id);
  return data;
};
