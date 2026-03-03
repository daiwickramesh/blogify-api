const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/connect/db");
const userRoutes = require("./src/Router/user");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// User routes
app.use("/api/users", userRoutes);

// Fallback route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));