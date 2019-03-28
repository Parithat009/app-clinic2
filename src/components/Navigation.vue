<template>
  <div class="menu">
    <v-navigation-drawer dark permanent style="background-color:rgb(86, 125, 121);  width: 100%;">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" v-on:click="goto(item.path)">
          <v-list-tile-action>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
            <v-list-tile-content>
              <v-list-tile-title style="font-size:1.1rem; font-weight:bold;">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Users", path: "users" },
        { title: "Chief Complaints", path: "chiefComplaints" },
        { title: "Differential Diagnosiss", path: "differential" },
        { title: "History Rankings", path: "history" },
        { title: "Physical Examinations", path: "physical" }
      ]
    };
  },
  methods: {
    goto(i) {
      console.log(i);
      this.$router.push({ path: "./" + i });
    }
  }
};
</script>

<style scoped>
.menu {
  width: 17%;
  float: left;
  height: 120vh;
}
</style>

