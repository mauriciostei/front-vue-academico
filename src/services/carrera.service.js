import { http } from './http'

export const listar = function(){
    return http().get('/carreras');
}

export const mostrar = function(id){
    return http().get('/carreras/'+id);
}

export const guardar = function(datos){
    return http().post('/carreras', datos);
}

export const modificar = function(datos){
    return http().put('/carreras/'+datos.id, datos);
}

export const eliminar = function(){
    return http().delete('/carreras/'+id);
}