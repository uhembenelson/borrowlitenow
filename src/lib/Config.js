import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:27017/api/v2',
    withCredentials: false,
});

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form- urlencoded';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export default instance;