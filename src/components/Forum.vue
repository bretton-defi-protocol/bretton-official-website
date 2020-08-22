<template>
  <div class="forum corporation" id="forum">
    <div class="forum-container">
      <div class="global-width forum-wrap">
        <div class="text-box">
          <p>{{$t('forum.forumTitle')}}</p>
          <p>
            <span class="go-forum">{{$t('forum.goForum')}}</span>
          </p>
        </div>
      </div>
    </div>
    <p class="contact" id="contact">{{$t('forum.coporation')}}</p>
    <p class="email">
      <span>1196651331@qq.com</span>
    </p>
    <div class="copyright">
      <p>{{$t('copyright.tip')}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "forum"
};
</script>
<style lang="scss" scoped>
.forum-wrap {
  background-size: cover;
  font-size: 32px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  margin-top: -136px;

  .go-forum {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 40px;
    color: rgba(253, 38, 124, 1);
    opacity: 1;
    padding: 0.12rem 0.4rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
  }

  .text-box {
    background-image: url("../assets/images/forum/forum-bg.png");
    padding-top: 0.94rem;
    padding-bottom: 0.94rem;
    position: relative;
    top: -1rem;

    p {
      + p {
        margin-top: 0.34rem;
      }
    }
  }
}
.corporation {
  width: 100%;
  background: rgba(239, 242, 246, 1);

  .contact {
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
    color: rgba(49, 70, 89, 1);
    letter-spacing: 3px;
    opacity: 1;
    margin-bottom: 0.32rem;
  }

  .email {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: rgba(49, 70, 89, 1);
    opacity: 1;

    > span {
      padding: 8px 20px;
      letter-spacing: 1;
      border-bottom: 1px solid rgba(49, 70, 89, 1);
    }
  }
}
.copyright {
  font-size: 14px;
  font-weight: 400;
  line-height: 64px;
  color: rgba(255, 255, 255, 0.65);
  opacity: 1;
  height: 64px;
  background: rgba(58, 57, 75, 1);
  opacity: 1;
  letter-spacing: 1.2px;
  margin-top: 1.2rem;
}
@media (max-width: 769px) {
  .forum-wrap {
    .text-box {
      margin-left: 0.24rem;
      margin-right: 0.24rem;
    }
  }
  .copyright {
    margin-top: 0.9rem;
  }

  .corporation {
    .contact {
      margin-top: -50px;
    }
  }
}
</style>


