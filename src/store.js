import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawer: null,
    },
    actions: {
        changeDrawer({ commit }) {
            commit('changeDrawer');
        }
    },
    mutations: {
        changeDrawer() {
            var self = this;
            self.state.drawer = !self.state.drawer;
            console.log(self.state.drawer);
        }
    }
});