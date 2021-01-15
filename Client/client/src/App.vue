<template>
<div>
<loading-screen v-if="splashing"></loading-screen>
  <v-app v-if="!splashing">
    <NavHeader></NavHeader>
    <v-main class="main">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</div>
</template>

<script>
import Footer from './components/footer';
import LoadingScreen from './components/LoadingScreen.vue';
import NavHeader from "./components/NavHeader";
export default {
  name: "App",
  components: {
    NavHeader,
    LoadingScreen,
    Footer
  },
  mounted(){
    this.splashing && setTimeout(function(){this.splashing=false;}.bind(this),5000);
  },

  data: () => ({
    //
    splashing:window.location.search !=='?home'
  }),
};
</script>
<style scoped>
.main {
  /* background: rgb(255, 229, 196); */
    background: #F4F4F1;
    
}

</style>
