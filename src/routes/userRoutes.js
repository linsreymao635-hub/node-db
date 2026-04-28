import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:id", (req, res) => {
  res.json({ message: `Get user with ID ${req.params.id}` });
});
router.put("/:id", (req, res) => {
  res.json({ message: `Update user with ID ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete user with ID ${req.params.id}` });
});

export default router;