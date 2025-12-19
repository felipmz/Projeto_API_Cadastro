import axios from 'axios';

const api = axios.create({
    baseURL:'https://projeto-node-api-cadastros-bpe1.vercel.app/'
})

export default api