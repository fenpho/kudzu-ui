const n=`<template>\r
  <div class="base-ku-menu">\r
    <ku-menu :menu="menu" @item-click="itemClick" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
defineOptions({\r
  name: 'BaseKuMenu',\r
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
const menu = [\r
  {\r
    name: '\u9996\u9875',\r
    link: ''\r
  },\r
  {\r
    name: '\u5BFC\u822A\u4E00',\r
    link: ''\r
  },\r
  {\r
    name: '\u5BFC\u822A\u4E8C',\r
    link: ''\r
  },\r
  {\r
    name: '\u5BFC\u822A\u4E09',\r
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
]\r
\r
const itemClick = (item: ListItem) => {\r
  console.log(item)\r
}\r
<\/script>\r
\r
\r
<style lang="less" scoped>\r
.base-ku-menu {}\r
</style>`;export{n as default};
