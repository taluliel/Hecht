<template>
  <div class="Crafts">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("Crafts") }}
      </p>
    </div>
    <div class="POI">
      <img class="imgMap" src="../assets/Crafts.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Crafts",
};
</script>

<style scoped>
.Crafts {
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
  width: 95%;
  height: 100%;
 margin-left: 9px;
}

.POI {
    background: #cccbc2;
    position: absolute;
    width: 100%;
    height: 91%;
    /* left: 50px; */
    top: 9%;
}

</style>