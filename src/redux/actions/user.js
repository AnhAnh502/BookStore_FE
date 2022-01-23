import { SET_USER, DELETE_USER } from '../constants/user'

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER,
    }
}