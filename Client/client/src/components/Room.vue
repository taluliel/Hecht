<template>
<div class="room">
i am in my room {{currentRoom}}
<feature-viewer :image-details="rooms[currentRoom]"></feature-viewer>
</div>
</template>

<script>
import FeatureViewer from './FeatureViewer';
export default{
    name:'room',
    components:{FeatureViewer},
    data:()=> ({
        items:[2000,3000,4000,5000],
        currentRoom:null,
        rooms:{
            2000:{src:'../assets/HQ_BronzeTools.jpg',coords:{x:0,y:0,length:100}},

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
