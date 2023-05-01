<script lang="ts" setup>
import { ref } from 'vue';
import HeaderNav from '@/components/HeaderNav.vue';
import ArtText from '@/components/ArtText.vue';
import Carousel from '@/components/Carousel.vue';
import ArticleCard from '@/components/ArticleCard.vue'
import MusicView from '@/components/MusicView.vue'
import Video from '@/components/Video.vue'
import { UserManager } from '@/utils/managers';
import { useUserInfoStore } from '@/store'
import type {
  UserModel,
  MusicModel, 
  ArticleSimpleInfoModel,
  PhotoModel,
  VideoModel
} from '@/utils/interfaces'
const userStore = useUserInfoStore()

const title = ref("Simple Life")

const onNavTypeSelected = (type: string) => {
  console.log(type);
};

const userManager = new UserManager()

const video = ref<VideoModel | null>()
const articleSimpleInfos = ref<Array<ArticleSimpleInfoModel>>([])
const musicInfos = ref<Array<MusicModel>>([])
const photos = ref<Array<PhotoModel>>([])

const init = async () => {
  const data: UserModel | null = await userManager.searchSimpleLifeInfo()
  const music = data?.musics
  const article = data?.article
  const photosList = data?.photos
  const videoM = data?.video
  if (music?.length) {
    musicInfos.value = music
  }
  if (article) {
    articleSimpleInfos.value = [article]
  }
  if (photosList?.length) {
    photos.value = photosList
  }
  if (videoM) {
    video.value = videoM
  }
  userStore.userInfo = data as UserModel
}

init()

</script>

<template>
  <div class="Home flex column">
    <div class="header">
      <div class="nav">
        <ArtText
          class="art-text"
          :text="title"
          fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
          :artFontSize="120"
          :deputyFontStyle="{ color: 'white', fontSize: 100 }"
        />
        <div style="width: 100%; height: 100px">
          <HeaderNav @type-selected="onNavTypeSelected" />
        </div>
      </div>
    </div>
    <div class="body">
      <div class="articles flex column">
        <ArticleCard v-if="articleSimpleInfos.length"       :articleSimpleInfos="articleSimpleInfos" />
        <MusicView v-if="musicInfos.length" :audios="musicInfos" />
        <Video v-if="video" :video="video" />
      </div>
      <div class="sider">
        <nav class="personal-content" style="flex: 1">
          <ArtText
            :width="80"
            :height="100"
            :fontSize="50"
            fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
            :artFontSize="55"
            :deputyFontStyle="{ color: 'white' }"
            artColor="#fff"
            color="#ccc"
            text="MY -Photos"
          />
          <Carousel :photos="photos" style="width: 100%; margin-top: 50px" />
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.Home {
  width: 100%;
  align-items: center;
  .body {
    width: 88%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    opacity: 0.8;
    margin-top: 24px;
    margin-bottom: 200px;
    .articles {
      width: 70%;
      // max-height: 2000px;
      opacity: 0.9;
      min-width: 500px;
      flex: 4;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: auto;
    }
    .sider {
      width: 20%;
      min-width: 150px;
      margin-left: 5%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      @media screen and (max-width: 1500px) {
        min-width: 350px;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        opacity: 0.8;
      }
    }
  }
  .header {
    width: 88%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    opacity: 0.8;
    .nav {
      width: 80%;
      height: 660px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      .art-text {
        margin-bottom: 100px;
      }
    }
    .avator {
      float: right;
      width: 40%;
      height: 360px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      .el-avatar {
        margin-right: 128px;
        border: 10px solid $theme-color;
        box-shadow: var(--el-box-shadow);
        cursor: pointer;
      }
    }
    .my-photo {
      width: 40%;
      height: 360px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .navigator {
    flex: 1;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.96;
    .nav {
      width: 96%;
      height: 96%;
      margin-top: 16px;
      background: none;
      border: 0;
    }
  }
  .personal-content {
    width: 280px;
    height: 500px;
    margin-left: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.94;
    .content {
      width: 96%;
      height: 96%;
      margin-top: 16px;
    }
    .art-title {
      &:hover {
        animation: text-scale 0.8s;
      }
    }
  }

}

@keyframes text-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
