<template>
  <div class="room">
    I am in room {{ currentRoomCode }}
    <feature-viewer
      :image-details="currentRoom"
      :room="currentRoomCode"
    ></feature-viewer>
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
  mounted(){
      this.getFeatures(this.$route.params.id);
  },
  methods:{
      getFeatures(roomCode){
          this.currentRoomCode=roomCode;
              db.collection("rooms")
      .where("roomCode", "==", +roomCode)
      .get()
      .then((querySnapshot) => {
        const room = querySnapshot.docs[0].data();
        this.currentRoom = room;
        console.log(room);
        // do something with documents
      });
      }
  },
  beforeRouteEnter(to, from, next) {
       next(vm =>{
           vm.getFeatures(to.params.id);
   })}

};
</script>

<style scoped>
.room {
  width: 100%;
}
</style>
