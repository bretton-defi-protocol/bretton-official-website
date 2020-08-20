<template>
  <div class="home">
    <!-- <FirstScreen/> -->
    <!-- <FunctionSection/> -->
    <!-- <FAQ/> -->
    <ExperienceBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstScreen from "@/components/FirstScreen.vue";
import FunctionSection from "@/components/FunctionSection.vue";
import FAQ from "@/components/FAQ.vue";
import ExperienceBar from "@/components/ExperienceBar.vue";

export default {
  name: "Home",
  components: {
    FirstScreen,
    FunctionSection,
    FAQ,
    ExperienceBar
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
