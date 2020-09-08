<template>
  <div class="app-header-pc flex-between">
    <h1 class="logo-pc col-1">
      <img :src="logoSrc" alt>
    </h1>
    <nav class="nav col-4">
      <ul>
        <li
          v-for="(item, index) in navArr"
          :key="index"
          @click="switchItem(item, index)"
        >{{ item.text }}</li>
        <div class="switch-lang">
          <span @click="switchLang" v-if="lang == 'zh-CN'">English</span>
          <span @click="switchLang" v-else>切换中文</span>
          <!-- <div class="popover-lang popover" v-if="showLangPopover">
            <p class="zh active">中文</p>
            <p class="en">English</p>
          </div>-->
        </div>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "app-header-PC",

  data() {
    return {
      logoSrc: require("@/assets/images/header/logo.png"),
      // navArr: [
      //   { id: "00", text: this.$t("nav.home"), anchor: "firstScreen" },
      //   { id: "01", text: this.$t("nav.forum"), anchor: "forum" },
      //   { id: "02", text: this.$t("nav.coporation"), anchor: "contact" }
      // ],
      showLangPopover: false,
      lang: localStorage.getItem("lang") || "zh-CN"
    };
  },

  computed: {
    navArr() {
      return [
        { id: "00", text: this.$t("nav.home"), anchor: "firstScreen" },
        { id: "01", text: this.$t("nav.forum"), anchor: "forum" },
        { id: "02", text: this.$t("nav.coporation"), anchor: "contact" },
        { id: "03", text: this.$t("nav.useapp"), anchor: "useapp" }
      ];
    }
  },

  methods: {
    switchItem(item, index) {
      // 设置滚动行为改为平滑的滚动

      if (index == "03") {
        window.open("https://app.bretton.finance/home");
        return;
      }

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
    }
  },

  mounted() {
    console.log(this.$t("nav.home"));
  }
};
</script>
<style lang="scss" scoped>
.app-header-pc {
  display: flex;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  padding-top: 0.44rem;
  align-items: center;
  padding-bottom: 1%;

  .logo {
    width: 120px;
    height: 25px;

    img {
      max-width: 100%;
    }
  }

  .nav {
    flex: 7;
    > ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: nowrap;
      align-items: center;
      li {
        cursor: pointer;
        text-transform: capitalize;
      }
    }
  }

  .switch-lang {
    position: relative;
    cursor: pointer;
    padding: 0.04rem 0.16rem;
    border: 0.01rem solid rgba(255, 254, 254, 1);
    opacity: 1;
    border-radius: 0.2rem;
  }

  .logo-pc {
    display: inline-block;
    width: 1.22rem;
    height: 0.25rem;
    // background-image: url("../assets/images/header/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
