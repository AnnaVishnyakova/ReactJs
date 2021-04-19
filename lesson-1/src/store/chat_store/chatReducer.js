
import { ADD_CHAT } from './chatType';

const initialStore = {
    chats: ['chat 1', 'chat 2', 'chat 3'],
    
};

export const chatReducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...store,
                chats: [...store.chats, action.payload.title],
            };
        }
        
        default:
            return store;
    }
}