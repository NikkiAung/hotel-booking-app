import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect";
dotenv.config({ path: "config/.env.local" });

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4040;

dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
