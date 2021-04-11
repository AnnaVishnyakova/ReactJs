import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const initialState = {
    chat: {
        chats: ['chat 1'],
        messages: {
            0: [
                { text: 'Hello world', author: 'me' },
                { text: 'How are you?', author: 'me' },
            ],
        },
    },
};

const store = createStore(
    reducers,
    initialState,
   
    composeWithDevTools()
);

export { store };
