<template>
  <h1>Ingresar (Login)</h1>

  <label for="">Ingrese su correo</label> <br>
  <input type="email" v-model="usuario.email">

  <br><br>

  <label for="">Ingrese su contraseña</label> <br>
  <input type="password" v-model="usuario.password">

  <br><br><hr>

  <button v-on:click="ingresar()">Ingresar</button>

  <br><br>

  {{datos}}

</template>

<script>
import * as auth from '../../services/auth.service'

export default {
    data(){
        return {
            usuario: { email: 'admin@mail.com', password: '12345' }
            , datos: ''
        }
    },
    methods: {
        async ingresar(){
            const res = await auth.login(this.usuario);
            this.datos = res.data;
        }
    }
}
</script>

<style>

</style>