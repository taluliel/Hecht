<template>
<v-app>
  <NavHeader></NavHeader>
    <v-main>
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
