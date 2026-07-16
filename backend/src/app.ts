import express from "express";
import cors from "cors";
import voucherRoutes from "./routes/voucher.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api", voucherRoutes);

app.use(errorHandler);

//to make sure server alive
app.get("/health", (_, res) => {
  res.json({
    success: true,
    message: "API is running"
  });
});

export default app;