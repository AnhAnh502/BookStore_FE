import { ADD_TO_CART } from "../constants/addToCart";

const initialState = {
    booksAdded:[]
}

const addToCartReducer = (state = initialState,action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newbooksAdded = [...state.booksAdded];
            newbooksAdded.push(action.payload);
            return {
                ...state,
                booksAdded: newbooksAdded
            }
        default:
            return state
    }
}

export default addToCartReducer;