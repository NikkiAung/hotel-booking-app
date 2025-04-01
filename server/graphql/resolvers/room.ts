import { getAllRooms } from "../../controllers/room";
import { Room } from "../../types/room";
import { createNewRoom } from "../../controllers/room";

export const roomResolvers = {
  Query: {
    getAllRooms: async () => await getAllRooms(),
  },
  Mutation: {
    createNewRoom: async (_: any, { roomInput }: { roomInput: Room }) =>
      await createNewRoom(roomInput),
  },
};
