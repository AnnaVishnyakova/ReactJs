import { combineReducers, createStore,applyMiddleware,compose } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import {messageReducer} from "./message_store";
import {chatReducer} from "./chat_store";
import {profileReducer} from "./profile_store";
import { messagesMiddleware} from "./middlewares"

// const initialState = {
//     chat: {
//         chats: ['chat 1'],
//         messages: {
//             0: [
//                 { text: 'Hello world', author: 'me' },
//                 { text: 'How are you?', author: 'me' },
//             ],
//         },
//     },
// };

export const reducers = combineReducers({
   messages: messageReducer,
    chat: chatReducer,
   profile: profileReducer,
    
    // initialState,
   
    // composeWithDevTools()
}
);
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(messagesMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : () => {},
      ),
    
  )