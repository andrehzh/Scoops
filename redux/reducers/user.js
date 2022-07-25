import { USER_STATE_CHANGE, USER_PRODUCTS_STATE_CHANGE } from "../constants";

const initialState = {
    currentUser: null,
    products: []
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_PRODUCTS_STATE_CHANGE:
            return {
                ...state,
                products: action.products
            }
        default:
            return state;
    }
}