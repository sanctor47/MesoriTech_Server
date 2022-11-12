import Device from '../models/device.model';
import Reading from '../models/reading.model';
import { v4 as uuidv4 } from 'uuid';
import { addDeviceToFeild, getFeild } from './feild.service';

//get all devices
export const getAllDevices = async () => {
  const data = await Device.find();
  return data;
};

//get all feilds
export const getAllDevicesByDomain = async (domain) => {
  try {
    const data = await Device.find({ domain: domain }).populate("domain").populate("feild");
    return data;
  } catch (error) {
    throw error;
  }
};

//get all feilds
export const getAllDevicesByCreatedBy = async (user) => {
  try {
    const data = await Device.find({ createdBy: user }).populate("feild")
    return data;
  } catch (error) {
    throw error;
  }
};

//get all feilds
export const getAllDevicesByFeild = async (feild) => {
  try {
    const data = await Device.find({ feild: feild }).populate("feild");
    return data;
  } catch (error) {
    throw error;
  }
};

//create new device
export const newDevice = async (body) => {
  try {
    let targetFeild = null
    if (body.feild) {
      console.log(body.feild)
      targetFeild = await getFeild(body.feild)
    }
    const data = {
      name: body.name,
      label: body.label,
      clientId: uuidv4(),
      password: uuidv4(),
      createdBy: body.createdBy,
      feild: body.feild,
    }
    const res = await Device.create(data);
    await addDeviceToFeild(targetFeild._id, res._id)
    return res;
  } catch (error) {
    throw error
  }
};


export const SyncSensors = async (_id, body) => {
  try {
    const device = await Device.findByIdAndUpdate({ _id },
      { sensors: body.sensors },
      { new: true });
  } catch (error) {
    throw error
  }
}

const readignBody = {
  timeStamp: "3294921",
  data: [
    {
      name: "Air Temprature",
      unit: "C",
      value: 24,
    }
  ]
}

export const newReading = async (_id, body) => {
  try {
    const timeStamp = body.timeStamp
    for (let index = 0; index < body.data.length; index++) {
      const element = body.data[index];
      await Reading.create({
        name: element.name,
        unit: element.unit,
        value: element.value,
        device: _id
      })
    }
    return "ok"
  } catch (error) {
    throw error
  }
}

export const getLatestReadign = async (_id, name) => {
  try {
    console.log(name)
    const data = await Reading.findOne({ device: _id, name: name }, {}, { sort: { 'createdAt': -1 } })
    return data
  } catch (error) {
    throw error
  }
}

//update single device
export const updateDevice = async (_id, body) => {
  const data = await Device.findByIdAndUpdate(
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

//delete single device
export const deleteDevice = async (id) => {
  await Device.findByIdAndDelete(id);
  return '';
};

//get single device
export const getDevice = async (id) => {
  const data = await Device.findById(id).populate("feild");
  return data;
};

