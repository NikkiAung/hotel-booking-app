import { rooms } from "./data";
import mongoose from "mongoose";
import { Room } from "../models/room";
import * as dotenv from "dotenv";
dotenv.config({ path: "config/.env.local" });

const sendRooms = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    await Room.deleteMany();
    console.log("Rooms deleted successfully.");

    await Room.insertMany(rooms);
    console.log("Rooms seeded successfully.");

    process.exit(); // Exit the process after seeding is complete
  } catch (error) {
    console.log(error);
    process.exit(); // Exit the process after seeding is complete
  }
};

sendRooms();
