<template>
  <div class="ship">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("ship") }}
      </p>
    </div>
    
    <div class="POI">
      <img class="imgMap" src="../assets/ship.png" />
    </div>
      <v-dialog 
      v-model="dialog"
      width="260"
      height= "44"
    >
      <template v-slot:activator="{ on, attrs }">
      <button v-on="on"  v-bind="attrs">
        <img class="location1" src="../assets/CurrentLocationMarker.png" />
      </button>
    </template>

      <v-card class="popUp">
    
        <v-card-actions>
              <v-card-text class="cardText">
          חרטום הספינה
        </v-card-text>
   <v-btn icon v-on:click="closedialog()">
                <v-icon> mdi-close-circle-outline </v-icon>
              </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  name: "ship",
    methods: {
    closedialog() {
      this.shown = false;
    },
  },
};
</script>

<style scoped>
.ship {
  background: #cccbc2;
}
.PoiTitle {
    text-align: center;
     margin-top: 10px;
    color: #0f2a48;
}
.Poi {
    position: absolute;
    /* width: 100px; */
    height: 20%;
    left: 0px;
    right: 0px;
    top: 0%;
    background: #CCCBC2;
}
.imgMap {
  width: 95%;
  height: 100%;
  margin-left: 10px;
}

.POI {
    background: #cccbc2;
    position: absolute;
    width: 100%;
    height: 91%;
    /* left: 50px; */
    top: 9%;
}
.location1{
    position: fixed;
    right: 22%;
    top: 46%;
}

.cardText{
  position: static;
width: 200px;
height: 22px;
left: calc(50% - 200px/2 + 20px);
top: 10px;

font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 137% */

display: flex;
align-items: center;
text-align: right;

/* color/blue_dark */

color: #0F2A48;

/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
}
</style>