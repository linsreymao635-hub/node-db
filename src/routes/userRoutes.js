import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);


router.get("/", ProductController.getUsers);
router.post("/", ProductController.createUser);
router.get("/:id", ProductController.getUserById);
router.put("/:id", ProductController.updateUser);
router.delete("/:id", ProductController.deleteUser);

export default router;