import instance from "../services/instance";
import { GetAccessToken } from "./secureStorageController";

const createConfigHeader = async (accessToken) => {
    if (accessToken == null) {
        return {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
    else {
        return {
            headers: {
                'Authorization': "Bearer " + accessToken,
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
}

export const Post = async (url, data) => {
    try {
        const res = await instance.post(url, data)
        return res.data;
    } catch (error) {
        if (error.response) {
            // The server responded but returned an error code
            console.error('Error code:', error.response.status);
            console.error('Error data:', error.response.data);
        } else if (error.request) {
            // No response was received from the server
            console.error('No response from server:', error.request);
        } else {
            // There was a problem with the request configuration
            console.error('There was a problem:', error.message);
        }
        throw error;
    }
}

export const Get = async (url) => {
    try {
        const res = await instance.get(url, await createConfigHeader(await GetAccessToken()));
        return res.data;
    } catch (error) {
        if (error.response) {
            // The server responded but returned an error code
            console.error('Error code:', error.response.status);
            console.error('Error data:', error.response.data);
        } else if (error.request) {
            // No response was received from the server
            console.error('No response from server:', error.request);
        } else {
            // There was a problem with the request configuration
            console.error('There was a problem:', error.message);
        }
        throw error;
    }
}