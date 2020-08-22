<template>
  <div class="app-header-mobile flex-between">
    <h1 class="col-10">
      <a class="logo">
        <img :src="logoMobile" alt="logo">
      </a>
    </h1>
    <div class="nav-btn col-2">
      <span class="nav-btn-icon" @click="toggleNav">
        <img :src="navBtnIcon" alt>
      </span>
    </div>
    <div class="popover-nav popover" v-if="showPopoverNav">
      <p
        v-for="(item,index) in navArr"
        :key="index"
        :class="{active: index ===  activeIndex}"
        @click="switchItem(item, index)"
      >{{ item.text }}</p>
      <p v-if="lang == 'zh-CN'" @click="switchLang">English</p>
      <p v-else @click="switchLang">切换中文</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-header-mobile",

  data() {
    return {
      logoMobile: require("@/assets/images/header/mobile-logo.png"),
      navBtnIcon: require("@/assets/images/header/nav-btn.png"),
      activeIndex: 0,
      showPopoverNav: false,
      lang: localStorage.getItem("lang") || "zh-CN"
    };
  },
  computed: {
    navArr() {
      return [
        { id: "00", text: this.$t("nav.home"), anchor: "firstScreen" },
        { id: "01", text: this.$t("nav.forum"), anchor: "forum" },
        { id: "02", text: this.$t("nav.coporation"), anchor: "contact" }
      ];
    }
  },

  methods: {
    toggleNav() {
      this.showPopoverNav = !this.showPopoverNav;
    },

    switchItem(item, index) {
      this.activeIndex = index;
      this.showPopoverNav = false;
    },

    switchLang() {
      if (this.lang === "zh-CN") {
        this.lang = "en-Us";
        this.$i18n.locale = this.lang;
        localStorage.setItem("lang", this.lang);
      } else {
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang;
        localStorage.setItem("lang", this.lang);
      }
      this.showPopoverNav = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.app-header-mobile {
  display: none;
  padding-top: 0.45rem;
  .logo {
    width: 2.34rem;
    height: 0.48rem;

    img {
      max-width: 100%;
    }
  }

  .nav-btn-icon {
    width: 46px;
    height: 26px;
    cursor: pointer;

    img {
      max-width: 100%;
    }
  }

  .nav-btn {
    position: relative;
  }

  .popover-nav {
    left: initial;
    right: 0.1rem;
    height: 3.5rem;
    width: 4.8rem;
    top: 1.2rem;
    max-width: 88%;
    z-index: 999;
  }
}
</style>
