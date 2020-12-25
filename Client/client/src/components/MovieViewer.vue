<template>
  <div class="movieViewer">
    <!-- <vue-core-video-player width="450" src="./vidoe2.mp4"></vue-core-video-player> -->
    <video-player class="video-player-box"
                 ref="videoPlayer"
                 type= "video/mp4"
                 :options="playerOptions"
                 :autoplay="true"
                 :playsinline="true"
                ></video-player>
  </div>
</template>

<script>
// import video1 from '../assets/video1.mp4';
// require styles
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
import { storage } from "../main";
export default{
    name:'movieViewer',
    components:{
      videoPlayer
    },
    data:()=> ({
      selectedMovie:"",
        playerOptions: {
          // videojs options
          muted: false,
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
    height: 100% !important;
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
