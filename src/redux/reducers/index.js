import exampleReducer from './example';
import cartReducer from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    example: exampleReducer,
    cart: cartReducer
})

export default rootReducer;