<template>
  <div class="Phoenicians">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("Phoenicians") }}
      </p>
    </div>
    <div class="canvas-wrapper">
      <img class="imgMap" src="../assets/Phoenicians.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Phoenicians",
};
</script>

<style scoped>
.Phoenicians {
  background: #cccbc2;
}
.PoiTitle {
    text-align: center;
     margin-top: 10px;
    color: #0f2a48;
}
.Poi {
    position: absolute;
    /* width: 100px; */
    height: 20%;
    left: 0px;
    right: 0px;
    top: 0%;
    background: #CCCBC2;
}
.imgMap {
    width: 100%;
    height: 100%;
    margin-right: 26px;
}

.canvas-wrapper {
    background: #cccbc2;
    position: absolute;
    width: 100%;
    height: 91%;
    /* left: 50px; */
    top: 9%;
}

</style>