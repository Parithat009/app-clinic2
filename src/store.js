import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {},
        ex: {},
        ht: {},
        pe: {},
        snackbar: false,
        snColor: null,
        snText: null

    },
    actions: {
        callApi({ commit }) {
            var self = this;
            axios.defaults.baseURL = 'http://chaofavc.somprasongd.work:81'
            axios.defaults.headers.common['Authorization'] = `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0MTkyNDA5fQ.O923cGJ8aiEji_E1SzPz5PjD1PsGNhhDB3JTD2M6TP8`
            axios
                .get('/api/base/base-ccs')
                .then(function (res) {
                    if (res.status !== 200) {
                        self.state.data = null;
                        return;
                    }
                    self.state.data = res.data;
                    console.log(self.state.data);

                    commit('callApi')
                })
                .catch(function (error) {
                    console.log("Error:", error);
                });
        },
        callEX() {
            var self = this;
            axios.defaults.baseURL = 'http://chaofavc.somprasongd.work:81'
            axios.defaults.headers.common['Authorization'] = `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0MTkyNDA5fQ.O923cGJ8aiEji_E1SzPz5PjD1PsGNhhDB3JTD2M6TP8`

            axios
                .get('/api/base/base-exes')
                .then(function (res) {
                    if (res.status !== 200) {
                        self.state.ex = null;
                        return;
                    }
                    self.state.ex = res.data;
                    console.log(self.state.ex);
                })
                .catch(function (error) {
                    console.log("Error:", error);
                });
        },
        callHT() {
            var self = this;
            axios.defaults.baseURL = 'http://chaofavc.somprasongd.work:81'
            axios.defaults.headers.common['Authorization'] = `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0MTkyNDA5fQ.O923cGJ8aiEji_E1SzPz5PjD1PsGNhhDB3JTD2M6TP8`

            axios
                .get('/api/base/base-hts')
                .then(function (res) {
                    if (res.status !== 200) {
                        self.state.ht = null;
                        return;
                    }
                    self.state.ht = res.data;
                    console.log(self.state.ht);
                })
                .catch(function (error) {
                    console.log("Error:", error);
                });
        },
        callPE() {
            var self = this;
            axios.defaults.baseURL = 'http://chaofavc.somprasongd.work:81'
            axios.defaults.headers.common['Authorization'] = `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0MTkyNDA5fQ.O923cGJ8aiEji_E1SzPz5PjD1PsGNhhDB3JTD2M6TP8`

            axios
                .get('/api/base/base-pes')
                .then(function (res) {
                    if (res.status !== 200) {
                        self.state.pe = null;
                        return;
                    }
                    self.state.pe = res.data;
                    console.log(self.state.pe);
                })
                .catch(function (error) {
                    console.log("Error:", error);
                });
        },
        snAdd({ commit }) {
            commit('snAdd')

        },
        snAddErr({ commit }) {
            commit('snAddErr')

        },
        snStop({ commit }) {
            commit('snStop')
        }

    },
    mutations: {
        callApi() {
            var self = this;
        },
        snAdd() {
            var self = this;

            self.state.snackbar = true;
            self.state.snColor = 'green';
            self.state.snText = 'Successful !';

        },
        snAddErr() {
            var self = this;

            self.state.snackbar = true;
            self.state.snColor = 'red';
            self.state.snText = 'Unsuccessful !';

        },
        snStop() {
            var self = this;
            self.state.snackbar = false;
        }
    }
});