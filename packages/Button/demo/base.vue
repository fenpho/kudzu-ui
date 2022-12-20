<template>
  <div class="base-ku-button">
    <ku-button @click="onClick(1)">第一个</ku-button>
    <ku-button @click="onClick(2)">第二个</ku-button>
    <ku-button @click="onClick(3)">第三个</ku-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseKuButton',
})

const onClick = (num: Number) => { console.log(`我是第 ${num} 个自定义按钮`) }
</script>


<style lang="less" scoped>
.base-ku-button {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 20px;
}
</style>