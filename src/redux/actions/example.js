import { EXAMPLE } from '../constants/example'
export const exampleWork = (payload) => {
    return {
        type: EXAMPLE,
        payload: payload
    }
}