import * as types from "../constants/auth";


const authLogin = () => {
    return {
        type: types.AUTH_LOGIN
    };
};

const authLogout = () => {
    return {
        type: types.AUTH_LOGOUT
    };
};

export const login = () => {
    return dispatch => {
        dispatch(authLogin())
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(authLogout())
    }
}
