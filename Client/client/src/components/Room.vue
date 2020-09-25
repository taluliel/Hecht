<template>
<div class="room">
i am in my room {{currentRoom}}
<feature-viewer :image-details="rooms[currentRoom]" :room="currentRoom"></feature-viewer>
</div>
</template>

<script>
import bronze from '../assets/HQ_BronzeTools.jpg';
import logo from '../assets/logo.jpeg';

import FeatureViewer from './FeatureViewer';
export default{
    name:'room',
    components:{FeatureViewer},
    data:()=> ({
        items:[2000,3000,4000,5000],
        currentRoom:null,
        rooms:{
            2000:{src:logo,coords:{x:0,y:0,length:100}},
            3000:{src:logo,coords:{x:100,y:50,length:200}},
            4000:{src:bronze,coords:{x:100,y:50,length:300}},
            5000:{src:bronze,coords:{x:100,y:50,length:400}}
        }
    }),
    // watch:{
    //     '$route.params.id': function (id){
    //        this.currentRoom = id;
    //     }
    // },
    beforeRouteUpdate(to,from,next){
        this.currentRoom = to.params.id;
        next();
    }
    

}
</script>

<style scoped>
.room{
    width:100%;
}
</style>
