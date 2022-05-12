<template>
  <div class="about">
    <h1>Mi Perfil</h1>
    <p> {{ perfil }} </p>
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
    const data = await auth.perfil()
    this.perfil = data.data
  }
}

</script>