import axios from "axios"

const urlBase = 'http://localhost:8000/api';

export function http(){
    const interceptor = axios.create({
        baseURL: urlBase
        , headers: {
            'Accept': 'application/json'
            , 'Content-type': 'Application/json'
            //, 'Authorization': 'Bearer'
        }
        , timeout: 15000
    });


    return interceptor;
}