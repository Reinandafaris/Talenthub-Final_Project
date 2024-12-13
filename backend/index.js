import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import menuRouter from "./routes/menu.route.js";
import categoryRouter from "./routes/category.route.js";
import detailRouter from "./routes/detail.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/menu", menuRouter);
app.use("/category", categoryRouter);
app.use("/detail", detailRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

const PORT = process.env.PORT || 5300;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(
        `Server is running on port http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
