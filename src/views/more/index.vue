<script setup lang="ts">
import { ref, watch } from 'vue'
import BackIcon from '@/components/BackIcon.vue';
import ArticleCardInCreation from '@/components/ArticleCardInCreation.vue';
import MusicViewInMore from '@/components/MusicViewInMore.vue'
import VideoView from '@/components/VideoView.vue'
import { useRoute } from 'vue-router';
import { ArticleManager, MusicManager, InfoManager, InfoGetter, VideoManager } from '@/utils/managers';
import { useUserInfoStore } from '@/store';
import { UserModel, InfoModel } from '@/utils/interfaces'

const headerImg = new URL('/src/assets/images/we.jpeg', import.meta.url).href

const userStore = useUserInfoStore()
const route = useRoute()

const infos = ref<InfoModel[]>([])

const typeManagerMap: Record<string, Function> = {
  article: () => new ArticleManager(),
  music: () => new MusicManager(),
  video: () => new VideoManager()
}

watch(
  () => route?.query?.type,
  async (newVal, _, onCleanup) => {
    let expired = false;

    onCleanup(() => {
      expired = true;
    });

    if (!expired) {
      if (!newVal) {
        return
      }
      if (newVal === 'photo') {
        infos.value = userStore.userInfo.photos as InfoModel[]
        return
      }
      const manager = typeManagerMap[newVal as string]()
      const info = await InfoGetter.query(
        manager as InfoManager,
        (userStore.userInfo as UserModel)?.id as number
      );
      if (info) {
        infos.value = info
      }
    }
  },
  {
    immediate: true,
  }
);

</script>

<template>
  <div class="more-container flex column">
    <BackIcon />
    <div class="header">
      <img :src="headerImg" alt="">
    </div>
    <div class="body flex column">
      <ArticleCardInCreation  
        v-if="route?.query?.type === 'article'"
        :articleSimpleInfos="infos" />
      <MusicViewInMore 
        v-if="route?.query?.type === 'music'" 
        :audios="infos" />
      <template v-if="route?.query?.type === 'video'">
        <VideoView :videos="infos" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../style/flex-style.scss';
@import '../../style/theme.scss';
.more-container {
  width: 100%;
  align-items: center;
  .header {
    width: 60%;
    height: 1000px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .body {
    width: 60%;
    // margin-top: 10px;
  }
}
</style>