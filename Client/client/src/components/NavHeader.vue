<template>
  <div>
    <v-toolbar class="primaryNav">
        <v-row>
    <v-col cols="2">
      <v-img
        class="university"
        alt="university Logo"
        contain
        position="absolute"
        src="../assets/haifa_uni_logo.png"
        max-width="28px"
      />
 </v-col>
<v-col cols="8">
      <v-toolbar-title class="title">
        {{ $t("title") }}
      </v-toolbar-title>
 </v-col>
<v-col cols="2">
      <a href="/?home" >
        <v-img class="hecht"
          alt="Hecht Logo"
          contain
          position="absolute"
          src="../assets/hecht_Logo.png"
          max-width="28px"
        />
      </a>
      </v-col >
      </v-row>
    </v-toolbar>


    <div class="fram22">
      <v-btn icon v-on:click="back()" class="chevron-right">
        <v-icon> mdi-chevron-right </v-icon>
      </v-btn>
      <div class="roomQuery-container">
        <RoomQuery></RoomQuery>
      </div>
    </div>
  </div>
</template>



<script>
import RoomQuery from "./RoomQuery";
import EventBus from "../eventBus";

export default {
  name: "NavHeader",
  components: {
    RoomQuery,
  },
  methods: {
    choose(lang) {
      this.$i18n.locale = lang;
      this.$vuetify.rtl = lang == "he" || lang == "ar";
      EventBus.$emit("locale_changed", lang);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.roomQuery-container {
  width: 100%;
}
.align-center img {
  cursor: pointer;
}
.primaryNav {
  height: 37px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* color/final/background/bright&text */

  background: #fbfaf9;
  /* effect/drop_shadow/patch */

  box-shadow: 0px 3px 5px rgba(11, 14, 36, 0.15);
}
.title {
  position: absolute;
  width: 218px;
 height: 29px;
  top: 0px;
  left: calc(50% - 199px / 2 - 5.32px);

  /* Assistent/Headline/H6 */

  font-family: Assistant;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 22px;
  /* identical to box height, or 137% */

  text-align: center;

  /* color/final/pink_light */

  color: #5c3f55;
}
.university {
  position: absolute;
  height: 29px;
     top: 0px;

}
.hecht {
   position: absolute;
     width: 39px;
    height: 29px;
     top: 0px;
}
.fram22 {
  height: 70px;
  left: 0px;
  right: 0px;
  top: 37px;

  /* color/final/background/left menu */

  background: #eeeee9;
  /* 
height: 66px;
left: 0px;
right: 0px;

background: #EEEEE9; */
}
.chevron-right {
  position: absolute;
  height: 134px;
  width: 36px;
  right: 11px;
  top: 20px;

  /* color/final/pink_light */
  color: #5c3f55;
  mix-blend-mode: normal;
}
.roomQuery-container {
  width: 270px;
  height: 55px;
  left: 66px;
  top: 11px;
  bottom: 11px;
  margin-left: 55px;
  margin-right: 60px;
  background: #e0e0d8;
  /* effect/drop_shadow/button_down */

  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.12),
    inset 0px 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  
}
</style>
