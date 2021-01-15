<template>
  <div class="home">
    <h2>{{ $t("museum_name") }}</h2>
    <p class="startTour" >
      {{ $t("start_tour") }}
    </p>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "home",
  data: () => ({
    items: [],
    select: null,
  }),
  computed: {
    nav_label: function () {
      return "Please choose a room code";
    },
  },
  firestore() {
    return {
      items: db.collection("Rooms").where("roomCode", "!=", null),
    };
  },

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

<style>
.home {
  height: 100%;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-image: url("../assets/EntranceReubenHecht.jpg");
  background-size: 100% 69%;
  background-position-y: 167px;
  animation: anim1 ease-in-out 20s infinite;
}

@keyframes anim1 {
  0% {
    background-image: url("../assets/EntranceReubenHecht.jpg");
  }
  25% {
    background-image: url("../assets/ArtsCrafts.jpg");
  }
  50% {
    background-image: url("../assets/ShipFront.jpg");
  }
  75% {
    background-image: url("../assets/Coins.jpg");
  }
  100% {
  }
}

h2 {
  text-align: center;
  color: #5c3f55;
}
.startTour {
   line-height: 22px;
  text-align: center;
  color: #5c3f55;
  font-weight: bold;
}
</style>