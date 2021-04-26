import { SEND_MESSAGE } from './messageType';

const initialStore = {
    messages: {
        0: [
            { text: 'Hello world', author: 'me' },
            { text: 'Как дела у тебя?', author: 'me' },
        ],
        1: [{ text: "Привет! Это второй чат!", author: 'me' }],
        2: [{ text: "Привет! это третий чат!", author: 'me' }],
    },
};

export const messageReducer = (store = initialStore, action) => {
    switch (action.type) {
        
        case SEND_MESSAGE: {
            const { chatId, text, author } = action.payload;
            const prevMessages = store.messages[chatId] || [];

            return {
                ...store,
                messages: {
                    ...store.messages,
                    [chatId]: [...prevMessages, { text, author }],
                },
            };
        }

       
        default:
            return store;
    }
}