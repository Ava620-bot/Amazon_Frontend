import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://amazon-backend-app-2.herokuapp.com',
    baseURL:'https://amazon-2-0-app-api.onrender.com/',
    // baseURL:'https://amazon-clone-mbik.onrender.com/',

});

export default instance;
