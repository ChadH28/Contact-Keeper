import React, { useReducer } from 'react';
import authContext from './AuthContext';
import authReducer from './AuthReducer';
import {
    USER_LOADED,
    REGISTER_FALED,
    REGISTER_SUCCESS,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    
    // load user

    // register user

    // login user

    // logout

    // clear errors

    return (
        <authContext.Provider
         value= {{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
        }}>
            { props.children }
        </authContext.Provider>
    )
};

export default AuthState;