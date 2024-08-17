import { apiClient } from "./config"

export const apiBooking = async(payload) => {
    return apiClient.post ("/api/bookings", payload)
}

export const apiGetBookings = async(payload) => {
    return apiClient.get ("/api/bookings", payload)
}

export const apiGetBookingsById = async(id) => {
    return apiClient.get (`/api/bookings/${id}`, payload)
}

export const apiUpdateBooking = async(id, payload) => {
    return apiClient.put(`/api/bookings/${id}`, payload)
}

export const apiDeleteBooking = async(id) => {
    return apiClient.delete(`/api/bookings/${id}`)
}