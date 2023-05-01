<script setup lang="ts">
import { ref, watchEffect } from "vue";
import MusicPlayer from "@/components/MusicPlayer.vue";
import type { MusicModel } from "../utils/interfaces/index"
import NoData from "./common/NoData.vue";

const props = defineProps({
  audios: {
    type: Array,
    default: () => []
  }
})

const length = ref<number>(0)

watchEffect(() => {
  length.value = props.audios?.length || 0
})

const musicInfos = ref<MusicModel[]>([]);

watchEffect(() => {
  musicInfos.value = props.audios as MusicModel[]
})

const curMusicStateChanged = (cur: { idx: number; paused: boolean }) => {
  musicInfos.value.forEach((info, index) => {
    if (cur.idx === index) {
      info.paused = cur.paused;
    } else {
      info.paused = true;
    }
  });
};

const setRotate = (state: { idx: number, pause: boolean }) => {
  musicInfos.value[state.idx].paused = state.pause
}

</script>

<template>
  <div class="music-view flex column">
    <NoData v-if="length === 0" />
    <el-card 
      shadow="hover" 
      class="card flex row" 
      :body-style="{ height: '96%', width: '100%' }"
      v-for="(item, index) in musicInfos" :key="item.id"
    >
      <div class="content flex column">
        <div class="header flex row">
          <el-avatar 
            shape="square"
            :size="340" 
            :src="item.avatar" 
            class="image" 
          />
          <div class="section flex column">
            <span class="title">
              {{ item.title }} 
              <span class="artist"> - {{ item.artist }} </span>
            </span>
            <div class="evaluation">
              <span>评价：</span> {{ item.evalution }}
            </div>
          </div>
        </div>
        <div class="body flex column">
          <MusicPlayer 
            :music="item.audioUrl" 
            :music-idx="index" 
            :shouldPaused="item.paused" 
            @shouldRotate="setRotate"
            @curMusicStateChanged="curMusicStateChanged" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.music-view {
  width: 100%;
  margin-top: 20px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  .card {
    width: 100%;
    height: 720px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;

    .content {
      width: 100%;
      height: 90%;
      margin-top: 2%;
      justify-content: flex-start;
      align-items: center;

      .header {
        width: 78%;
        justify-content: center;
        align-items: flex-start;
      }

      .section {
        width: 64%;
        height: 100%;
        padding: 14px;
        margin-left: 16px;
        justify-content: center;
        align-items: flex-start;

        .title {
          flex: 1;
          font-size: 50px;

          &:hover {
            @include hover-style;
            color: #3fc7f5;
          }

          .artist {
            font-size: 34px;
            color: $theme-color;
          }

        }
        .evaluation {
          flex: 6;
          font-size: 32px;

          span {
            font-size: 32px;
            color: #3fc7f5;
          }
        }
      }

      .body {
        flex: 6;
        padding-left: 20px;
        justify-content: center;
      }

      .image {
        margin-left: 20px;
        border: 5px solid $theme-color;
        box-shadow: var(--el-box-shadow);
      }

    }
  }
}

@keyframes rotating-img {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>