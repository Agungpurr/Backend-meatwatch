import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  const pool = await mysql.createPool({
    host: process.env.DB_HOSTS, // pakai DB_HOSTS
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
