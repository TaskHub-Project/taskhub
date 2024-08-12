import { apiClient, clearToken } from "./config";


export const apiSignUp = async(payload) => {
    return apiClient.post("/api/tasker/signup", payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/api/tasker/login", payload)
};

export const apiSignOut = async () => {
    clearToken();
};




