<template>
<v-app>
  <NavHeader></NavHeader>
    <v-main class="main">
        <router-view></router-view>
       </v-main>
  </v-app>
</template>

<script>
import NavHeader from './components/NavHeader'
export default {
  name: 'App',

  components: {
    NavHeader
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.main{
  background:rgb(255, 229, 196);
}
</style>
