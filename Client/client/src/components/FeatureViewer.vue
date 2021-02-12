<template>
  <div class="canvas-wrapper">
    <v-img
      contain
      :src="image1"
      class="featureImage"
    >
      <div
        v-for="(item, index) in imageDetails.features"
        :key="index"
        v-on:click="goToQuestionCategories(item.featureid)"
        class="flex-rectangle"
        :style="{
          top: item.coords.y + '%',
          left: item.coords.x + '%',
          height: item.coords.height ? `${item.coords.height}%`:'100%',
          width: item.coords.width ? `${item.coords.width}%`:'100%'
        }"
      />
    </v-img>
  </div>
</template>
<script>
import { storage } from "../main";
import { logUser } from '../utils/helper';

export default {
  name: "featureViewer",
  props: { imageDetails: Object, room: String },
  data() {
    return { image1: "" };
  },
  methods: {
    goToQuestionCategories(featureID) {
      logUser(`In feature ${featureID}`);
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
/* background-image: url("../assets/highlightEXHIBIT.png"); */
   border: 3px solid rgb(233, 143, 41); 
  /* background-size: 100% 100%; */
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