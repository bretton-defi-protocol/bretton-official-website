<template>
  <div class="experience-bar">
    <div class="global-width experience-bar-wrap">
      <p class="text text-desktop">
        <span>
          已铸币挖矿
          <i class="num">{{ mintVal}}</i>DELT,
        </span>
        <span>
          已获得分红收益
          <i class="num">${{ delta}}</i> DELT
        </span>
      </p>

      <div class="text text-mobile">
        <p>
          已铸币挖矿
          <i class="num">{{ mintVal}}</i>DELT,
        </p>
        <p>
          已获得分红收益
          <i class="num">${{ delta}}</i> DELT
        </p>
      </div>
      <p>
        <span class="btn-experience">开始体验</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "experience-bar",
  data() {
    return {
      mintVal: "76556",
      delta: "7633.8666"
    };
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

  .btn-experience {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: rgba(253, 38, 124, 1);
    opacity: 1;
    padding: 12px 40px;
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    border-radius: 20px;
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

