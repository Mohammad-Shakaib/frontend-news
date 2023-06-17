import axios from 'axios';
import {store} from "../redux/store";
console.log("tokeb", store.getState().auth.token)
axios.defaults.headers.common["Authorization"] = `${store.getState().auth.token}`;

const instance = axios.create({
    baseURL: 'http://newswave-backend.test'
});

export default instance;