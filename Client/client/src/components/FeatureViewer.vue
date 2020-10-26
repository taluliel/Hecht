<template>
    <div class="canvas-wrapper">
        <v-img contain :src="imageDetails.src" class="featureImage">
            <div  v-for="(item,index) in imageDetails.features" :key="index" 
            v-on:click="goToQuestionCategories(item.featureID)"
            class="rect" :style="{top:item.coords.y+'px',left:item.coords.x+'px',height:item.coords.length+'px',width:item.coords.length+'px'}"/>
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
        init(){
            console.log("we are in init");
            console.log(this.image1)
        },
        goToQuestionCategories(featureID){
             this.$router.push(`/feature/${featureID}`).catch(err=>{err})
        }
    },
    computed:{
        getImage: function(){
            return this.imageDetails.src;
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
.rect{
   position: relative;
    border:2px solid red;
}
</style>