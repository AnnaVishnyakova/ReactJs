import { ADD_CHAT } from "./chatType";

export const addChat = (title) => ({
   type: ADD_CHAT,
   payload: { title },
});