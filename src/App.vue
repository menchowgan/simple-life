<script setup lang="ts">
import { h, onMounted } from 'vue';
import { GMessage } from '@/plugins';

const getUserTitle = (nickname: string) => {
  const ns = nickname?.split(/\s+/);
  return h(
    "span",
    {
      style: {
        fontSize: "64px",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      },
    },
    [
      h("span", "欢迎进入 "),
      h(
        "span",
        ns.map((n, index) => {
          if (ns.length === 1 || index < ns.length - 1) {
            return h("span", n);
          }
          return h(
            "span",
            {
              style: {
                color: "#eee",
              },
            },
            ` ${n}`
          );
        })
      )
    ]
  );
};

onMounted(() => {
  GMessage(getUserTitle("Simple Life"), {
    type: "success",
    timeout: 4000,
  });
})

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive :max="4">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active {
  &,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
