<template>
  <div class="base-ku-aside">
    <ku-aside :aside="aside" @item-click="itemClick">侧边栏</ku-aside>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseKuAside',
})

interface ListItem {
  name: string,
  link: '',
  icon?: '',
  children?: ListItem[],
  id?: string
}

const aside = {
  list: [
    {
      name: '首页',
      link: ''
    },
    {
      name: '分类',
      link: ''
    },
    {
      name: '友情链接',
      link: '',
      children: [
        {
          name: 'Fenpho',
          link: 'https://github.com/fenpho'
        },
      ]
    },
  ],
  extras: [
    {
      name: '关于',
      link: ''
    },
    {
      name: '订阅',
      link: ''
    },
  ]
}

const itemClick = (item: ListItem) => {
  console.log(item)
 }
</script>


<style lang="less" scoped>
.base-ku-aside {
  height: 300px;
}
</style>