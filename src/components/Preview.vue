<template>
  <!-- 注意这边不允许换行，否则第一行会出现空格 -->
  <pre class="language-html"><code class="language-html">{{ data.sourceCode }}</code></pre>
</template>

<script setup lang="ts">
import { onMounted, reactive, nextTick, ref } from 'vue';
import Prism from 'prismjs';
import '../assets/prism.css'; // 主题 CSS

const props = defineProps<{
   /** 组件名称 */
   compName: '',
    /** 要显示代码的组件 */
    demoName: '',
}>();

const data = reactive({
  sourceCode: '',
})

async function getCode () {
  const isDev = import.meta.env.MODE === 'development';

  if (isDev) {
    data.sourceCode = (
      await import(/* @vite-ignore */ `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`)
    ).default;
  } else {
    data.sourceCode = await fetch(`/packages/${props.compName}/docs/${props.demoName}.vue`).then((res) => res.text());
  }
}



const el = ref();

onMounted(async () => {
  await getCode();
  await nextTick(); // 确保在源码都渲染好了以后再执行高亮
 
  Prism.highlightAll();
})
</script>

<style scoped>
</style>
