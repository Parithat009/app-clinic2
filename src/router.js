import Vue from 'vue'
import Router from 'vue-router'

import Login from './page/Login.vue'
import chiefComplaints from './page/chiefComplaints.vue'
import differentialDiagnosis from './page/differentialDiagnosis.vue'
import historyRankings from './page/historyRankings.vue'
import physicalExam from './page/physicalExam.vue'
import user from './page/user.vue'

import editUser from './components/Edit/editUser.vue'
import editHistory from './components/Edit/editHistory.vue'
import editPhysical from './components/Edit/editPhysical.vue'
import editDifferential from './components/Edit/editDifferential.vue'
import editchiefComplaints from './components/Edit/editchiefComplaints.vue'

import addUser from './components/Add/addUser.vue'
import addHistory from './components/Add/addHistory.vue'
import addPhysical from './components/Add/addPhysical.vue'
import addDifferential from './components/Add/addDifferential.vue'
import addchiefComplaints from './components/Add/addchiefComplaints.vue'

Vue.use(Router);

const routes = [
   { path: '/login', component: Login },
   { path: '/chiefComplaints', component: chiefComplaints },
   { path: '/differential', component: differentialDiagnosis },
   {path: '/history', component: historyRankings },
   {path: '/physical', component: physicalExam },
   {path: '/users', component: user },

   {path: '/history/edit/:id', component: editHistory },
   {path: '/history/add', component: addHistory },

   {path: '/physical/edit/:id', component: editPhysical },
   {path: '/physical/add', component: addPhysical },

   {path: '/differential/edit/:id', component: editDifferential },
   {path: '/differential/add', component: addDifferential },

   {path: '/chiefComplaints/edit/:id', component: editchiefComplaints },
   {path: '/chiefComplaints/add', component: addchiefComplaints },

   {path: '/users/edit/:id', component: editUser },
   {path: '/users/add', component: addUser },
];

const router = new Router({
    routes ,
    mode: 'history'
  })

export default router;
