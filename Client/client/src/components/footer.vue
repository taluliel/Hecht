<template>
  <v-footer class="primaryNav">
<v-row>
    <v-col cols="4">
    <v-menu bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="lang" icon v-bind="attrs" v-on="on" style="height:25px; width:91px;">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title v-on:click="choose('he')"
            >עברית&nbsp;</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title v-on:click="choose('en')"
            >English&nbsp;</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-title v-on:click="choose('ar')"
            >عربيه&nbsp;</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
    </v-col>
<v-col cols="4">
    <a href="/">
      <v-img
        class="ex"
        contain
        src="../assets/museum.png"
        max-width="28px"
        margin-right="35px"
      />
    </a>
</v-col >
 <v-col  cols="4">
    <a href="/">
      <v-img
        class="map"
        contain
        src="../assets/map.png"
        max-width="28px"
        margin-right="35px"
      />
    </a>
</v-col>
</v-row>
  </v-footer>
</template>


<script>
import EventBus from "../eventBus";

export default {
  name: "Footer",
  methods: {
    choose(lang) {
      this.$i18n.locale = lang;
      this.$vuetify.rtl = lang == "he" || lang == "ar";
      EventBus.$emit("locale_changed", lang);
    },
  },
};
</script>

<style scoped>
.primaryNav {
  background: #fbfaf9;
}

.ex{
 margin-right:35px;
 margin-left:35px;
}
.map{
 margin-right:35px;
  margin-left:35px;
} 

</style>
