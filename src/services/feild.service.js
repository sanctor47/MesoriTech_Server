import Feild from '../models/feild.model';

//get all feilds
export const getAllFeilds = async () => {
  const data = await Feild.find();
  return data;
};

//get all feilds
export const getAllFeildsByDomain = async (domain) => {
  try {
    const data = await Feild.find({ domain: domain }).populate("domain").populate("devices");
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
  const data = await Feild.findById(id).populate("domain").populate("devices");
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
  return data;
};

//update single feild
export const RemoveDeviceFromFeild = async (_id, deviceId) => {
  console.log(`adding device ${deviceId} to feild ${_id}`)
  const data = await Feild.findByIdAndUpdate(
    {
      _id
    },
    { $pull: { devices: deviceId } },
    {
      new: true
    }
  );
  return data;
};

//update single feild
export const ChangeDeviceFeild = async (fromId, toId, deviceId) => {
  console.log(`changing device ${deviceId} from feild: ${fromId}to feild ${toId}`)
  const Target = await Feild.findByIdAndUpdate(
    {
      _id: fromId
    },
    { $pull: { devices: deviceId } },
    {
      new: true
    }
  );
  const Destination = await Feild.findByIdAndUpdate(
    {
      _id: toId
    },
    { $push: { devices: deviceId } },
    {
      new: true
    }
  );
  return Destination;
};