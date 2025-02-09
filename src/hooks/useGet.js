import React from 'react';
import { Get } from '../controllers/httpController';
import { UserContext } from '../contexts/UserContext';

export function useGet(endpoint, initialValue) {

    const state = React.useContext(UserContext);
    const [data, setData] = React.useState(initialValue);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        Get(endpoint)
            .then((data) => {
                setData(data);
                setError(null);
            })
            .catch((err) => {
                console.error('useGet error:', err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [state.accessToken, endpoint]);

    return { data, error, loading };;
}