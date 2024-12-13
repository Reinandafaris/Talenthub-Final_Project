import express from "express";
import connectDB from "./lib/connectDB.js";
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

app.listen(8000, () => {
  connectDB();
  console.log("Server is running");
});
