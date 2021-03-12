import * as types from '../constants/auth';

const initialState = {
  isLogin: false,
  isLogin2: 'not here',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {isLogin: true, isLogin2: state.isLogin2};
    case types.AUTH_LOGOUT:
      return {isLogin: false, isLogin2: state.isLogin2};
    case types.AUTH_LOGIN2:
      return {isLogin:state.isLogin, isLogin2: 'what'};
    case types.AUTH_LOGOUT2:
      return {isLogin:state.isLogin, isLogin2: 'non'};
    default:
      return state;
  }
};

export default reducer;

