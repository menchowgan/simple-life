<script setup lang="ts">
import { defineEmits } from "@vue/runtime-core";
const emits = defineEmits(["type-selected"]);
const types = [
  {
    label: "技术博客",
    value: "TEC_BLOG",
  },
  {
    label: "日常生活",
    value: "DAILY_LIFE",
  },
  {
    label: "兴趣分享",
    value: "HOBBY_SHARE",
  },
  {
    label: "音乐相关",
    value: "MUSIC_ABOUT",
  },
];

const selectedType = (type: string) => {
  emits("type-selected", type);
};
</script>

<template>
  <div class="header-nav">
    <p
      v-for="item in types"
      :key="item.value"
      @click="() => selectedType(item.value)"
    >
      <span>{{ item.label }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "../style/animation.scss";
@import "../style/theme.scss";

.header-nav {
  width: 99%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  p {
    height: 100%;
    flex: 1;
    color: $theme-color;
    font-size: 36px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    box-shadow: var(--el-box-shadow);
    &:hover {
      animation: bounce 0.5s;
      border: 5px solid #fff;
      border-radius: 32px;
      transform: rotateZ(-10deg) scale(1.2);
      cursor: pointer;
    }
    span {
      line-height: 90px;
    }
  }
}
</style>
