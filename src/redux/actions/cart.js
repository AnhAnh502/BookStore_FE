import { ADD_PRODUCT, UPDATE_PRODUCT, UPDATE_TOTALPRICES, DELETE_PRODUCT } from '../constants/cart'

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload: payload
    }
}

export const updateProduct = (payload) => {
    return {
        type: UPDATE_PRODUCT,
        payload: payload
    }
}

export const updateTotalPrices = (payload) => {
    return {
        type: UPDATE_TOTALPRICES,
        payload: payload
    }
}

export const deleteProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload: payload
    }
}
