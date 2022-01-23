import { SET_USER, DELETE_USER } from '../constants/user'

const initialState = {
    name: '',
    token: '',
    role: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...action.payload
            }
        case DELETE_USER:
            return {
                name: '',
                token: ''
            }
        default :
            return state
    }
}

export default userReducer;