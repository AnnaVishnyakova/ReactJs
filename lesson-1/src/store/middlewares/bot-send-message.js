import { SEND_MESSAGE, sendMessage } from "../message_store"

export const messagesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            
            //console.log(action);
            if (action.payload.author === "me") {
                setTimeout(() => {
                    store.dispatch(
                        sendMessage(
                            'I am just robot',
                            'robot',
                            action.payload.chatId
                        )
                    );
                }, 3000);
            }
        };
       
        
        
    }

    return next(action);
};