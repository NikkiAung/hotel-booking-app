import { getAllRooms, getRoomById } from "../../controllers/room";
import { Room } from "../../types/room";
import { createNewRoom } from "../../controllers/room";

export const roomResolvers = {
  Query: {
    getAllRooms: async () => await getAllRooms(),
    getRoomById: async (_: any, { roomId }: { roomId: string }) =>
      await getRoomById(roomId),
  },
  Mutation: {
    createNewRoom: async (_: any, { roomInput }: { roomInput: Room }) =>
      await createNewRoom(roomInput),
  },
};
