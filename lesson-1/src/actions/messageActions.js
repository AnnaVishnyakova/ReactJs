export const SEND_MESSAGE = '@@messages/SEND_MESSAGE';

export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    },
});
