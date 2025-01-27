import React from 'react';
import { Get } from '../controllers/httpController';
import { AuthContext } from '../contexts/AuthContext';

export function useGet(endpoint, initialValue) {

    const { state } = React.useContext(AuthContext);
    const [data, setData] = React.useState(initialValue);

    React.useEffect(() => {
        Get(endpoint)
            .then((data) => {
                setData(data)
            })
    }, [state.accessToken, endpoint]);
    return data;
}