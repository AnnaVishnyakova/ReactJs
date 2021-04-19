
import { SEND_MESSAGE } from "./messageType";

export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    },
});
