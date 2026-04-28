import User from "../models/User.js";

class UserController {

  // public method: get users
  static async getUsers(req, res) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // public method: create user
  static async createUser(req, res) {
    try {
      const { name } = req.body; // destructuring
      const result = await User.create(name);

      res.json({
        message: "User created",
        id: result.insertId,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default UserController;