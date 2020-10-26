<template>
    <v-app-bar
      app
      color="white"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Hecht Logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.jpeg"
          transition="scale-transition"
          width="40"
        />
      </div>

        <div class="roomQuery-container">
        <RoomQuery></RoomQuery>
        </div>
      <v-spacer></v-spacer>

    </v-app-bar>
    
</template>

<script>
import RoomQuery from './RoomQuery'
export default{
    name:'NavHeader',
    components:{
        RoomQuery
    }
}

</script>

<style scoped>
.roomQuery-container{
    width:100%;
    
}
</style>
