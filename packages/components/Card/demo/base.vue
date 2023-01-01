<template>
  <div class="base-ku-card">
    <ku-card :card="card" @toDetail="toDetail" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseKuCard',
})

interface TagItem {
  name: string,
  link: string
}

interface Card {
  title: string,
  desc: string,
  tag: TagItem[],
  link?: string,
  time?: string,
  readmore?: boolean
}

const card = {
  title: '使用hexo搭建个人博客',
  desc: '1、什么是 Hexo？Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。 2、准备工作2.1 安装Git Mac 用户您在编译时可能会遇到问题，请先到 App Store 安装 Xcode，Xcode 完成后，启动并进入 Preferences -> Download -> Command Line Tools -> Ins',
  tag: [
    {
      name: 'Hexo',
      link: 'https://fenpho.github.io/tags/Hexo/'
    },
    {
      name: 'Github',
      link: 'https://fenpho.github.io/tags/Github/'
    },
  ],
  link: 'https://fenpho.github.io/2017/05/26/%E4%BD%BF%E7%94%A8hexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/',
  time: '2017-05-26',
}

const toDetail = (card: Card) => {
  console.log(card)
}
</script>


<style lang="less" scoped>
.base-ku-card {
  // max-width: 100%;
  // overflow: hidden;
}
</style>