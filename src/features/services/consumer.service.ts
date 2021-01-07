import axios from 'axios'
import config from '../../common/config/api.config'
import { episodeType as Type } from "../types";

const api = `${config.protocol}://${config.host}/api/episode`


function getAllEpisodes() {
    return axios.get(`${api}`)
}

function getEpisode(id: Type) {
    return axios.get(`${api}/${id}`)
}


export {
    getAllEpisodes,
    getEpisode
}