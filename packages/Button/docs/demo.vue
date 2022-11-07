<template>
  <div>
    <ku-button @click="onClick(1)">第一个</ku-button>
    <ku-button @click="onClick(2)">第二个</ku-button>
    <ku-button @click="onClick(3)">第三个</ku-button>
    <ku-button @click="onClick(4)">第四个</ku-button>
  </div>
</template>

<script setup lang="ts">
const onClick = (num: number) => { console.log(`我是第 ${num} 个自定义按钮`) }
</script>
