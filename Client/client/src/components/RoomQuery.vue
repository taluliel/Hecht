<template>
  <div class="roomQuery">
      <v-text-field v-model="select"
        :placeholder="choose_room"
         outlined
          prepend-inner-icon="mdi-magnify"
        :items="items"
        v-on:change="goToRoom"
        cache-items
        item-text="roomCode"
        item-value="roomCode">

             
      </v-text-field>

      <!-- <v-autocomplete 
 
      v-model="select"
      :items="items"
      v-on:change="goToRoom"
      cache-items
      class="white--text"
      flat
      hide-no-data
      hide-details
      hide-selected
  item-text="roomCode"
    item-value="roomCode"
      :label="nav_label"
    ></v-autocomplete>
     -->

  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "roomQuery",
  data: () => ({
    items: [],
    select: null,
  }),
  computed: {
    choose_room: function () {
      return this.$t("choose_room");
    },
  },
  firestore() {
    return {
      items: db.collection("Rooms").where("roomCode", "!=", null),
    };
  },
  mounted() {},
  methods: {
    goToRoom: function () {
      console.log(this.select);
      this.$router.push(`/room/${this.select}`).catch((err) => {
        err;
      });
    },
  },
};
</script>

<style scoped>
.roomQuery {
  width: 100%;
}
</style>

