<template>
  <div class="app-header-mobile flex-between">
    <h1 class="col-10">
      <a class="logo">
        <img :src="logoMobile" alt="logo">
      </a>
    </h1>
    <div class="nav-btn col-2">
      <span class="nav-btn-icon" @click="showPopoverNav=true" v-if="!showPopoverNav">
        <img :src="navBtnIcon" alt>
      </span>
      <span class="nav-btn-icon close" v-if="showPopoverNav" @click="showPopoverNav=false">
        <img :src="navCloseIcon" alt>
      </span>
    </div>
    <transition name="fade">
      <div class="popover-nav popover" v-if="showPopoverNav">
        <p
          v-for="(item,index) in navArr"
          :key="index"
          :class="{active: index ===  activeIndex}"
          @click="switchItem(item, index)"
          class="nav-item"
        >{{ item.text }}</p>
        <p v-if="lang == 'zh-CN'" @click="switchLang">English</p>
        <p v-else @click="switchLang">切换中文</p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "app-header-mobile",

  data() {
    return {
      logoMobile: require("@/assets/images/header/mobile-logo.png"),
      navBtnIcon: require("@/assets/images/header/nav-btn.png"),
      navCloseIcon: require("@/assets/images/header/close.png"),
      activeIndex: 0,
      showPopoverNav: false,
      lang: localStorage.getItem("lang") || "zh-CN",
      navActive: false
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

      let target = document.getElementById(item.anchor);

      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
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

    .cross {
      display: inline-block;
      width: 0.35rem;
      height: 0.025rem;
      background: #ffffff;
      transform: rotate(45deg) translate(-10%, -5%);

      &::after {
        content: "";
        position: absolute;
        width: 0.35rem;
        height: 0.025rem;
        background: #ffffff;
        transform: rotate(90deg) translate(1%, 761%);
      }
    }
  }

  .nav-btn {
    position: relative;
    cursor: pointer;
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

  .nav-item {
    cursor: pointer;
  }
}
</style>
