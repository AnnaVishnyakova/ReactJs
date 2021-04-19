import { SET_NAME } from './profileType';

const initialState = {
    userName: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                userName: action.payload.name,
            };
        }
        default:
            return state;
    }
}
