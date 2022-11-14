import Dashboard from '../models/dashboard.model';

//get all dashboards
export const getAllDashboards = async () => {
  const data = await Dashboard.find();
  return data;
};

//create new dashboard
export const newDashboard = async (body) => {
  const data = await Dashboard.create(body);
  return data;
};

//update single dashboard
export const updateDashboard = async (_id, body) => {
  const data = await Dashboard.findByIdAndUpdate(
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

//delete single dashboard
export const deleteDashboard = async (id) => {
  await Dashboard.findByIdAndDelete(id);
  return '';
};

//get single dashboard
export const getDashboard = async (id) => {
  const data = await Dashboard.findById(id);
  return data;
};

//get single dashboard
export const getDashboardByFeild = async (id) => {
  const data = await Dashboard.findOne({ feild: id });
  return data;
};
