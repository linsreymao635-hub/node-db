<<<<<<< HEAD
import User from "../models/User.js";
import { BaseController } from "./baseController.js";

class UserController extends BaseController {
  // GET ALL users
  getUsers = async (req, res) => {
    try {
      const users = await User.find();
      this.success(res, "Users retrieved successfully", users);
=======
import userModel from "../models/User.js";
import { BaseController } from "./BaseController.js";

export class UserController extends BaseController {

  get = async (req, res) => {
    try {
      const users = await userModel.get();
      return this.success(res, "Users retrieved successfully", users);
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };
<<<<<<< HEAD

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
=======

  create = async (req, res) => {
    const { name } = req.body ?? {};

    if (!name) {
      return this.error(res, "Name is required", 400);
    }

    try {
      const id = await userModel.create(name);
      return this.success(res, "User created successfully", { id, name }, 201);
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };

<<<<<<< HEAD
  // UPDATE user
  updateUser = async (req, res) => {
    try {
      const user = await User.update(req.params.id, { name: req.body.name });
      if (!user) {
        return this.error(res, "User not found", 404);
      }
      this.success(res, "User updated successfully", user);
=======
  update = async (req, res) => {
    const id = Number(req.params?.id);
    const { name } = req.body ?? {};

    if (!Number.isFinite(id)) {
      return this.error(res, "Invalid user id", 400);
    }

    if (!name) {
      return this.error(res, "Name is required", 400);
    }

    try {
      const affectedRows = await userModel.update(id, name);

      if (!affectedRows) {
        return this.error(res, "User not found", 404);
      }

      return this.success(res, "User updated successfully", { id, name });
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };

<<<<<<< HEAD
  // DELETE user
  deleteUser = async (req, res) => {
    try {
      const deleted = await User.delete(req.params.id);
      if (!deleted) {
        return this.error(res, "User not found", 404);
      }
      this.success(res, "User deleted successfully");
=======
  delete = async (req, res) => {
    const id = Number(req.params?.id);

    if (!Number.isFinite(id)) {
      return this.error(res, "Invalid user id", 400);
    }

    try {
      const affectedRows = await userModel.delete(id);

      if (!affectedRows) {
        return this.error(res, "User not found", 404);
      }

      return this.success(res, "User deleted successfully", { id });
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };
}

<<<<<<< HEAD
export default new UserController();
=======
const userController = new UserController();

export const getUsers = userController.get;
export const createUser = userController.create;
export const updateUser = userController.update;
export const deleteUser = userController.delete;
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
