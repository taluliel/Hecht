<template>
<div class="home"> 
  <h1  style="font-family: Arial, Helvetica, sans-serif">{{ $t('museum_name') }}</h1>
  <button type="button" class="start">{{ $t('start_tour') }}</button>
  <input type="hidden" id="custId" name="custId" value="3487">
<!-- <v-toolbar  color="White" flat >
  <v-toolbar-title>Choose room</v-toolbar-title> -->
  <!-- <v-autocomplete
 
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
    
  </v-toolbar> --> 
</div>
</template>

<script>
import {db} from '../main';
export default {
    name:'Home',
     data:()=> ({
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
        console.log(this.select);
        this.$router.push(`/room/${this.select}`).catch(err=>{err})

      
      }
    }

}

</script>

<style>
.home{
  height:100%;
  width:100%;
  padding: 70px;  
  background-image: url("../assets/EntranceReubenHecht.jpg");
  background-size: 100% 75%;
  background-position-y: bottom;
  animation: anim1 ease-in-out 20s infinite;
  }

  @keyframes anim1 {
    0%{
      background-image: url("../assets/EntranceReubenHecht.jpg");
    }
    25% {
       background-image: url("../assets/ArtsCrafts.jpg");
    }
    50% {
       background-image: url("../assets/ShipFront.jpg");
    }
    75%{
       background-image: url("../assets/Coins.jpg");
    }
    100%{

    }
  }
  .start {
    background-color: #69c26c;
    font-size: 16px;
    padding: 10px 24px;
    border-radius: 8px;
    }
</style>