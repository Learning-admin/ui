import axios from 'axios';

const baseURL = 'https://dev.examprephub.com/api/smartAct/'
const currentUser = JSON.parse(localStorage.getItem('currentUser'))

console.log(currentUser)

export const axiosGet = (url: string) => {
    return axios.get(`${baseURL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${currentUser.accessToken}`
        }
    })
}

export const axiosPost = (url: string, data?: any) => {
    return axios.post(`${baseURL}${url}`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${currentUser.accessToken}`
        }
    })
}

export const axiosPut = (url: string, data?: any) => {
    return axios.put(`${baseURL}${url}`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `${currentUser.accessToken}`
        }
    })
}