<template>

<div class="home"> 
  <h2>{{ $t('museum_name') }}</h2>
     <p id="startTour" class="font-weight-medium" style="background-color: #ee9c3f;">
     {{ $t('start_tour') }}
    </p>
  </div>
</template>

<script>
import {db} from '../main';
export default {
    name:'home',
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
      items: db.collection('Rooms').where('roomCode',"!=",null)
    }
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
  padding: 60px;
  text-align: center;
  background-image: url("../assets/EntranceReubenHecht.jpg");
  background-size: 100% 65%;
  background-position-y:250px;
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

    h1{
    font-family: Arial, Helvetica, sans-serif;
       }

</style>