
<template>
  <div class="secondFloor">
    <div class="canvas-wrapper">
      <div class="floor2">
        <a href="/map">
          <v-img class="floors_2" src="../assets/floors_2.png" />
        </a>

        <p class="floorTitl2">
          {{ $t("floor2") }}
        </p>
      </div>

      <img class="imgMap" src="../assets/secondfloor.png" />
      <button class="Auditorium">
        {{ $t("Auditorium") }}
      </button>
      <button class="office">
        {{ $t("office") }}
      </button>

      <button
        class="ThematicDisplays"
        v-on:click="goToRoute('ThematicDisplays')"
      >
        {{ $t("ThematicDisplays") }}
      </button>
      <button class="ExchangingExhibition">
        {{ $t("ExchangingExhibition") }}
      </button>
      <button class="ArtDepartment">
        {{ $t("ArtDepartment") }}
      </button>
      <button class="ThematicViews">
        {{ $t("ThematicViews") }}
      </button>
    </div>
    <!-- <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
       :to="`/secondFloor`" 
      :src="item.src"
    ></v-carousel-item>
  </v-carousel> -->
  </div>
</template>

<script>
export default {
  name: "secondFloor",
  methods: {
    goToRoute: function (route) {
      this.$router.push(`/${route}`).catch((err) => {
        err;
      });
    },
  },
  //  data () {
  //     return {
  //       items: [
  //         {
  //           src: "/map",
  //         },
  //         {
  //           src: "/secondFloor",
  //         },
  //           ],
  //     }
  //   },
};
</script>

<style scoped>
.secondFloor {
  background: #cccbc2;
}
.floorTitl2 {
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
  margin-top: 50px;
  width: 100%;
  height: 94%;
  background: #cccbc2;
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
.canvas-wrapper {
  background: #cccbc2;
  position: absolute;
  width: 100%;
  height: 96%;
}

.Auditorium {
  position: absolute;
  width: 46px;
  left: calc(50% - 46px / 2 - 43.5px);
  top: 22%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
.office {
  position: absolute;
  width: 26px;
  left: calc(50% - 12px / 2 + 146.5px);
  top: 30%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}

.ExchangingExhibition {
  position: absolute;
  width: 58px;
  left: calc(50% - 58px / 2 + 122.5px);
  top: 50%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
.ThematicDisplays {
  position: absolute;
  width: 85px;
  left: calc(53% - 85px / 2 + 79px);
  top: 80%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #0f2a48;
}
.ArtDepartment {
  position: absolute;
  width: 73px;
  left: calc(50% - 84px / 2 + 0px);
  top: 52%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}

.ThematicViews {
  position: absolute;
  width: 89px;
  left: calc(50% - 67px / 2 - 110px);
  top: 71%;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #6c757d;
}
</style>


