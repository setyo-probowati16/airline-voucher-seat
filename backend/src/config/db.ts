import Database from "better-sqlite3";
import dotenv from "dotenv";

dotenv.config();
const db = new Database(process.env.DB_NAME || "vouchers.db");
db.pragma("journal_mode = WAL"); //read and write at the same time

export default db;