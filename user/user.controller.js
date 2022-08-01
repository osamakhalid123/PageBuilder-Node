const { createUser, listUsers, userDetails, updateUser, deleteUser } = require('./user.services');

const list = async (req, res) => {
  const users = await listUsers();
  res.json(users);
};

const details = async (req, res) => {
  const { userId } = req.params;
  const details = await userDetails(userId);
  res.json(details);
};

const create = async (req, res) => {
  const userBody = req.body;
  const user = await createUser(userBody);
  res.json(user);
};

const update = async (req, res) => {
  const { userId } = req.params;
  const userBody = req.body;
  const updatedUser = await updateUser(userBody, userId);
  res.json(updatedUser);
};

const deleteUserRecord = async (req, res) => {
  const { userId } = req.params;
};

module.exports = {
  list,
  details,
  create,
  update,
  deleteUserRecord,
};
