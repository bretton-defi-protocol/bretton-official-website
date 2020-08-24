<template>
  <div class="question" id="question-section" :class="{show: showUp}">
    <div class="global-width question-wrap">
      <h4 class="section-title">{{ $t('question.questionTitle')}}</h4>
      <transition name="slide-fade">
        <ul class="question-list">
          <li
            v-for="(item, index) in questionArr"
            :key="index"
            class="question-item"
            :class="{active: activeIndex == index}"
            @click="changeActiveItem(item, index)"
          >
            <span class="icon-arrow">
              <img :src="arrowUp" alt="arrowUp" v-if="activeIndex !== index">
              <img :src="arrowDown" alt="arrowDown" v-if="activeIndex == index">
            </span>
            <div class="text-box">
              <div class="item-header">{{ item.title }}</div>
              <div class="item-body" v-if="activeIndex == index && !item.textIsArr">{{ item.text }}</div>
              <div class="item-body" v-if="activeIndex == index && item.textIsArr">
                <div class="sub-text-item" v-for="(subItem, index) in item.text" :key="index">
                  <span class="step">第{{ subItem.step }}步</span>
                  <p>{{ subItem.text }}</p>
                </div>
              </div>
            </div>
          </li>
          <p class="tip">
            {{ $t('question.more')}}
            <a class="link">{{ $t('question.moreLink')}}</a>
          </p>

          <div class="bottom-img"></div>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
import ScrollFn from "@/mixins/scrollFn";
export default {
  name: "question",
  mixins: [ScrollFn],

  data() {
    return {
      arrowUp: require("@/assets/images/question/icon-arrow-up.png"),
      arrowDown: require("@/assets/images/question/icon-arrow-down.png"),
      activeIndex: 1
    };
  },

  computed: {
    questionArr() {
      return [
        {
          title: this.$t("question.item01Title"),
          text: this.$t("question.item01Desc"),
          textIsArr: false
        },
        {
          title: this.$t("question.item02Title"),
          text: this.$t("question.item02Desc"),
          textIsArr: true
        },
        {
          title: this.$t("question.item03Ttile"),
          text: this.$t("question.item03Desc"),
          textIsArr: false
        },
        {
          title: this.$t("question.item04Title"),
          text: this.$t("question.item04Desc"),
          textIsArr: true
        },
        {
          title: this.$t("question.item05Title"),
          text: this.$t("question.item05Desc"),
          textIsArr: false
        }
      ];
    }
  },

  methods: {
    changeActiveItem(item, index) {
      this.activeIndex = index;
    }
  },
  mounted() {
    this.id = "question-section";
  }
};
</script>
<style lang="scss" scoped>
.question {
  padding-bottom: 3.6rem;
  .section-title {
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
    color: rgba(49, 70, 89, 1);
    opacity: 1;
    margin-bottom: 0.64rem;
  }

  &-item {
    display: flex;
    padding: 34px 48px;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: rgba(49, 70, 89, 1);
    background: linear-gradient(
      270deg,
      rgba(239, 242, 246, 0) 0%,
      rgba(239, 242, 246, 1) 100%
    );
    margin-bottom: 0.2rem;
    text-align: left;
    opacity: 0;
    transform: translate(-500px, 0);
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;

    &.active {
      background: rgba(253, 38, 124, 0.01);
      border: 1px solid rgba(253, 38, 124, 1);
    }

    .icon-arrow {
      display: inline-block;
      width: 0.32rem;
      height: 0.32rem;
      margin-right: 0.48rem;

      img {
        max-width: 100%;
      }
    }

    .item-body {
      margin-top: 0.4rem;

      .sub-text-item {
        z-index: 3;
        > p {
          display: inline-block;
          width: 80%;
          vertical-align: text-top;
        }

        .step {
          vertical-align: text-top;
          display: inline-block;
          width: 0.7rem;
          font-weight: 600;
          margin-right: 0.08rem;
          letter-spacing: 0.04rem;
        }
      }
    }

    .text-box {
      flex: 2;
      z-index: 3;
    }
  }

  &.show {
    .question-item {
      animation-name: showQuestionItem;
      &:nth-of-type(1) {
        animation-delay: 0;
      }
      &:nth-of-type(2) {
        animation-delay: 0.4s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.8s;
      }
      &:nth-of-type(4) {
        animation-delay: 1.2s;
      }
      &:nth-of-type(5) {
        animation-delay: 1.6s;
      }
      &:nth-of-type(6) {
        animation-delay: 2s;
      }
    }
  }

  @keyframes showQuestionItem {
    0% {
      opacity: 0;
      transform: translate(-500px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }

  .tip {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #314659;
    text-decoration: underline;
    opacity: 1;
    text-align: left;

    .link {
      color: #fd267c;
    }
  }

  .bottom-img {
    background: url("../assets/images/question/question-img.png");
    background-repeat: no-repeat;
    width: 4rem;
    height: 3.14rem;
    position: absolute;
    bottom: 0.1rem;
    right: 0;
    z-index: -1;
  }

  .question-list {
    position: relative;

    .question-item {
      cursor: pointer;
    }
  }
}

@media (max-width: 769px) {
  .question {
    height: auto;
    padding-top: initial;
    padding-bottom: 2.4rem;

    &-list {
      margin-left: 0.24rem;
      margin-right: 0.24rem;
    }

    &-item {
      padding: 0.3rem 0.16rem;

      .item-body {
        margin-top: 0.36rem;
      }
    }

    .bottom-img {
      position: relative;
      bottom: initial;
      right: initial;
      margin: 0.42rem auto;
      background-size: contain;
      max-width: 100%;
      margin-right: 0.24rem;
      margin-left: 0.24rem;
    }
  }
}
</style>

