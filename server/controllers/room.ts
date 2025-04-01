import { Room as RoomType } from "../types/room";
import { Room } from "../models/room";

export const getAllRooms = async () => {
  const rooms = await Room.find();
  return rooms;
};

export const createNewRoom = async (roomInput: RoomType) => {
  const newRoom = await Room.create(roomInput);
  return newRoom;
};
