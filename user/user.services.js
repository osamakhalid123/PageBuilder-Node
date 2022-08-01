const userModel = require('./user.modal');

const listUsers = async () => {
  const users = await userModel.find({});
  return users;
};

const userDetails = async (userId) => {
  const users = await userModel.findOne({ _id: userId });
  return users;
};

const createUser = async (userBody) => {
  const user = new userModel(userBody);
  const userResponse = await user.save();
  return userResponse;
};

const updateUser = async (userBody, userId) => {
  const userResponse = await userModel.updateOne({ _id: userId }, userBody);
  return userResponse;
};

const deleteUser = async () => {};

module.exports = {
  listUsers,
  userDetails,
  createUser,
  updateUser,
  deleteUser,
};
