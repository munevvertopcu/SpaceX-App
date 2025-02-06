import { useReducer, useEffect, useMemo } from 'react';
import { Post } from '../controllers/httpController';
import { SetAccessToken, GetAccessToken, RemoveUser } from '../controllers/secureStorageController';

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

export function useAuth() {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (data) => {
        const auth = { email: data.email, password: data.password };
        const response = await Post("auth/login", auth);
        await SetAccessToken(response.token);
        dispatch({ type: 'SIGN_IN', accessToken: response.token });
    };

    const logout = async () => {
        await RemoveUser();
        dispatch({ type: 'SIGN_OUT' })
    };

    const register = async (data) => {
        const auth = { email: data.email, password: data.password };
        const response = await Post("auth/register", auth);
        await SetAccessToken(response.token);
        dispatch({ type: 'SIGN_IN', accessToken: response.token })
    };

    const auth = useMemo(
        () => ({
            login,
            logout,
            register
        }),
        [] //auth nesnesi ilk renderda oluşuyor ve bir daha güncellenmiyor. login,register ve logout fonksiyonları güncel state'i zaten kendi içlerinde dispatch kullanarak güncelliyor.
    );

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