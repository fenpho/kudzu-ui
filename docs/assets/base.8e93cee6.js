const n=`<template>\r
  <div class="base-ku-header">\r
    <ku-header :header="header" @item-click="itemClick" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { reactive } from 'vue'\r
import { getImageUrl } from '@kudzu/utils';\r
\r
defineOptions({\r
  name: 'BaseKuHeader',\r
})\r
\r
interface ListItem {\r
  name: string,\r
  link: string,\r
  icon?: string,\r
  italic?: string,\r
}\r
\r
interface More {\r
  name: string,\r
  icon: string,\r
}\r
\r
interface Header {\r
  logo?: string,\r
  list: ListItem[],\r
  more: More\r
}\r
\r
const header: Header = reactive({\r
  logo: getImageUrl('../assets/logo.png'),\r
  list: [\r
    {\r
      name: 'FENPHO',\r
      link: 'https://fenpho.github.io/',\r
    },\r
    {\r
      name: 'CREATIVE.',\r
      link: '',\r
      italic: 'Always',\r
    },\r
    {\r
      name: '',\r
      link: 'https://fenpho.github.io/',\r
      icon: getImageUrl('../assets/github.png'),\r
    },\r
    {\r
      name: '',\r
      link: '',\r
      italic: 'Welcome!',\r
    },\r
  ],\r
  more: {\r
    name: '\u66F4\u591A',\r
    icon: ''\r
  }\r
 })\r
\r
 const itemClick = (item: ListItem) => {\r
  console.log(item)\r
 }\r
<\/script>\r
\r
\r
<style lang="less" scoped>\r
.base-ku-header {\r
  height: 200px;\r
  overflow-y: auto;\r
  // background-color: lightgreen;\r
  perspective: 0; // \u666F\u6DF1\uFF0C\u8BA9fixed\u5B9A\u4F4D\u4E0D\u8131\u79BB\u5C55\u793A\u533A\u57DF\r
}\r
</style>`;export{n as default};
