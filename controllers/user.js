const User = require('../models/user')
async function handleGetUsers (req, res) {
    const users = await User.find({});
    return res.json(users);
}

async function handleGetUserById (req, res) {
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function handleUpdateById (req, res) {
    await User.findByIdAndUpdate(req.params.id, { age: 20 });
    return res.status(202).json({ status: "Successfully changed" });
}

async function handleDeleteById (req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.status(202).json({ status: "Successfully deleted" });
}

async function handlePostUser (req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.age
  ) {
    return res.status(400).json({ status: "error", message: "Bad Request" });
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    age: body.age,
  });

  console.log(result);
  return res.status(201).json({ status: "success", id: result._id});
}

module.exports = {
    handleGetUsers,
    handleGetUserById,
    handleUpdateById,
    handleDeleteById,
    handlePostUser,
}