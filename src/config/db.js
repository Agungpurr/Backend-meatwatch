import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

console.log("✅ Loaded DB config:");
console.log("Host:", process.env.DB_HOSTS);
console.log("Port:", process.env.DB_PORT);
console.log("User:", process.env.DB_USER);
console.log("DB Name:", process.env.DB_NAME);

async function connectDB() {
  const pool = await mysql.createPool({
    host: process.env.DB_HOSTS, // ⬅️ Gunakan DB_HOSTS dari Railway
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 10,
  });
  console.log("✅ Database connected successfully!");
  return pool;
}

const db = await connectDB();
export default db;
