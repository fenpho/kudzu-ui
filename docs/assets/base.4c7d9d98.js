const n=`<template>\r
  <div class="base-ku-card">\r
    <ku-card :card="card" @toDetail="toDetail" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
defineOptions({\r
  name: 'BaseKuCard',\r
})\r
\r
interface TagItem {\r
  name: string,\r
  link: string\r
}\r
\r
interface Card {\r
  title: string,\r
  desc: string,\r
  tag: TagItem[],\r
  link?: string,\r
  time?: string,\r
  readmore?: boolean\r
}\r
\r
const card = {\r
  title: '\u4F7F\u7528hexo\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2',\r
  desc: '1\u3001\u4EC0\u4E48\u662F Hexo\uFF1FHexo \u662F\u4E00\u4E2A\u5FEB\u901F\u3001\u7B80\u6D01\u4E14\u9AD8\u6548\u7684\u535A\u5BA2\u6846\u67B6\u3002Hexo \u4F7F\u7528 Markdown\uFF08\u6216\u5176\u4ED6\u6E32\u67D3\u5F15\u64CE\uFF09\u89E3\u6790\u6587\u7AE0\uFF0C\u5728\u51E0\u79D2\u5185\uFF0C\u5373\u53EF\u5229\u7528\u9753\u4E3D\u7684\u4E3B\u9898\u751F\u6210\u9759\u6001\u7F51\u9875\u3002 2\u3001\u51C6\u5907\u5DE5\u4F5C2.1 \u5B89\u88C5Git Mac \u7528\u6237\u60A8\u5728\u7F16\u8BD1\u65F6\u53EF\u80FD\u4F1A\u9047\u5230\u95EE\u9898\uFF0C\u8BF7\u5148\u5230 App Store \u5B89\u88C5 Xcode\uFF0CXcode \u5B8C\u6210\u540E\uFF0C\u542F\u52A8\u5E76\u8FDB\u5165 Preferences -> Download -> Command Line Tools -> Ins',\r
  tag: [\r
    {\r
      name: 'Hexo',\r
      link: 'https://fenpho.github.io/tags/Hexo/'\r
    },\r
    {\r
      name: 'Github',\r
      link: 'https://fenpho.github.io/tags/Github/'\r
    },\r
  ],\r
  link: 'https://fenpho.github.io/2017/05/26/%E4%BD%BF%E7%94%A8hexo%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/',\r
  time: '2017-05-26',\r
}\r
\r
const toDetail = (card: Card) => {\r
  console.log(card)\r
}\r
<\/script>\r
\r
\r
<style lang="less" scoped>\r
.base-ku-card {\r
  // max-width: 100%;\r
  // overflow: hidden;\r
}\r
</style>`;export{n as default};
