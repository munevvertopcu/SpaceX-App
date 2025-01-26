import React from 'react';
import { Get } from '../controllers/httpController';
import { UserContext } from '../contexts/UserContext';

export function useGet(endpoint, initialValue) {

    const { accessToken } = React.useContext(UserContext);
    const [data, setData] = React.useState(initialValue);

    React.useEffect(() => {
        Get(endpoint)
            .then((data) => {
                setData(data)
            })
    }, [accessToken, endpoint]);
    return data;
}