import Domain from '../models/domain.model';

//get all domains
export const getAllDomains = async () => {
  const data = await Domain.find();
  return data;
};

//create new domain
export const newDomain = async (body) => {
  const data = await Domain.create(body);
  return data;
};

//update single domain
export const updateDomain = async (_id, body) => {
  const data = await Domain.findByIdAndUpdate(
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

//delete single domain
export const deleteDomain = async (id) => {
  await Domain.findByIdAndDelete(id);
  return '';
};

//get single domain
export const getDomain = async (id) => {
  const data = await Domain.findById(id);
  return data;
};
