import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILD } from '../Types/index'

let initialState = {
    isLoggin: false,
    isLoading: false,
} 

function AuthReduce(auth = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {...auth, isLoggin: false, isLoading: true };
        case LOGIN_SUCCESS:
            return {...auth, isLoggin: true, isLoading: false };
        case LOGIN_FAILD:
            return {...auth, isLoggin: false, isLoading: false };
        default:
            return auth;
    }
}

export default AuthReduce