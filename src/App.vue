<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TEngine } from './ts/TEngine';

const canvasTarget = ref(null);

// 在页面初始化完成后调用
onMounted(() => {
  const tE = new TEngine(canvasTarget.value);
})
</script>

<template>
  <div id="three-canvas" ref="canvasTarget"></div>
</template>

<style scoped>
#three-canvas{
  width: 100%;
  height: 100%;
}
</style>
