import User from "../models/Users.js";

// get all users with try-catch for error handling
export const getUsers = async (req, res) => {
  try {
      const users = await User.find().select("-password");
      res.json(users);
  } catch (error) {
      res.status(500).json({ message: "Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
      const user = await User.findById(req.params.id).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: "User deleted" });
  } catch (error) {
      res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      Object.assign(user, req.body);
      await user.save();
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: "Server error" });
  }
};
