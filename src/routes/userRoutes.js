import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);


<<<<<<< HEAD
=======
router.get("/", ProductController.getUsers);
router.post("/", ProductController.createUser);
router.get("/:id", ProductController.getUserById);
router.put("/:id", ProductController.updateUser);
router.delete("/:id", ProductController.deleteUser);

>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
export default router;