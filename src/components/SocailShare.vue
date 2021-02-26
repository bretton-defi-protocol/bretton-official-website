<template>
  <div class="social-container">
    <h3 class="title-more">{{ $t('social.more')}}</h3>
    <ul class="global-width social-list social-pc">
      <li v-for="(item,index) in socialArr" :key="index" class="social-item">
        <span class="img-box">
          <i>
            <img :src="item.img" :alt="item.alt" @click="openWindow(item.url)">
          </i>
        </span>
      </li>
    </ul>

    <ul class="global-mobile social-mobile">
      <div class="first-row">
        <li v-for="(item,index) in socialArr" :key="index" class="social-item" v-if="index <=2">
          <span class="img-box">
            <i>
              <img :src="item.img" :alt="item.alt" @click="openWindow(item.url)">
            </i>
          </span>
        </li>
      </div>
      <div class="second-row">
        <li v-for="(item,index) in socialArr" :key="index" class="social-item" v-if="index >=3">
          <span class="img-box">
            <i>
              <img :src="item.img" :alt="item.alt" @click="openWindow(item.url)">
            </i>
          </span>
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "social-share",

  data() {
    return {
      socialArr: [
        {
          alt: this.$t("social.teleAlt"),
          img: require("@/assets/images/social/tele.png"),
          url: 'https://t.me/Bretton_protocol'
        },
        {
          alt: this.$t("social.discordAlt"),
          img: require("@/assets/images/social/discord.png"),
          url: 'https://discord.gg/Hue2sPK'
        },
        {
          alt: this.$t("social.twitterAlt"),
          img: require("@/assets/images/social/twitter.png"),
          url: 'https://twitter.com/BrettonProtocol'
        },
        {
          alt: this.$t("social.midiumAlt"),
          img: require("@/assets/images/social/medium.png"),
          url: 'https://medium.com/bretton-protocal'
        },
        {
          alt: this.$t("social.githubAlt"),
          img: require("@/assets/images/social/github.png"),
          url: 'https://github.com/bretton-defi-protocol/bretton-core'
        }
      ]
    };
  },
  methods: {
    openWindow(url) {
      window.open(url, '_blank')
    }
  }
};
</script>
<style lang="scss" scoped>
.social {
  &-pc {
    display: block;
  }

  &-mobile {
    display: none;

    .first-row,
    .second-row {
      display: block;

      .social-item {
        display: inline-block;
        width: 30%;
        + .social-item {
          margin-left: 14px;
        }
      }
    }

    .second-row {
      margin-top: 30px;
    }

    .social-item {
      .img-box {
        padding: 12px 22px;
        max-width: 100%;

        > i {
          width: 148px;
          max-width: 100%;
          height: 38px;
          line-height: 38px;
        }
      }
    }
  }

  &-container {
    margin-top: 0.4rem;
    margin-bottom: 0.6rem;
  }

  &-list {
    display: block;
  }

  &-item {
    display: inline-block;
    width: 20%;
    vertical-align: middle;
    cursor: pointer;

    .img-box {
      display: inline-block;
      background: #f6f8fa;
      padding: 24px 30px;
      box-sizing: border-box;
      i {
        display: inline-block;
        width: 156px;
        height: 40px;
        max-width: 100%;

        img {
          max-width: 100%;
        }
      }
    }
  }
}

.title-more {
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  color: #314659;
  opacity: 1;
  margin-bottom: 64px;
}

@media (max-width: 996px) {
  .social {
    &-pc {
      display: none;
    }

    &-mobile {
      display: block;
    }

    &-container {
      margin-bottom: 1.2rem;
    }
  }

  .global-mobile {
    padding-left: 24px;
    padding-right: 24px;
  }

  .title-more {
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
    color: #314659;
    opacity: 1;
    margin-bottom: 48px;
    margin-top: 48px;
  }
}
</style>
