import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://amazon-backend-app-2.herokuapp.com',
    baseURL:'http://localhost:3000/',
    // baseURL:'https://amazon-clone-mbik.onrender.com/',

});

export default instance;
