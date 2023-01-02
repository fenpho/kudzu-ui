<template>
  <div class="base-ku-header">
    <ku-header :header="header" @item-click="itemClick" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { getImageUrl } from '@kudzu/assets';

defineOptions({
  name: 'BaseKuHeader',
})

interface ListItem {
  name: string,
  link: string,
  icon?: string,
  italic?: string,
}

interface More {
  name: string,
  icon: string,
}

interface Header {
  logo?: string,
  list: ListItem[],
  more: More
}

const header: Header = reactive({
  logo: getImageUrl('./logo.png'),
  list: [
    {
      name: 'FENPHO',
      link: 'https://fenpho.github.io/',
    },
    {
      name: 'CREATIVE.',
      link: '',
      italic: 'Always',
    },
    {
      name: '',
      link: 'https://fenpho.github.io/',
      icon: getImageUrl('./github.png'),
    },
    {
      name: '',
      link: '',
      italic: 'Welcome!',
    },
  ],
  more: {
    name: '更多',
    icon: ''
  }
 })

 const itemClick = (item: ListItem) => {
  console.log(item)
 }
</script>


<style lang="less" scoped>
.base-ku-header {
  height: 200px;
  overflow-y: auto;
  // background-color: lightgreen;
  perspective: 0; // 景深，让fixed定位不脱离展示区域
}
</style>