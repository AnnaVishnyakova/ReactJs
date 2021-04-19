
import { SET_NAME } from "./profileType";

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: {
            name,
        },
    };
};
