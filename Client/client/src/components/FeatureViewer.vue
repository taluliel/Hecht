<template>
  <div class="canvas-wrapper">
    <v-img
      contain
      :src="image1"
      class="featureImage"
    >
    <div  v-if="imageDetails">
      <div
        v-for="(item, index) in imageDetails.features"
        :key="index"
        v-on:click="goToQuestionCategories(item.featureid)"
        class="flex-rectangle"
        :style="{
          top: item.coords.y + 'px',
          left: item.coords.x + 'px',
          height: item.coords.height ? `${item.coords.height}px`:'100px',
          width: item.coords.width ? `${item.coords.width}px`:'100px'
        }"
      />
    </div>
    </v-img>
  </div>
</template>
<script>
import { storage } from "../main";

export default {
  name: "featureViewer",
  props: { imageDetails: Object, room: String },
  data() {
    return { image1: "" };
  },
  methods: {
    goToQuestionCategories(featureID) {
      //(`In feature ${featureID}`);
      this.$router.push(`/feature/${featureID}`).catch((err) => {
       
        err;
      });
    },
    async getImageUrl(imageName) {
      this.image1 = await storage
        .ref(`/images/${imageName}.jpg`)
        .getDownloadURL();
    },
  },
  updated() {
    if (this.imageDetails.name) {
       //logUser(`In feature ${featureID}`);
      this.getImageUrl(this.imageDetails.name);
    }
    
  },
  computed: {
    getImage: function () {
      return this.imageDetails.name;
    },
    getCoords: function () {
      return this.imageDetails.coords;
    },
  },
};
</script>
<style scoped>
.featureImage {

  clip-path: url(#clip); 
/*    
  mask-image: url("../assets/rectangle.svg?inline");
  mask-size:100vmin;
  mask-repeat: no-repeat;
  mask-position: center; */
}
 .flex-rectangle {

  border: 3px solid rgb(233, 143, 41);
  position:absolute;
} 

.featureImage {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  max-width: 100%;
  height: auto;
  /* position: absolute;
  clip: rect(30px, 170px, 170px, 30px); */
}
</style>