import { Room as RoomType } from "../types/room";
import { Room } from "../models/room";
import errorHandler from "../middleware/errorHandler";

export const getAllRooms = errorHandler(async () => {
  const rooms = await Room.find();
  return rooms;
});

export const createNewRoom = errorHandler(async (roomInput: RoomType) => {
  const newRoom = await Room.create(roomInput);
  return newRoom;
});

export const getRoomById = errorHandler(async (roomId: string) => {
  const room = await Room.findById(roomId);
  if (!room) {
    throw new Error("Room not found");
  }
  return room;
});

export const updateRoom = errorHandler(
  async (roomId: string, roomInput: RoomType) => {
    const room = await Room.findById(roomId);
    if (!room) {
      throw new Error("Room not found");
    }
    await room.set(roomInput).save();
    return "Room is updated.";
  }
);

export const deleteRoom = errorHandler(async (roomId: string) => {
  const room = await Room.findById(roomId);
  if (!room) {
    throw new Error("Room not found");
  }

  await room.deleteOne();
  return "Room is deleted.";
});
