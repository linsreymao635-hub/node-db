import express from "express";
import userRoutes from "./routes/userRoutes.js";
import "./config/db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});