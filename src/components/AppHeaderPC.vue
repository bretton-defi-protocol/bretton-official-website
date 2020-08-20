<template>
  <div class="app-header-pc flex-between">
    <h1 class="logo col-1">
      <img :src="logoSrc" alt="logo">
    </h1>
    <nav class="nav col-4">
      <ul>
        <li v-for="(item, index) in navArr" :key="index">{{ item.text }}</li>
        <div class="switch-lang">
          <span>切换语言</span>
          <div class="popover-lang popover" v-if="showLangPopover">
            <p class="zh active">中文</p>
            <p class="en">English</p>
          </div>
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
      navArr: [
        { id: "00", text: "首页" },
        { id: "01", text: "论坛" },
        { id: "02", text: "合作" }
      ],
      showLangPopover: false
    };
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
  // margin-bottom: 1.2rem;
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

    // .popover {
    //   position: absolute;
    //   bottom: 0;
    //   display: inline-block;
    //   width: 2.89rem;
    //   height: 1.89rem;
    //   background: rgba(255, 255, 255, 1);
    //   border-radius: 0.04rem;
    //   font-weight: 400;
    //   line-height: 0.28rem;
    //   color: rgba(13, 26, 38, 1);
    //   opacity: 1;
    //   bottom: -2.2rem;
    //   left: -2.1rem;
    //   padding: 0.14rem 0;
    //   font-size: 0.28rem;
    //   &::after {
    //     position: absolute;
    //     content: "";
    //     width: 0.25rem;
    //     height: 0.6rem;
    //     background: transparent;
    //     border: 0.3rem solid;
    //     top: -0.6rem;
    //     border-width: 0.24rem 0.16rem;
    //     border-style: solid;
    //     border-color: transparent transparent#ffffff transparent;
    //     right: 0.2rem;
    //   }

    //   > p {
    //     padding: 0.2rem 0.32rem;
    //     position: relative;
    //     text-align: left;
    //     &.active {
    //       color: rgba(253, 38, 124, 1);
    //       background: rgba(253, 38, 124, 0.1);

    //       &:after {
    //         position: absolute;
    //         content: "";
    //         width: 0.08rem;
    //         height: 100%;
    //         background: rgba(253, 38, 124, 1);
    //         right: 0.02rem;
    //         top: 0;
    //       }
    //     }
    //   }
    // }
  }
}
</style>
