<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TEngine } from './ts/TEngine';

import { basicObjectList } from './ts/TBasicObject';
import { helperList } from './ts/THelper'
import { lightList } from './ts/TLight';

const canvasTarget = ref(null);

// 在页面初始化完成后调用
onMounted(() => {
  const tE = new TEngine(canvasTarget.value);
  tE.add(...basicObjectList);
  tE.add(...helperList);
  tE.add(...lightList);
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
