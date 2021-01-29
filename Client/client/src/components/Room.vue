<template>
  <div class="room">
    <div class="PoI">
      <span class="titlePOI" v-if="currentRoom">
        {{ currentRoom.title[this.$i18n.locale.toUpperCase()] }}
      </span>
    </div>
    <div>
      <feature-viewer
        class="feature"
        :image-details="currentRoom"
        :room="currentRoomCode"
      ></feature-viewer>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import FeatureViewer from "./FeatureViewer";

export default {
  name: "room",
  components: { FeatureViewer },
  data: () => ({
    items: [2000, 3000, 4000, 5000],
    currentRoomCode: null,
    currentRoom: null,
  }),
  mounted() {
    this.getFeatures(this.$route.params.id);
  },
  methods: {
    getFeatures(roomCode) {
      console.log(roomCode);
      this.currentRoomCode = roomCode;
      db.collection("Rooms")
        .where("roomCode", "==", +roomCode)
        .get()
        .then((querySnapshot) => {
          const room = querySnapshot.docs[0].data();
          this.currentRoom = room;
        });
    },
  },

  beforeRouteUpdate(to, from, next) {
    let roomCode = to.params.id;
    this.getFeatures(roomCode);
    next();
  },
};
</script>

<style scoped>
.room {
  width: 100%;
  text-align: center;
}
.PoI {
  height: 58px;
  border-bottom-style: groove;
  border-color: #ffffff;
  /* color/Beige_4 */
}
.titlePOI {
  position: absolute;
  width: 330px;
  /* height: 22px; */
  right: 18px;
  top: 12px;

  color: #0f2a48;

  line-height: 22px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

.feature {
  width: 100%;
  /* left: 0px; */
  height: 100%;
  /* top: 173px; */
  position: fixed;
}
</style>
