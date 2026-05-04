import userModel from "../models/User.js";
import { BaseController } from "./BaseController.js";

export class UserController extends BaseController {

  get = async (req, res) => {
    try {
      const users = await userModel.get();
      return this.success(res, "Users retrieved successfully", users);
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };

  create = async (req, res) => {
    const { name } = req.body ?? {};

    if (!name) {
      return this.error(res, "Name is required", 400);
    }

    try {
      const id = await userModel.create(name);
      return this.success(res, "User created successfully", { id, name }, 201);
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };

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
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };

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
    } catch (error) {
      return this.error(res, error.message, 500);
    }
  };
}

const userController = new UserController();

export const getUsers = userController.get;
export const createUser = userController.create;
export const updateUser = userController.update;
export const deleteUser = userController.delete;