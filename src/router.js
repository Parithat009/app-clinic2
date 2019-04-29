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
import Item from './page/Item.vue'

import addCaution from './components/AddItem/addCaution.vue'
import addFrequency from './components/AddItem/addFrequency.vue'
import addInstruction from './components/AddItem/addInstruction.vue'
import addUnit from './components/AddItem/addUnit.vue'
import addItem from './components/AddItem/addItem.vue'

import editCaution from './components/EditItem/editCaution.vue'
import editFrequency from './components/EditItem/editFrequency.vue'
import editInstruction from './components/EditItem/editInstruction.vue'
import editUnit from './components/EditItem/editUnit.vue'
import editItem from './components/EditItem/editItem.vue'

Vue.use(Router);

const routes = [
   { path: '/admin/login', component: Login },
   { path: '/admin/chiefComplaints', component: chiefComplaints },
   { path: '/admin/differential', component: differentialDiagnosis },
   {path: '/admin/history', component: historyRankings },
   {path: '/admin/physical', component: physicalExam },
   {path: '/admin/users', component: user },

   {path: '/admin/history/edit/:id', component: editHistory },
   {path: '/admin/history/add', component: addHistory },

   {path: '/admin/physical/edit/:id', component: editPhysical },
   {path: '/admin/physical/add', component: addPhysical },

   {path: '/admin/differential/edit/:id', component: editDifferential },
   {path: '/admin/differential/add', component: addDifferential },

   {path: '/admin/chiefComplaints/edit/:id', component: editchiefComplaints },
   {path: '/admin/chiefComplaints/add', component: addchiefComplaints },

   {path: '/admin/users/edit/:id', component: editUser },
   {path: '/admin/users/add', component: addUser },

   { path: '/admin/caution', component: Caution },
   { path: '/admin/frequency', component: Frequency },
   { path: '/admin/unit', component: Unit },
   { path: '/admin/instruction', component: Instruction },
   { path: '/admin/item', component: Item },

   {path: '/admin/caution/add', component: addCaution },
   {path: '/admin/frequency/add', component: addFrequency },
   {path: '/admin/unit/add', component: addUnit },
   {path: '/admin/instruction/add', component: addInstruction },
   { path: '/admin/item/add', component: addItem },

   {path: '/admin/caution/edit/:id', component: editCaution },
   {path: '/admin/frequency/edit/:id', component: editFrequency },
   {path: '/admin/unit/edit/:id', component: editUnit },
   {path: '/admin/instruction/edit/:id', component: editInstruction },
   { path: '/admin/item/edit/:id', component: editItem }
];

const router = new Router({
    routes ,
    // base: '/admin/',
    mode: 'history'
  })

export default router;
