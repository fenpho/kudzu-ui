const n=`<template>\r
  <div class="base-ku-tag">\r
    <ku-tag :tag="tag">\u6807\u7B7E</ku-tag>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
defineOptions({\r
  name: 'BaseKuTag',\r
})\r
\r
interface Tag {\r
  name: string,\r
  link: string\r
}\r
\r
const tag: Tag = {\r
  name: '\u6807\u7B7E',\r
  link: ''\r
}\r
\r
<\/script>\r
\r
\r
<style lang="less" scoped>\r
.base-ku-tag {\r
  \r
}\r
</style>`;export{n as default};
