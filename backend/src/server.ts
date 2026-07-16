import dotenv from "dotenv";
import app from "./app";
import { initializeDatabase } from "./database/init";
import voucherService from "./services/voucher.service";

dotenv.config();

initializeDatabase();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`=== Server running on http://localhost:${PORT} ===`);
});