<template>
  <div class="funtion-section" id="funtion-section">
    <ul class="global-width flex-between fuction-list" :class="{show: showUp}">
      <li v-for="(item,index) in functionArr" :key="index" class="fuction-item col-md-4 col-sm-12">
        <span class="img-box">
          <img :src="item.img" :alt="item.desc">
        </span>
        <h6 class="title">{{item.title}}</h6>
        <p class="desc">{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import ScrollFn from "@/mixins/scrollFn";
export default {
  name: "funtion-section",
  mixins: [ScrollFn],
  data() {
    return {
      showUp: false
    };
  },
  computed: {
    functionArr() {
      return [
        {
          title: this.$t("functionSection.mintTitle"),
          desc: this.$t("functionSection.mintDesc"),
          img: require("@/assets/images/function/img-mintage.png")
        },
        {
          title: this.$t("functionSection.stakingTitle"),
          desc: this.$t("functionSection.stakingDesc"),
          img: require("@/assets/images/function/img-mining.png")
        },
        {
          title: this.$t("functionSection.lockTitle"),
          desc: this.$t("functionSection.lockDesc"),
          img: require("@/assets/images/function/img-lock.png")
        }
      ];
    }
  },
  methods: {},

  mounted() {
    this.id = "funtion-section";
  }
};
</script>
<style lang="scss" scoped>
.funtion-section {
  height: 790px;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  padding-top: 196px;
  padding-bottom: 196px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(105, 123, 140, 1);
  opacity: 1;

  .title {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: rgba(13, 26, 38, 1);
    opacity: 1;
    margin-bottom: 0.07rem;
  }

  .fuction-list {
    flex-wrap: wrap;

    .fuction-item {
      position: relative;
      opacity: 0;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
      cursor: pointer;

      &:hover {
        .img-box {
          transform: scale(1.1);
        }
      }
    }

    &.show {
      .fuction-item {
        &:nth-of-type(1) {
          animation-name: showUp;
          animation-delay: 0;
        }

        &:nth-of-type(2) {
          animation-name: showUp;
          animation-delay: 0.5s;
        }

        &:nth-of-type(3) {
          animation-name: showUp;
          animation-delay: 1s;
        }
      }
    }
  }

  .img-box {
    display: inline-block;
    width: 2.76rem;
    height: 2.76rem;

    img {
      max-width: 100%;
    }
  }

  .desc {
    padding-bottom: 1.18rem;
    width: 220px;
    text-align: center;
    margin: 0 auto;
  }

  @keyframes showUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
}

@media (max-width: 769px) {
  .funtion-section {
    height: auto;
    padding-top: initial;
    padding-bottom: initial;
  }
}
</style>

