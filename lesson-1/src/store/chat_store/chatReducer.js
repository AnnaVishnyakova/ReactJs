
import { store } from '../store';
import { ADD_CHAT,
    GET_CHAT_SUCCESS,
    GET_CHAT_ERROR,
    GET_CHAT_PENDING,
 } from './chatType';

const initialState = {
    chats: [ ],
    
    // chats: [
    //             {title:'chat 1'},
    //             {title:'chat 2'},
    //             {title:'chat 3'}
    //         ],
    chatsPending:false,
    error: null,
    
};


export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, action.payload.title],
            };
        }
        case GET_CHAT_PENDING:{
            return {
                ...state,
                chatsPending: true,
                
            };
        }
        case GET_CHAT_ERROR:{
            return {
                ...state,
                chatsPending:false,
                error: action.payload
               
            }
        }
        case GET_CHAT_SUCCESS:{
            return {
                ...state,
                chatsPending: false,
                chats:action.payload
            }
        }
        default:
            return state;
    }
}

// export const chatReducer = (store = initialStore, action) => {
//     switch (action.type) {
//         case ADD_CHAT: {
//             return {
//                 ...store,
//                 chats: [...store.chats, action.payload.title],
//             };
//         }
//         case GET_CHAT_PENDING:{
//             return {
//                 ...store,
//                 chatsPending: true,
                
//             };
//         }
//         case GET_CHAT_ERROR:{
//             return {
//                 ...store,
//                 chatsPending:false,
//                 error: action.payload
               
//             }
//         }
//         case GET_CHAT_SUCCESS:{
//             return {
//                 ...store,
//                 chatsPending: false,
//                 chats:action.payload
//             }
//         }
//         default:
//             return store;
//     }
// }


// const initialStore = {
//     chats: [
//         {title:'chat 1'},
//         {title:'chat 2'},
//         {title:'chat 3'}
//     ],
    
// };

// export const chatReducer = (state = initialStore, action) => {
//     switch (action.type) {
//         case ADD_CHAT: {
//             return {
//                 ...state,
//                 chats: [...state.chats,{title:payload}],
//             };
//         }
        
//         default:
//             return state;
//     }
// }