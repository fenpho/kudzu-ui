const n=`<template>\r
  <div class="base-ku-aside">\r
    <ku-aside :aside="aside" @item-click="itemClick" @close-click="closeClick">\u4FA7\u8FB9\u680F</ku-aside>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { getImageUrl } from '@kudzu/utils';\r
\r
defineOptions({\r
  name: 'BaseKuAside',\r
})\r
\r
interface ListItem {\r
  name: string,\r
  link: '',\r
  icon?: '',\r
  children?: ListItem[],\r
  id?: string\r
}\r
\r
const aside = {\r
  list: [\r
    {\r
      name: '\u9996\u9875',\r
      link: ''\r
    },\r
    {\r
      name: '\u5206\u7C7B',\r
      link: ''\r
    },\r
    {\r
      name: '\u53CB\u60C5\u94FE\u63A5',\r
      link: '',\r
      children: [\r
        {\r
          name: 'Fenpho',\r
          link: 'https://github.com/fenpho'\r
        },\r
      ]\r
    },\r
  ],\r
  extras: [\r
    {\r
      name: '\u5173\u4E8E',\r
      link: ''\r
    },\r
    {\r
      name: '\u8BA2\u9605',\r
      link: ''\r
    },\r
  ],\r
  close: getImageUrl('../assets/close.png')\r
}\r
\r
const itemClick = (item: ListItem) => {\r
  console.log(item)\r
}\r
const closeClick = () => {\r
  console.log('close')\r
}\r
<\/script>\r
\r
\r
<style lang="less" scoped>\r
.base-ku-aside {\r
  height: 300px;\r
}\r
</style>`;export{n as default};
