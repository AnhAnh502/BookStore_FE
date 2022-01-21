import { EXAMPLE } from "../constants/example";

const initialState = {
    
}

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMPLE:
            return state
        default:
            return state
    }
}

export default exampleReducer;
