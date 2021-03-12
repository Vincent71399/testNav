import {login, logout} from './actions/auth';
import * as types from './constants/auth';


const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    isLogin2: state.authReducer.isLogin2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({type: types.AUTH_LOGIN}),
    logout: () => dispatch({type: types.AUTH_LOGOUT}),
  };
};

export {mapStateToProps, mapDispatchToProps};
