import axios from 'axios';

const baseURL = 'https://dev.examprephub.com/api/smartAct/'

export const axiosGet = (url: string) => {
    return axios.get(`${baseURL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("accessToken")}`
        }
    })
}

export const axiosPost = (url: string, data?: any) => {
    return axios.post(`${baseURL}${url}`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("accessToken")}`
        }
    })
}

export const axiosPut = (url: string, data?: any) => {
    return axios.put(`${baseURL}${url}`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("accessToken")}`
        }
    })
}