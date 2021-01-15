<template>
  <div class="movieViewer">
   
    <video-player class="video-player-box"
                 ref="videoPlayer"
                 type= "video/mp4"
                 :options="playerOptions"
                 :playsinline="true"
                ></video-player>
  </div>
</template>

<script>

import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
import { storage } from "../main";
export default{
    name:'movieViewer',
    components:{
      videoPlayer
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },

    data:()=> ({
      selectedMovie:"",
        playerOptions: {
          // videojs options
          muted: false,
          autoplay: true,
          language: 'en',
          sources: [{
            type: "video/mp4",
            src: ""
          }]
        }
    }),
    beforeRouteEnter(to, from, next) {
   next(vm =>{
     vm.getMovie(to.params.id)
   })},
     mounted(){
        this.getMovie(this.$route.params.id);
    },
    
    methods:{   
      
     async getMovie(movieName){
      this.selectedMovie = await storage.ref(`/videos/${movieName}.mp4`).getDownloadURL();
      this.playerOptions.sources[0].src=this.selectedMovie;
     }
    },
    beforeDestroy(){
      let viewRatePercentage = (this.player.currentTime()/this.player.duration())*100;
      this.$gtag.event('views_movie',{movieName:this.$route.params.id,viewRate:viewRatePercentage.toFixed(2)});
      console.log(viewRatePercentage.toFixed(2));
    }

}
</script>

<style>
.movieViewer{
  height:100%;
  width:100%;
}
.video-js{
    width: 100% !important;
    height: 88% !important;
}
.video-player.video-player-box{
   height:100%;
  width:100%;
  
}
video {
  /* override other styles to make responsive */
  width: 100% !important;
  height:100%;
}

</style>
