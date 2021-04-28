
import { SEND_MESSAGE } from "./messageType";
//import { UPLOAD_MESSAGE } from "./messageType";

export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    }
   
});

// export const uploadMessages = (messages) => ({
//     type: UPLOAD_MESSAGES,
//     payload: messages,
// });
