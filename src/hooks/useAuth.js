import React, { useReducer, useEffect, useMemo } from 'react';
import { Post } from '../controllers/httpController';
import { SetAccessToken, GetAccessToken } from '../controllers/secureStorageController';

export function useAuth() {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'SIGN_IN':
                    return {
                        ...state,
                        accessToken: action.accessToken
                    };
                case 'SIGN_OUT':
                    return {
                        ...state,
                        accessToken: null
                    };
                case 'SET_LOADING':
                    return {
                        ...state,
                        loading: action.loading
                    };
                default:
                    return state;
            }
        },
        {
            accessToken: null,
            loading: true,
        }
    );
    const auth = useMemo(
        () => ({
            login: async (data) => {
                const auth = { email: data.email, password: data.password };
                const response = await Post("auth/login", auth);
                await SetAccessToken(response.token)
                dispatch({ type: 'SIGN_IN', accessToken: response.token })
            }
        })
    )
    useEffect(() => {
        new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
            GetAccessToken().then(accessToken => {
                if (accessToken) {
                    dispatch({ type: 'SIGN_IN', accessToken: accessToken })
                }
                dispatch({ type: 'SET_LOADING', loading: false })
            })
        })
    }, [])
    return { auth, state };
}