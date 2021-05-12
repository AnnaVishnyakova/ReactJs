import { ADD_CHAT,
  GET_CHAT_SUCCESS,
  GET_CHAT_ERROR,
  GET_CHAT_PENDING, } from "./chatType";
//import { request} from "../../api";
 

export const addChat = (title) => ({
   type: ADD_CHAT,
   payload: { title },
});


export const getChats = () => async (dispatch, getState, request) => {
  dispatch({ type: GET_CHAT_PENDING })

  try {
    const { data } = await request.get("/chats")
    dispatch({ type: GET_CHAT_SUCCESS, payload: data })
  } catch {
    dispatch({ type: GET_CHAT_ERROR })
  }
}


// import axios from 'axios';

// export const getChats = ({ title}) => {
//   return (dispatch, getState) => {
//     dispatch(getChatPending());
//     console.log('current state:', getState());

//     axios
//       .post(`http://localhost:8000/chats`, {
//         title,
//         chatsPending:false
//       })
//       .then(res => {
//         dispatch(getChatSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(getChatError(err.message));
//       });
//   };
// };
// const getChatPending = () => ({
//   type: GET_CHAT_PENDING
// });

// const getChatSuccess = stose => ({
//   type: GET_CHAT_SUCCESS,
//   payload: {
//     ...store
//   }
// });

// const getChatError = error => ({
//   type: GET_CHAT_ERROR,
//   payload: {
//     error
//   }
// });

