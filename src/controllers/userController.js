import { BaseController } from "./baseController.js";
import User from "../models/user.js";

class UserController extends BaseController {
  constructor() {
    super();
  }

  getUsers = async (req, res) => {
    try {
      const users = await User.getAll();
      this.success(res, "Users retrieved successfully", users);
    } catch (error) {
      this.error(res, error.message || "Unable to retrieve users", 500);
    }
  };

  createUser = async (req, res) => {
    const name = req.body.name;
    try {
      const user = await User.create(name);
      this.success(res, "User created successfully", user, 201);
    } catch (error) {
      this.error(res, error.message || "Unable to create user", 500);
    }
  };

  getUserById = async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.getById(id);
      if (!user) return this.error(res, "User not found", 404);
      this.success(res, "User retrieved successfully", user);
    } catch (error) {
      this.error(res, error.message || "Unable to retrieve user", 500);
    }
  };

  updateUser = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    try {
      const user = await User.update(id, name);
      if (!user) return this.error(res, "User not found", 404);
      this.success(res, "User updated successfully", user);
    } catch (error) {
      this.error(res, error.message || "Unable to update user", 500);
    }
  };

  deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
      const deleted = await User.delete(id);
      if (!deleted) return this.error(res, "User not found", 404);
      this.success(res, "User deleted successfully");
    } catch (error) {
      this.error(res, error.message || "Unable to delete user", 500);
    }
  };
}

export default new UserController();