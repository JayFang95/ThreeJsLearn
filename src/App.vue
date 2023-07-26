<script setup lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { TEngine } from './ts/TEngine';

// export default defineComponent({
  // setup(){
    // const canvasTarget = ref(null);
    // 
    // onMounted(()=>{
      // const tE = new TEngine(canvasTarget.value);
    // })
// 
    // return {
      // canvasTarget
    // }
  // }
// })
const canvasTarget = ref(null);
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
  background-color: blue;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
