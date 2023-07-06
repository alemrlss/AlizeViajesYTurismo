import axios from "axios"
import { BASE_URL } from './'

export const getStops = () => {
    return axios.get(`https://services.plataforma10.com/pcom/stops/stops/search?term=corrientes`)
}