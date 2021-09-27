import streams from '../apis/streams'
import StreamCreate from '../components/streams/StreamCreate'
import { SIGN_IN } from "./types"
import { SIGN_OUT } from "./types"
import { CREATE_STREAM } from './types'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch) => {
    const response = await streams.post('/streams', formValues)

    dispatch({ type: CREATE_STREAM, payload: response.data})

}