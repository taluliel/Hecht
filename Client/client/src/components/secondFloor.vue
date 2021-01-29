<template>
  <div class="secondFloor">
    <div class="floor2">
      <a href="/map">
        <v-img class="floors_2" src="../assets/floors_2.png" />
      </a>
      <p class="floorTitle2">
        {{ $t("floor2") }}
      </p>
    </div>
    <div class="canvas-wrapper">
      <img class="imgMap" src="../assets/secondfloor.png" />
           <button class="Auditorium" onclick="window.location.href='/map'">
        {{ $t("Auditorium") }}
      </button>
      <button class="office" onclick="window.location.href='/map'">
        {{ $t("office") }}
      </button>

      <button class="ThematicViews" onclick="window.location.href='/map'">
        {{ $t("ThematicViews") }}
      </button>
      <button class="ExchangingExhibition" onclick="window.location.href='/map'">
        {{ $t("ExchangingExhibition") }}
      </button>
         <button class="ArtDepartment" onclick="window.location.href='/map'">
        {{ $t("ArtDepartment") }}
      </button>
          <button class="ExchangingExhibition2" onclick="window.location.href='/map'">
        {{ $t("ExchangingExhibition2") }}
      </button>
       
    </div>
  </div>
</template>

<script>
export default {
  name: "secondFloor",
};
</script>

<style scoped>
.map {
  background: #cccbc2;
}
.floorTitle2 {
position: absolute;
  width: 108px;
  height: 22px;
  right: 66px;
  top: 11px;


  display: flex;
  align-items: center;
  text-align: right;

  /* color/blue_dark */

  color: #0f2a48;
}
.floor2 {
  position: absolute;
  height: 49px;
  left: 0px;
  right: 0px;
  /* color/Beige_4 */
border-style: groove;
  background: #cccbc2;
}
.imgMap {
    margin-top: 5px;
  width: 100%;
  height: 94%;
}
.floors_2 {
    position: absolute;
    width: 38px;
    height: 31px;
    right: 14px;
    top: 7px;

  /* color/Beige_5 */

  border: 1px solid #aaa99d;
  box-sizing: border-box;
  border-radius: 4px;
}
.canvas-wrapper{
    background: #CCCBC2;
    position: absolute;
    width: 100%;
    height: 91%;
    /* left: 50px; */
    top: 9%;

}
.Auditorium {
  position: absolute;
 width: 46px;
left: calc(50% - 46px/2 - 43.5px);
  top: 12%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.office {
  position: absolute;
width: 26px;
left: calc(50% - 12px/2 + 146.5px);
    top: 20%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}

.ExchangingExhibition {
  position: absolute;
  width: 58px;
left: calc(50% - 58px/2 + 122.5px);
  top: 41%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.ThematicViews {
  position: absolute;
  width: 85px;
left: calc(50% - 85px/2 + 79px);
  top: 69%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.ArtDepartment{
    position: absolute;
 width: 73px;
left: calc(50% - 84px/2 + 0px);
  top: 42%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}

.ExchangingExhibition2{
    position: absolute;
    width: 89px;
    left: calc(50% - 67px/2 - 110px);
  top: 61%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}

</style>