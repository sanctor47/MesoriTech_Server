import Feild from '../models/feild.model';

//get all feilds
export const getAllFeilds = async () => {
  const data = await Feild.find();
  return data;
};

//get all feilds
export const getAllFeildsByDomain = async (domain) => {
  try {
    const data = await Feild.find({ domain: domain }).populate("domain");
    return data;
  } catch (error) {
    throw error;
  }
};

//create new feild
export const newFeild = async (body) => {
  try {
    const data = await Feild.create(body);
    return data;
  } catch (error) {
    throw error
  }
};

//update single feild
export const updateFeild = async (_id, body) => {
  const data = await Feild.findByIdAndUpdate(
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

//delete single feild
export const deleteFeild = async (id) => {
  await Feild.findByIdAndDelete(id);
  return '';
};

//get single feild
export const getFeild = async (id) => {
  const data = await Feild.findById(id);
  return data;
};

//update single feild
export const addDeviceToFeild = async (_id, deviceId) => {
  console.log(`adding device ${deviceId} to feild ${_id}`)
  const data = await Feild.findByIdAndUpdate(
    {
      _id
    },
    { $push: { devices: deviceId } },
    {
      new: true
    }
  );
  // const Target = await Feild.findById(_id);
  // Target.devices.push(deviceId);
  // console.log()
  // await Target.save();
  return data;
};