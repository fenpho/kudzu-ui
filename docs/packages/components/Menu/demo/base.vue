<template>
  <div class="base-ku-menu">
    <ku-menu :menu="menu" @item-click="itemClick" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseKuMenu',
})

interface ListItem {
  name: string,
  link: '',
  icon?: '',
  children?: ListItem[],
  id?: string
}

const menu = [
  {
    name: '首页',
    link: ''
  },
  {
    name: '导航一',
    link: ''
  },
  {
    name: '导航二',
    link: ''
  },
  {
    name: '导航三',
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
]

const itemClick = (item: ListItem) => {
  console.log(item)
}
</script>


<style lang="less" scoped>
.base-ku-menu {}
</style>