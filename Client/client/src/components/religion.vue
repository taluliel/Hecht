<template>
  <div class="religion">
    <div class="Poi">
      <p class="PoiTitle">
        {{ $t("religion") }}
      </p>
    </div>
    <div class="POI">
      <img class="imgMap" src="../assets/religion.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "religion",
};
</script>

<style scoped>
.religion {
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
  width: 90%;
  height: 100%;
  margin-left: 18px;
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