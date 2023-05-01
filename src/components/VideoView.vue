<script setup lang="ts">
import { ref, watchEffect } from "vue";
import type { VideoModel } from "../utils/interfaces/index";
import Video from '@/components/Video.vue'
import NoData from "./common/NoData.vue";

// const videourl = ref<string>("")

const props = defineProps({
  videos: {
    type: Array,
    default: () => [],
  },
});

const videoInfos = ref<VideoModel[]>([]);

watchEffect(() => {
  videoInfos.value = props.videos as VideoModel[];
});

// const curMusicStateChanged = (cur: { idx: number; paused: boolean }) => {
//   videoInfos.value.forEach((info, index) => {
//     if (cur.idx === index) {
//       info.paused = cur.paused;
//     } else {
//       info.paused = true;
//     }
//   });
// };

// const setRotate = (state: { idx: number; pause: boolean }) => {
//   videoInfos.value[state.idx].paused = state.pause;
// };

// const onPlay = (url: string) => {
//   console.log("video url: ", url);
//   (document.getElementById("myVideo") as any).src = url
// };
</script>

<template>
  <div class="video-view flex column">
    <NoData v-if="!videoInfos.length" />
    <Video v-else 
      v-for="item in videoInfos"
      :key="item.id" 
      :video="item"
    ></Video>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.video-view {
  width: 99%;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
}

.fade-enter-active {
  &,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
