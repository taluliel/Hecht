<template>
<div class="roomQuery">
 <v-toolbar  color="White" flat >
 <!-- <v-toolbar-title>Choose room</v-toolbar-title> -->
  <v-autocomplete
 
      v-model="select"
      :items="items"
      v-on:change="goToRoom"
      cache-items
      class="mx-8 white--text"
      flat
      hide-no-data
      hide-details
      item-text="roomCode"
    item-value="roomCode"
      v-bind:label="nav_label"
    ></v-autocomplete>
    
  </v-toolbar>

</div>
</template>

<script>
import {db} from '../main';
export default{
    name:'roomQuery',
    data:()=> ({
        // items:[2000,3000,4000,5000],
        items:[],
        select:null
    }),
    computed:{
      nav_label:function(){
        return 'Please choose a room code';
      }
    },
    firestore(){
    return {
      items: db.collection('rooms').where('roomCode',"!=",null)
    }
  },
  mounted(){

    
  },
    methods:{
      goToRoom: function (){
        this.$router.push(`/room/${this.select}`).catch(err=>{err})

      
      }
    }

}
</script>

<style scoped>
.roomQuery{
    width:100%;
}
</style>
