import User from "../models/Users.js";

export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

export const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  Object.assign(user, req.body);
  await user.save();
  res.json(user);
};
