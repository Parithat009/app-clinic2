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
        >Add Item</b-navbar-brand>
      </b-navbar>

      <div style="margin-top:25px;">
        <div>
          <!-- <label>Code :&nbsp;</label> -->
          <v-flex xs5 offset-xs4 style="margin-bottom:-3%;">
            <v-radio-group v-model="radios" row>
              <h3 style="font-size:1.1em; color:grey; font-weight:normal;">Item type : &nbsp; &nbsp;</h3>
              <v-radio label="Item" value="item"></v-radio>
              <v-radio label="Item set" value="item set"></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex xs5 offset-xs4 style="margin-bottom:-1.7%;">
            <v-text-field label="Code" v-model="code" style="font-size:1.3em;"></v-text-field>
          </v-flex>

          <v-flex xs5 offset-xs4>
            <!-- <v-text-field label="Label" v-model="blood" style="font-size:1.3em;"></v-text-field> -->
            <v-textarea style="font-size:1.3em;" label="Label" v-model="blood" hint="Hint text"></v-textarea>
          </v-flex>
          <v-flex xs5 offset-xs4 style="margin-bottom:-1.7%;">
            <v-checkbox
              class="chBox"
              color="blue"
              v-model="active"
              label="Active"
              style="margin-boot"
            ></v-checkbox>
          </v-flex>

          <v-flex xs5 offset-xs4>
            <b-form-select v-model="select" :options="items" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>-- Select Item Group --</option>
              </template>
            </b-form-select>
          </v-flex>
          <br>

          <v-flex xs5 offset-xs4>
            <h3 style="font-size:1.2em; color:black; font-weight:normal;text-align:left;">Price</h3>
            <hr style="border-style: groove; border-width: 3px;" color="grey">
            <v-text-field label="Cost / Thai baht (฿)" v-model="cost" style="font-size:1.3em;"></v-text-field>
            <v-text-field label="Price / Thai baht (฿)" v-model="price" style="font-size:1.3em;"></v-text-field>
          </v-flex>
          <br>

          <v-flex xs5 offset-xs4>
            <div v-if="select == 'Drug'">
              <h3
                style="font-size:1.2em; color:black; font-weight:normal;text-align:left;"
              >Drug description</h3>
              <hr style="border-style: groove; border-width: 3px; " color="grey">

              <b-form-select v-model="select2" :options="items" class="mb-3">
                <template slot="first">
                  <option :value="null" disabled>Instruction</option>
                </template>
              </b-form-select>

              <v-text-field label="Dose" v-model="dose" style="font-size:1.3em;"></v-text-field>

              <b-form-select v-model="select3" :options="items" class="mb-3">
                <template slot="first">
                  <option :value="null" disabled>Frequency</option>
                </template>
              </b-form-select>

              <b-form-select v-model="select4" :options="items" class="mb-3">
                <template slot="first">
                  <option :value="null" disabled>Caution</option>
                </template>
              </b-form-select>

              <v-textarea
                style="font-size:1.3em;"
                label="Description"
                v-model="description"
                hint="Hint text"
              ></v-textarea>
            </div>

            <div v-if="select == 'Lab'">
              <h3
                style="font-size:1.2em; color:black; font-weight:normal;text-align:left;"
              >Lab description</h3>
              <hr style="border-style: groove; border-width: 3px; " color="grey">

              <v-text-field label="Unit" v-model="unit" style="font-size:1.3em;"></v-text-field>

              <b-form-select v-model="select5" :options="items" class="mb-3">
                <template slot="first">
                  <option :value="null" disabled>Lab Group</option>
                </template>
              </b-form-select>

              <v-radio-group v-model="result" row>
                <h3 style="font-size:1em; color:grey; font-weight:normal;">Result : &nbsp; &nbsp;</h3>
                <v-radio label="Text" value="text"></v-radio>
                <v-radio label="Number" value="number"></v-radio>
              </v-radio-group>

              <div v-if="result == 'text'">
                <v-text-field label="Normal" v-model="normal" style="font-size:1.3em;"></v-text-field>
                <v-text-field label="Unit" v-model="unit2" style="font-size:1.3em;"></v-text-field>
              </div>
              <div v-if="result == 'number'">
                <v-text-field label="Min" style="font-size:1.3em; width:40%;"></v-text-field>
                <v-text-field label="Max" style="font-size:1.3em; width:40%;"></v-text-field>
                <v-text-field label="Unit" v-model="unit2" style="font-size:1.3em;"></v-text-field>
              </div>
            </div>
          </v-flex>
          <h2>222</h2><p>ppp</p>

          <router-link to="/admin/item" class="rtl">
            <v-btn small color="green" style="color:white; " v-on:click="addCC()">SAVE</v-btn>
          </router-link>

          <router-link to="/admin/item" class="rtl">
            <v-btn small color="red" style="color:white;">cancel</v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarAddEdit from "../ToolbarAddEdit.vue";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  components: {
    ToolbarAddEdit
  },

  data() {
    return {
      code: "",
      blood: "",
      active: true,
      radios: "",
      items: ["Drug", "Service Charge", "Lab"],
      select: null,
      select2: null,
      select3: null,
      select4: null,
      select5: null,
      cost: "",
      price: "",
      description: "",
      dose: "",
      unit: "",
      result: "",
      normal: "",
      unit2: ""
    };
  },
  methods: {
    addCC() {
      //   var self = this;
      //   axios
      //     .post("/api/base/item-units", {
      //       code: this.code,
      //       label: this.blood,
      //       active: this.active
      //     })
      //     .then(function(response) {
      //       console.log(response);
      //       self.snAdd();
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //       self.snAddErr();
      //     });
      //   console.log("add");
    },
    ...mapActions(["snAdd", "snAddErr"])
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.menu {
  width: 17%;
  float: left;
  height: 100vh;
}
.rtl {
  text-decoration: none;
}

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
.toolbar {
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 1.1em;
}
.chBox {
  margin-top: 0px;
  padding-top: 0px;
}
</style>
