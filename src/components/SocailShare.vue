<template>
  <div class="social-container">
    <ul class="global-width social-list social-pc">
      <li v-for="(item,index) in socialArr" :key="index" class="social-item">
        <span class="img-box">
          <i>
            <img :src="item.img" :alt="item.alt">
          </i>
        </span>
      </li>
    </ul>

    <ul class="global-mobile social-mobile">
      <div class="first-row">
        <li v-for="(item,index) in socialArr" :key="index" class="social-item" v-if="index <=2">
          <span class="img-box">
            <i>
              <img :src="item.img" :alt="item.alt">
            </i>
          </span>
        </li>
      </div>
      <div class="second-row">
        <li v-for="(item,index) in socialArr" :key="index" class="social-item" v-if="index >=3">
          <span class="img-box">
            <i>
              <img :src="item.img" :alt="item.alt">
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
          img: require("@/assets/images/social/tele.png")
        },
        {
          alt: this.$t("social.discordAlt"),
          img: require("@/assets/images/social/discord.png")
        },
        {
          alt: this.$t("social.twitterAlt"),
          img: require("@/assets/images/social/twitter.png")
        },
        {
          alt: this.$t("social.midiumAlt"),
          img: require("@/assets/images/social/medium.png")
        },
        {
          alt: this.$t("social.githubAlt"),
          img: require("@/assets/images/social/github.png")
        }
      ]
    };
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
}
</style>
