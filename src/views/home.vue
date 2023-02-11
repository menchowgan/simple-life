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
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onActivated, h, reactive, readonly } from "vue";
import HeaderNav from "@/components/HeaderNav.vue";
import ArtText from "@/components/ArtText.vue";
const title = ref("simple life")

const onNavTypeSelected = (type: string) => {
};
</script>

<style scoped lang="scss">
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.Home {
  width: 100%;
  align-items: center;
  .body {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    opacity: 0.8;
    margin-bottom: 200px;
    .sider {
      min-width: 350px;
      flex: 2;
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
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    opacity: 0.8;
    .nav {
      width: 60%;
      height: 660px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      .art-text {
        margin-bottom: 80px;
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
    width: 380px;
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

  .articles {
    max-height: 2000px;
    opacity: 0.9;
    min-width: 500px;
    flex: 3;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
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
