import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
    , auth: null
  },
  getters: {
    obtenerContador(state){
      return state.contador
    }
  },
  mutations: {
    aumentar(state){
      state.contador++
    }
    , actualizarAuth(state, usuario_token){
      state.auth = usuario_token
    }
  },
  actions: {
    incrementarContador(context){
      context.commit('aumentar')
    }
    , login(context, u){
      context.commit('actualizarAuth', u)
    }
  },
  modules: {
  }
})
