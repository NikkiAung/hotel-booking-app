import {
  getAllRooms,
  getRoomById,
  createNewRoom,
  updateRoom,
} from "../../controllers/room";
import { Room } from "../../types/room";

export const roomResolvers = {
  Query: {
    getAllRooms: async () => await getAllRooms(),
    getRoomById: async (_: any, { roomId }: { roomId: string }) =>
      await getRoomById(roomId),
  },
  Mutation: {
    createNewRoom: async (_: any, { roomInput }: { roomInput: Room }) =>
      await createNewRoom(roomInput),
    updateRoom: async (
      _: any,
      { roomId, roomInput }: { roomId: string; roomInput: Room }
    ) => await updateRoom(roomId, roomInput),
  },
};
