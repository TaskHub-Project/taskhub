import { apiClient, clearToken } from "./config";


export const apiSignUp = async(payload) => {
    return apiClient.post("/signup", payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/login", payload)
};

export const apiSignOut = async () => {
    clearToken();
};




