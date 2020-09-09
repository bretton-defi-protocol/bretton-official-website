<template>
  <div class="experience-bar" id="experience-bar" :class="{show: showUp}">
    <div class="global-width experience-bar-wrap">
      <p class="text text-desktop">
        <span>
          {{ $t("experienceBar.minted")}}
          <!-- <i class="num">{{ mintVal}}</i> -->
          <countTo
            ref="countTo01"
            class="num"
            :autoplay="false"
            :startVal="0"
            :endVal="totalSupply.nUSD"
            :duration="3000"
          ></countTo>nUSD,
        </span>
        <span>
          {{ $t("experienceBar.benefit")}}
          <countTo
            ref="countTo02"
            class="num"
            :autoplay="false"
            :startVal="0"
            :endVal="totalSupply.BRET"
            :duration="3000"
          ></countTo>
          {{ $t('experienceBar.unit')}} BRET
        </span>
      </p>

      <div class="text text-mobile">
        <p>
          {{ $t('experienceBar.minted')}}
          <countTo
            ref="countTo03"
            class="num"
            :autoplay="false"
            :startVal="0"
            :endVal="totalSupply.nUSD"
            :duration="3000"
          ></countTo>nUSD,
        </p>
        <p>
          {{ $t('experienceBar.benefit')}}
          <countTo
            ref="countTo04"
            class="num"
            :autoplay="false"
            :startVal="0"
            :endVal="totalSupply.BRET"
            :duration="3000"
          ></countTo>
          {{ $t('experienceBar.unit')}} BRET
        </p>
      </div>
      <p class="btn-experience-bar">
        <a
          target="_blank"
          href="https://app.bretton.finance/"
          class="btn-experience"
        >{{ $t('experienceBar.btnExperience')}}</a>
      </p>
    </div>
  </div>
</template>
<script>
import countTo from "vue-count-to";
import ScrollFn from "@/mixins/scrollFn";
export default {
  name: "experience-bar",
  components: { countTo },
  mixins: [ScrollFn],

  data() {
    return {
      mintVal: 76556,
      delta: 7633.86
    };
  },

  props: {
    totalSupply: {
      type: Object,
      default: {}
    }
  },

  mounted() {
    this.id = "experience-bar";
  },

  watch: {
    showUp(newVal, oldVal) {
      if (newVal) {
        this.$refs.countTo01.start();
        this.$refs.countTo02.start();
        this.$refs.countTo03.start();
        this.$refs.countTo04.start();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.experience-bar {
  height: 268px;
  background: linear-gradient(
    180deg,
    rgba(253, 38, 124, 1) 0%,
    rgba(255, 119, 84, 1) 100%
  );
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  padding-top: 74px;
  padding-bottom: 74px;
  box-sizing: border-box;
  letter-spacing: 1.2px;

  .experience-bar-wrap {
  }
  .text {
    margin-bottom: 0.34rem;

    &.text-desktop {
      display: block;
    }

    &.text-mobile {
      display: none;
    }
  }

  .btn-experience-bar {
    opacity: 0;
    animation-duration: 2s;
    transform: translate(0, 100px);
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    .btn-experience {
      display: inline;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: rgba(253, 38, 124, 1);
      padding: 12px 40px;
      background: rgba(255, 255, 255, 1);
      border-radius: 20px;
      cursor: pointer;
    }
  }

  @keyframes showBtn {
    0% {
      opacity: 0;
      transform: translate(0, 100px);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0px);
    }
  }

  &.show {
    .btn-experience-bar {
      animation-name: showBtn;
    }
  }

  .num {
    font-size: 32px;
  }
}

@media (max-width: 769px) {
  .experience-bar {
    .text {
      margin-bottom: 0.34rem;

      &.text-desktop {
        display: none;
      }

      &.text-mobile {
        display: block;
      }
    }
  }
}
</style>

