<template>
  <div class="canvas-wrapper">
    <v-img
      contain
      max-height="390"
      max-width="360"
      :src="image1"
      class="featureImage"
    >
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
    console.log(this.imageDetails);
  },
  computed: {
    getImage: function () {
      return this.imageDetails.name;
    },
    getCoords: function () {
        console.log(this.imageDetails);
      return this.imageDetails.coords;
    },
  },
};
</script>
<style scoped>
.featureImage {
  clip-path: url(#clip);
}
.flex-rectangle {

  border: 3px solid red;
  position:absolute;
}
/* .flex-rectangle:before{
    content: "";
    display: block;
    padding-top: 25%;
} */
.featureImage {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  max-width: 100%;
  height: auto;
}
</style>