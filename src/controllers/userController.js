import User from "../models/User.js";
import { BaseController } from "./baseController.js";

class UserController extends BaseController {
  // GET ALL users
  getUsers = async (req, res) => {
    try {
      const users = await User.find();
      this.success(res, "Users retrieved successfully", users);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // GET user by id
  getUserById = async (req, res) => {
    try {
      const user = await User.get(req.params.id);
      if (!user) {
        return this.error(res, "User not found", 404);
      }
      this.success(res, "User retrieved successfully", user);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // CREATE user
  createUser = async (req, res) => {
    try {
      const user = await User.create({ name: req.body.name });
      this.success(res, "User created successfully", user, 201);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // UPDATE user
  updateUser = async (req, res) => {
    try {
      const user = await User.update(req.params.id, { name: req.body.name });
      if (!user) {
        return this.error(res, "User not found", 404);
      }
      this.success(res, "User updated successfully", user);
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };

  // DELETE user
  deleteUser = async (req, res) => {
    try {
      const deleted = await User.delete(req.params.id);
      if (!deleted) {
        return this.error(res, "User not found", 404);
      }
      this.success(res, "User deleted successfully");
    } catch (error) {
      this.error(res, error.message, 500);
    }
  };
}

export default new UserController();