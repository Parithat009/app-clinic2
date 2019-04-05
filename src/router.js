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

import Caution from './page/Caution.vue'
import Frequency from './page/Frequency.vue'
import Unit from './page/Unit.vue'
import Instruction from './page/Instruction.vue'

import addCaution from './components/AddItem/addCaution.vue'
import addFrequency from './components/AddItem/addFrequency.vue'
import addInstruction from './components/AddItem/addInstruction.vue'
import addUnit from './components/AddItem/addUnit.vue'

import editCaution from './components/EditItem/editCaution.vue'
import editFrequency from './components/EditItem/editFrequency.vue'
import editInstruction from './components/EditItem/editInstruction.vue'
import editUnit from './components/EditItem/editUnit.vue'

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

   { path: '/caution', component: Caution },
   { path: '/frequency', component: Frequency },
   { path: '/unit', component: Unit },
   { path: '/instruction', component: Instruction },

   {path: '/caution/add', component: addCaution },
   {path: '/frequency/add', component: addFrequency },
   {path: '/unit/add', component: addUnit },
   {path: '/instruction/add', component: addInstruction },

   {path: '/caution/edit/:id', component: editCaution },
   {path: '/frequency/edit/:id', component: editFrequency },
   {path: '/unit/edit/:id', component: editUnit },
   {path: '/instruction/edit/:id', component: editInstruction },
];

const router = new Router({
    routes ,
    base: '/admin/',
    mode: 'history'
  })

export default router;
