<template>
  <div class="room">
    <span class= "titlePOI" v-if="currentRoom">
       {{ currentRoom.title[this.$i18n.locale.toUpperCase()] }}
    </span>
    <feature-viewer class="feature"
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
        console.log(roomCode);
          this.currentRoomCode=roomCode;
              db.collection("Rooms")
      .where("roomCode", "==", +roomCode)
      .get()
      .then((querySnapshot) => {
        const room = querySnapshot.docs[0].data();
        this.currentRoom = room;
                    
      });
      }
  },
 
  beforeRouteUpdate(to, from, next) {
    let roomCode = to.params.id;
    this.getFeatures(roomCode);
    next();
  
   }

};
</script>

<style scoped>
.room {
  width: 100%;
  text-align: center;
   }
   .titlePOI{
 
    width: 330px;
    height: 22px;
    right: 16px;
    top: 96px;

/* Assistent/subtitle/default */

   line-height: 22px;
  text-align: center;
  color: #5c3f55;
  font-weight: bold;
      font-size: 18px;
   }

  .feature{
   
width: 375px;
left: 0px;
top: 159px;

  }

</style>
