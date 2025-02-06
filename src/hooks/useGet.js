import React from 'react';
import { Get } from '../controllers/httpController';
import { UserContext } from '../contexts/UserContext';

export function useGet(endpoint, initialValue) {

    const state = React.useContext(UserContext);
    const [data, setData] = React.useState(initialValue);

    React.useEffect(() => {
        Get(endpoint)
            .then((data) => {
                setData(data)
            })
    }, [state.accessToken, endpoint]);
    return data;
}