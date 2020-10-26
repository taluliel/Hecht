<template>
<div class="room">
I am in room {{currentRoom}}
<feature-viewer :image-details="rooms[currentRoom]" :room="currentRoom"></feature-viewer>
</div>

</template>

<script>
import bronze from '../assets/HQ_BronzeTools.jpg';
import anth from '../assets/Anthropoids.jpg';
import logo from '../assets/logo.jpeg';
import FeatureViewer from './FeatureViewer';


export default{
    name:'room',
    components:{FeatureViewer},
    data:()=> ({
        items:[2000,3000,4000,5000],
        currentRoom:null,
        rooms:{
            2000:{src:logo,features:[{coords:{x:0,y:0,length:100},featureID:1}]},
            3000:{src:logo,features:[{coords:{x:100,y:50,length:200},featureID:2}]},
            4000:{src:bronze,features:[{coords:{heigh:22, width:20, y:142, x:396},featureID:3}]},
            5000:{src:anth,features:[{coords:{heigh:150, width:20, y:100, x:458},featureID:4},{coords:{heigh:200, width:10, y:142, x:100},featureID:5}]}
        }
    }),
  
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
