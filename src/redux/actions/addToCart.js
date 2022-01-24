import { ADD_TO_CART } from "../constants/addToCart"

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

