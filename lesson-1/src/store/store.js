import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {messageReducer} from "./message_store";
import {chatReducer} from "./chat_store";
import {profileReducer} from "./profile_store";
import { messagesMiddleware} from "./middlewares"

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['chat', 'profile','messages'],
    
};
export const store = createStore(
    persistReducer(
        persistConfig,
        combineReducers({
            router: connectRouter(history),
            messages: messageReducer,
             chat: chatReducer,
            profile: profileReducer,
             
         }),
    ),
   
    
    compose(
        applyMiddleware(messagesMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : () => {},
      ),
    
  )
  export const persistor = persistStore(store)