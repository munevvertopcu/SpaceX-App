import { useReducer, useEffect, useMemo } from 'react';
import { Post } from '../controllers/httpController';
import { SetAccessToken, GetAccessToken, RemoveUser } from '../controllers/secureStorageController';

export function useAuth() {

    const authReducer = (state, action) => {
        switch (action.type) {
            case 'SIGN_IN':
                return { ...state, accessToken: action.accessToken };
            case 'SIGN_OUT':
                return { ...state, accessToken: null };
            case 'SET_LOADING':
                return { ...state, loading: action.loading };
            default:
                return state;
        }
    };

    const initialState = {
        accessToken: null,
        loading: true,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (data) => {
        const auth = { email: data.email, password: data.password };
        const response = await Post("auth/login", auth);
        await SetAccessToken(response.token)
        dispatch({ type: 'SIGN_IN', accessToken: response.token })
    }

    const logout = async () => {
        await RemoveUser();
        dispatch({ type: 'SIGN_OUT' })
    }

    const auth = useMemo(
        () => ({
            login,
            logout
        }),
        []
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