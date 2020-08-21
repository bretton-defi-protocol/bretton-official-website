<template>
  <div class="home">
    <FirstScreen/>
    <FunctionSection/>
    <FAQdusd/>
    <ExperienceBar/>
    <FAQdelta/>
    <Question/>
    <Forum/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstScreen from "@/components/FirstScreen.vue";
import FunctionSection from "@/components/FunctionSection.vue";
import FAQdusd from "@/components/FAQdusd.vue";
import FAQdelta from "@/components/FAQdelta.vue";
import ExperienceBar from "@/components/ExperienceBar.vue";
import Question from "@/components/Question.vue";
import Forum from "@/components/Forum.vue";

export default {
  name: "Home",
  components: {
    FirstScreen,
    FunctionSection,
    FAQdusd,
    ExperienceBar,
    FAQdelta,
    Question,
    Forum
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
