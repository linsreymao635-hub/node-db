import express from "express";
<<<<<<< HEAD
import userRoutes from "./routes/userRoutes.js";
import "./config/db.js";
=======
import userRoutes from "./routes/UserRoutes.js";
import productRoutes from "./routes/ProductRoutes.js"; // 
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

//  Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes); 

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

<<<<<<< HEAD
export default app;

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});
=======
export default app;
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
