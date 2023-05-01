<script lang="ts" setup>
const props = defineProps({
  video: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <el-card 
    shadow="hover" 
    class="card flex row" 
    :body-style="{ height: '96%', width: '100%' }">
    <div 
      class="content flex row">
      <el-avatar 
        :size="250" 
        :src="props.video.avatar" 
        shape="square" 
        class="image" />
      <div class="section flex column">
        <span class="title">{{ props.video.title }} 
          <span class="artist"> - {{ props.video.artist }} </span>
        </span>
        <video id="myVideo" controls>
          <source :src="props.video.videoUrl" type="video/mp4">
          您的浏览器不支持Video标签。
        </video>
        <div class="evaluation">
          <span>感想：</span> {{ props.video.evalution }}
        </div>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";
.card {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: flex-start;

  .content {
    width: 100%;
    height: 96%;
    justify-content: flex-start;
    align-items: flex-start;

    .section {
      width: 74%;
      height: 100%;
      padding: 14px;
      justify-content: center;
      align-items: flex-start;

      .title {
        flex: 1;
        font-size: 48px;
        margin-bottom: 20px;
        margin-left: 30px;

        &:hover {
          @include hover-style;
          color: #3fc7f5;
        }

        .artist {
          font-size: 40px;
          color: #999;
        }
      }

      .evaluation {
        flex: 5;
        margin-left: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
        color: #999;
        font-size: 28px;

        span {
          font-size: 32px;
          color: #3fc7f5;
        }
      }

      .more {
        width: 100%;
        justify-content: flex-end;
        .button {
          font-size: 28px;
          color: #3fc7f5;
        }
      }

      #myVideo {
        flex: 8;
        width: 100%;
        margin-left: 30px;
      }
    }

    .image {
      margin-top: 20px;
      margin-left: 20px;
      border-radius: 15px;
      border: 5px solid #3fc7f5;
      box-shadow: var(--el-box-shadow);

      &:hover {
        cursor: pointer;
      }
    }
  }
}</style>