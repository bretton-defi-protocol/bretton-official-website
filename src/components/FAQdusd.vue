<template>
  <div class="faq">
    <div class="global-width flex-between faq-wrap">
      <div class="faq-left col-md-6 col-sm-12">
        <div class="text-box">
          <h5 class="title">{{$t('faqFordUSD.whatdUSD')}}</h5>
          <p class="para">{{$t('faqFordUSD.duSDdesc')}}</p>
        </div>
      </div>
      <div class="faq-right col-md-6 col-sm-12">
        <span class="faq-img-box">
          <img :src="faqImg" alt>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "faq-dusd",

  data() {
    return {
      faqImg: require("@/assets/images/faq/faq.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.faq {
  height: 790px;
  width: 100%;
  background-image: url("../assets/images/faq/faq-bg.png");
  padding-top: 180px;
  padding-bottom: 200px;

  .text-box {
    margin-top: 0.2rem;
    margin-bottom: 1.2rem;

    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: rgba(49, 70, 89, 1);
    opacity: 1;
    width: 3.6rem;
    text-align: left;

    .title {
      font-size: 32px;
      font-weight: 500;
      line-height: 45px;
      color: rgba(49, 70, 89, 1);
      opacity: 1;
      margin-bottom: 0.42rem;
    }
  }

  .faq-wrap {
    flex-wrap: wrap;
  }

  .faq-img-box {
    width: 606px;
    height: 400px;

    img {
      max-width: 100%;
    }
  }
}

@media (max-width: 769px) {
  .faq {
    height: auto;
    padding-top: initial;
    padding-bottom: 1.46rem;
    margin-top: 180px;
    // margin-bottom: 200px;

    .text-box {
      margin-top: 1.44rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
    }
  }
}
</style>
