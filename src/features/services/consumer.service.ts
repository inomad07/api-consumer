import axios from 'axios'
import config from '../../common/config/api.config'

const api = `${config.protocol}://${config.host}/api/episode`


function getAllEpisodes() {
    return axios.get(`${api}`)
}


export {
    getAllEpisodes,
}