<template>
  <div class="map">
    <div class="floor1">
      <a href="/secondFloor">
        <v-img class="floors_1" src="../assets/floors_1.png" />
      </a>

      <p class="floorTitl1">
        {{ $t("floor1") }}
      </p>
    </div>
    <div class="canvas-wrapper">
      <img class="imgMap" src="../assets/firstfloor.png" />
      <button class="Auditorium" onclick="window.location.href='/map'">
        {{ $t("Auditorium") }}
      </button>
      <button class="ship" onclick="window.location.href='/map'">
        {{ $t("ship") }}
      </button>
      <button class="Phoenicians" onclick="window.location.href='/map'">
        {{ $t("Phoenicians") }}
      </button>
      <button class="Crafts" onclick="window.location.href='/map'">
        {{ $t("Crafts") }}
      </button>
         <button class="revolt" onclick="window.location.href='/map'">
        {{ $t("revolt") }}
      </button>
         <button class="israelihome" onclick="window.location.href='/map'">
        {{ $t("home") }}
      </button>
         <button class="religion" onclick="window.location.href='/map'">
        {{ $t("religion") }}
      </button>
          <button class="Entrance" onclick="window.location.href='/map'">
        {{ $t("Entrance") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "map",
};
</script>

<style scoped>
.map {
  background: #cccbc2;
}
.floorTitl1 {
  position: absolute;
  width: 108px;
  height: 22px;
  right: 66px;
  top: 15px;

  display: flex;
  align-items: center;
  text-align: right;

  /* color/blue_dark */

  color: #0f2a48;
}
.floor1 {
  position: absolute;
  height: 58px;
  left: 0px;
  right: 0px;
  /* color/Beige_4 */

  background: #cccbc2;
}
.imgMap {
  width: 100%;
  height: 94%;
}
.floors_1 {
  position: absolute;
  width: 38px;
  height: 38px;
  right: 14px;
  top: 9px;

  /* color/Beige_5 */

  border: 1px solid #aaa99d;
  box-sizing: border-box;
  border-radius: 4px;
}
.canvas-wrapper {
  background: #cccbc2;
  position: absolute;
  width: 100%;
  height: 91%;
  /* left: 50px; */
  top: 9%;
}
.Auditorium {
  position: absolute;
  left: calc(53% - 46px / 2 - 43.5px);
  top: 12%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.ship {
  position: absolute;
  width: 70px;
  left: calc(58% - 88px / 2 + 97.94px);
    top: 8%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.Phoenicians {
  position: absolute;
  width: 86px;
  left: calc(45% - 78px / 2 - 67.5px);
  top: 36%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.Crafts {
  position: absolute;
  width: 58px;
  left: calc(53% - 73px / 2 + 23px);
  top: 41%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.revolt{
    position: absolute;
  width: 53px;
 left: calc(55% - 53px/2 + 95px);
  top: 41%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.israelihome{
    position: absolute;
  width: 85px;
left: calc(51% - 85px/2 + 27px);
  top: 70%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.religion{
    position: absolute;
  width: 27px;
left: calc(50% - 92px/2 - 131px);
  top: 70%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.Entrance{
      position: absolute;
width: 26px;
left: calc(50% - 86px/2 - 134.5px);
  top: 88%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
</style>