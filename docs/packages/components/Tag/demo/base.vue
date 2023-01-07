<template>
  <div class="base-ku-tag">
    <ku-tag :tag="tag">标签</ku-tag>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseKuTag',
})

interface Tag {
  name: string,
  link: string
}

const tag: Tag = {
  name: '标签',
  link: ''
}

</script>


<style lang="less" scoped>
.base-ku-tag {
  
}
</style>