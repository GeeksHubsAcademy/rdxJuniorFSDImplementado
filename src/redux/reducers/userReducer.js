import {LOGIN, LOGOUT, SEARCH} from '../types/userType.js';

const initialState = {
    user : {},
    query : ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                user : action.payload
            }
        
        case LOGOUT : 
            return {
                ...state,
                user : action.payload
            }

        case SEARCH : 
            return {
                ...state,
                query : action.payload
            }

        default : 
            return state
    }
}

export default userReducer;