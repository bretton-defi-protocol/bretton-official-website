<template>
  <div class="funtion-section">
    <ul class="global-width flex-between fuction-list">
      <li v-for="(item,index) in functionArr" :key="index" class="col-md-4 col-sm-12">
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
export default {
  name: "funtion-section",
  data() {
    return {
      functionArr: [
        {
          title: "铸币",
          desc: "协议用稳定币资产做储备，1:1存入获得dUSD，提高安全性",
          img: require("@/assets/images/function/img-mintage.png")
        },
        {
          title: "挖矿",
          desc: "协议代币Delt采用铸币挖矿机制获得，奖励协议生态贡献者",
          img: require("@/assets/images/function/img-mining.png")
        },
        {
          title: "锁仓",
          desc: "将Delt协议代币锁仓可获得分红池奖励",

          img: require("@/assets/images/function/img-lock.png")
        }
      ]
    };
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

