<template>
  <div class="faq faq-delta" :class="{show: showUp}" id="faq-delta">
    <div class="global-width flex-between faq-wrap">
      <div class="faq-left col-md-6 col-sm-12">
        <span class="faq-img-box">
          <img :src="deltaImg" alt>
        </span>
      </div>
      <div class="faq-right col-md-6 col-sm-12">
        <div class="text-box">
          <h5 class="title">{{ $t('faqForDelta.whatdelta')}}</h5>
          <ul>
            <li v-for="(item,index) in deltaFaq" :key="index" class="faq-item">
              <i class="dot">
                <img :src="iconoval" alt>
              </i>
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScrollFn from "@/mixins/scrollFn";
export default {
  name: "faq-delta",
  mixins: [ScrollFn],

  data() {
    return {
      deltaImg: require("@/assets/images/faq/delta-img.png"),
      iconoval: require("@/assets/images/faq/icon-oval.png")
    };
  },

  computed: {
    deltaFaq() {
      return [
        {
          text: this.$t("faqForDelta.deltadesc01")
        },
        {
          text: this.$t("faqForDelta.deltadesc02")
        },
        {
          text: this.$t("faqForDelta.deltadesc03")
        },
        {
          text: this.$t("faqForDelta.deltadesc04")
        },
        {
          text: this.$t("faqForDelta.deltadesc05")
        }
      ];
    }
  },

  mounted() {
    this.id = "faq-delta";
  }
};
</script>
<style lang="scss" scoped>
.faq-delta {
  background-image: initial;
  margin-top: 1.3rem;
  padding-bottom: 1.2rem;
  height: auto;

  .faq-img-box {
    position: relative;
    right: -88px;
    top: -119px;
  }

  .text-box {
    width: initial;
    margin-left: 0.28rem;
  }

  .dot {
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 12px;

    img {
      max-width: 100%;
    }
  }

  .faq-item {
    display: flex;
  }

  .title {
    margin-bottom: 0.32rem;
  }

  .faq-left,
  .faq-right {
    opacity: 0;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }

  &.show {
    .faq-right {
      animation-name: showFaqRight;
    }
    .faq-left {
      animation-name: showFaqLeft;
    }
  }

  @keyframes showFaqRight {
    0% {
      opacity: 0;
      transform: translate(100px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  @keyframes showFaqLeft {
    0% {
      opacity: 0;
      transform: translate(-100px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
}

@media (max-width: 769px) {
  .faq-delta {
    margin-top: initial;

    .text-box {
      margin-bottom: initial;
      margin-left: 0;
    }
    .faq-left {
      order: 2;
      margin-top: 0.3rem;

      .faq-img-box {
        right: initial;
        top: initial;
      }
    }
    .faq-right {
      order: 1;
    }
  }
}
</style>
