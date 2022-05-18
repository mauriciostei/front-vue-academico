<template>
  <div class="card" v-if="perfil">
    <h1>Mi Perfil</h1>
    <h5>Correo: {{ perfil.email }} </h5>
    <h5>Nombre: {{ perfil.name }} </h5>
  </div>
</template>

<script>

import * as auth from '../services/auth.service'

export default{
  data(){
    return{
      perfil: null
    }
  },
  async mounted(){
    const {data} = await auth.perfil()
    this.perfil = data
  }
}

</script>