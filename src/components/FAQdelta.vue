<template>
  <div class="faq faq-delta">
    <div class="global-width flex-between faq-wrap">
      <div class="faq-left col-md-6 col-sm-12">
        <span class="faq-img-box">
          <img :src="deltaImg" alt>
        </span>
      </div>
      <div class="faq-right col-md-6 col-sm-12">
        <div class="text-box">
          <h5 class="title">我可以使用 DELTA 协议做什么？</h5>
          <ul>
            <li v-for="(item,index) in deltaFaq" :key="index" class="faq-item">
              <i class="dot"></i>
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "faq-delta",

  data() {
    return {
      deltaImg: require("@/assets/images/faq/delta-img.png"),
      deltaFaq: [
        {
          text: "用您的稳定币 铸币 生成 dUSD"
        },
        {
          text: "持有您的 dUSD 来 挖矿 ，获得我们的协议代币 DELT"
        },
        {
          text: "1:1无滑点地 兑换 稳定币"
        },
        {
          text: "销毁 您的 dUSD 换成您需要的稳定币"
        },
        {
          text: "锁仓 DELT 获得收益"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.faq-delta {
  background-image: initial;
  .faq-img-box {
    position: relative;
    right: -88px;
    top: -119px;
  }

  .text-box {
    width: initial;
  }

  .faq-left {
    order: 2;

    .faq-img-box {
      right: initial;
      top: initial;
    }
  }
  .faq-right {
    order: 1;
  }
}

@media (max-width: 769px) {
  .faq-delta {
    margin-top: initial;

    .text-box {
      margin-bottom: initial;
    }
  }
}
</style>
