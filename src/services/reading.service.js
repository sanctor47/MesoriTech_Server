import Reading from '../models/reading.model';

//get all readings
export const getAllReadings = async () => {
  const data = await Reading.find();
  return data;
};

//create new reading
export const newReading = async (body) => {
  const data = await Reading.create(body);
  return data;
};

export const getLineChartData = async (deviceId, sensor) => {
  try {
    const data = await Reading.find({ name: sensor, device: deviceId })
    return data
  } catch (error) {
    throw error
  }
}

//update single reading
export const updateReading = async (_id, body) => {
  const data = await Reading.findByIdAndUpdate(
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

//delete single reading
export const deleteReading = async (id) => {
  await Reading.findByIdAndDelete(id);
  return '';
};

//get single reading
export const getReading = async (id) => {
  const data = await Reading.findById(id);
  return data;
};
