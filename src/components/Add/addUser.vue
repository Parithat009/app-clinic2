<template>
  <div id="app">
    <ToolbarAddEdit></ToolbarAddEdit>

    <div class="main">
      <b-navbar
        toggleable="lg"
        type="dark"
        style="background-color:rgb(39, 162, 146); box-shadow: 5px 5px 5px #ccc;"
      >
        <b-navbar-brand
          style="font-size: 1.2em; font-weight:bold; text-shadow: 1.7px 2px 1.7px rgb(86, 125, 121);"
        >Add User</b-navbar-brand>
      </b-navbar>

      <div style="margin-top:25px;">
        <div>
          <!-- <label>Code :&nbsp;</label> -->
          <v-flex xs5 offset-xs4>
            <v-text-field label="Username" v-model="username" style="font-size:1.7em;"></v-text-field>
          </v-flex>

          <v-flex xs5 offset-xs4>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              style="font-size:1.7em;"
            ></v-text-field>
          </v-flex>

          <v-flex xs5 offset-xs4>
            <v-text-field
              label="Confirm Password"
              type="password"
              v-model="confirm_password"
              style="font-size:1.7em;"
            ></v-text-field>
          </v-flex>

          <v-flex xs5 offset-xs4>
            <!-- <p v-for="item in selected" :key="item">{{ item }}</p> -->
            <v-checkbox
              class="chBox"
              color="blue"
              v-model="selected"
              label="Active"
              value="Active"
              style="margin-boot"
            ></v-checkbox>
            <v-checkbox
              class="chBox"
              color="blue"
              v-model="selected"
              label="Staff status"
              value="Staff status"
            ></v-checkbox>
          </v-flex>

          <v-flex xs10 offset-xs1>
            <v-text-field label="Username" v-model="username" style="font-size:1.7em;"></v-text-field>
          </v-flex>

          <v-btn small color="green" style="color:white;">SAVE</v-btn>

          <router-link to="/users">
            <v-btn small color="red" style="color:white;">cancel</v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarAddEdit from "../ToolbarAddEdit.vue";
export default {
  components: {
    ToolbarAddEdit
  },
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      selected: []
    };
  },
  methods: {}
};
</script>

<style scoped>
@media (min-width: 992px) {
  .main {
    width: 83%;
    float: left;
    padding: 1.5rem;
  }
  /* desktop */
}
@media (max-width: 991px) {
  .main {
    width: 100%;
    float: left;
    padding: 1.5rem;
  }
  /* mobile โทสัพ */
}

* {
  box-sizing: border-box;
}
.menu {
  width: 17%;
  float: left;
  height: 100vh;
}
.chBox {
  margin-top: 0px;
  padding-top: 0px;
}
</style>
