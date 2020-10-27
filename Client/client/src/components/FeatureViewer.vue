<template>
    <div class="canvas-wrapper">
        <v-img contain :src="imageDetails.name" class="featureImage">
            <div  v-for="(item,index) in imageDetails.features" :key="index" 
            v-on:click="goToQuestionCategories(item.featureID)"
            class="flex-rectangle" :style="{top:item.coords.y+'px',left:item.coords.x+'px',height:item.coords.length+'px',width:item.coords.length+'px'}"/>
        </v-img>

    </div>
</template>
<script>
export default {
    name:'featureViewer',
    props:{imageDetails: Object,room:String},
    data(){
        return {image1: this.imageDetails.src}
    },
    methods:{
            goToQuestionCategories(featureID){
             this.$router.push(`/feature/${featureID}`).catch(err=>{err})
        }
    },
    updated(){
console.log(this.imageDetails);
    },
    computed:{
        getImage: function(){
            return this.imageDetails.name;
        },
        getCoords: function(){
            return this.imageDetails.coords;
        }
    },

}
</script>
<style scoped>
.featureImage{
    clip-path: url(#clip);
}
.flex-rectangle{
    width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid red;
}
.flex-rectangle:before{
    content: "";
    display: block;
    padding-top: 25%;
}
</style>