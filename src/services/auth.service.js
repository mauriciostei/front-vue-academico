import { http } from './http'

export const login = function(datos){
    // axios.post('http://localhost:8000/api/v1/auth/login', datos)
    //     .then(res => console.log(res))
    //     .catch(error => console.log(error))
    return http().post('/v1/auth/login', datos);
}

export const perfil = function (){
    return http().get('/v1/auth/perfil');
}

export const logout = () => {

}