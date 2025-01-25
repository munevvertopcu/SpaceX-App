import * as SecureStore from 'expo-secure-store';

export async function SetAccessToken(data) {
    await SecureStore.setItemAsync('accessToken', data);
}

export async function GetAccessToken() {
    var accessToken = await SecureStore.getItemAsync('accessToken');
    return accessToken;
}

export async function RemoveUser() {
    await SecureStore.deleteItemAsync('accessToken');
}