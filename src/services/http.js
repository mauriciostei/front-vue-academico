import axios from "axios"
import {Buffer} from 'buffer'

const urlBase = 'http://localhost:8000/api';

export function http(){

    let auth = localStorage.getItem('auth');
    let token = '';
    if(auth){
        let authJson = JSON.parse(Buffer.from(auth, 'base64').toString('ascii'));
        token = authJson.access_token;
    }

    const interceptor = axios.create({
        baseURL: urlBase
        , headers: {
            'Accept': 'application/json'
            , 'Content-type': 'Application/json'
            , 'Authorization': 'Bearer ' + token
        }
        , timeout: 15000
    });

    interceptor.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if(error.response.status === 401){
                localStorage.clear();
                //localStorage.removeItem('auth');
                window.location.href = '/login';
            }
        }
    );

    return interceptor;
}