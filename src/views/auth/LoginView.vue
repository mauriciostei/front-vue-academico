<template>
    <!-- <h1>{{ $store.getters.obtenerContador }}</h1>
    <button v-on:click="$store.dispatch('incrementarContador')">+</button>
    <h1>{{ $store.state.auth }}</h1>
    <hr>
  <h1>Ingresar (Login)</h1>

  <label for="">Ingrese su correo</label> <br>
  <input type="email" v-model="usuario.email">

  <br><br>

  <label for="">Ingrese su contraseña</label> <br>
  <input type="password" v-model="usuario.password">

  <br><br><hr>

  <button v-on:click="ingresar()">Ingresar</button>

  <br><br> -->

  <!-- {{datos}} -->

  <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img :src="'layout/images/logo-' + logoColor + '.svg'" alt="Sakai logo" class="mb-5" style="width:81px; height:60px;">
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
                <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="text-center mb-5">
                        <img src="layout/images/avatar.png" alt="Image" height="50" class="mb-3">
                        <div class="text-900 text-3xl font-medium mb-3">Bienvenido</div>
                        <span class="text-600 font-medium">Ingrese para continuar</span>
                    </div>
                
                    <div class="w-full md:w-10 mx-auto">
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Correo Electrónico</label>
                        <InputText id="email1" v-model="usuario.email" type="text" class="w-full mb-3" placeholder="Email" style="padding:1rem;" />
                
                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Contraseña</label>
                        <Password id="password1" v-model="usuario.password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>
                
                        <!-- <div class="flex align-items-center justify-content-between mb-5">
                            <div class="flex align-items-center">
                                <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2"></Checkbox>
                                <label for="rememberme1">Recordarme</label>
                            </div>
                            <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
                        </div> -->
                        <Button label="Ingresar" class="w-full p-3 text-xl" v-on:click="ingresar()"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import * as auth from '../../services/auth.service'
import {Buffer} from 'buffer'

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

            const base64 = Buffer.from(JSON.stringify(res.data)).toString('base64');

            this.$store.dispatch('login', res.data)
            localStorage.setItem('auth', base64);

            // Redireccionar
            this.$router.push('/');
        }
    },
    computed: {
        logoColor() {
            if (this.$appState.darkTheme) return 'white';
            return 'dark';
        }
    }
}
</script>

<style scoped>
.pi-eye {
    transform:scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform:scale(1.6);
    margin-right: 1rem;
}
</style>