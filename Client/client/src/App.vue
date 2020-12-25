<template>
  <v-app>
    <NavHeader></NavHeader>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
    <v-footer color="#ee9c3f"
    padless>
      <v-col class="text-center" cols="12">
        <a href="https://mushecht.haifa.ac.il/index.php?option=com_sppagebuilder&view=page&id=1&Itemid=101&lang=he"
          >{{ $t('Visit Hecht Museum page') }}</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import NavHeader from "./components/NavHeader";
export default {
  name: "App",
  components: {
    NavHeader,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.main {
  background: rgb(255, 229, 196);
}
footer {
  background-color: rgb(252, 152, 70);
}
</style>
