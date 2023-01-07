const n=`<template>\r
  <div class="base-ku-button">\r
    <ku-button @click="onClick(1)">\u7B2C\u4E00\u4E2A</ku-button>\r
    <ku-button @click="onClick(2)">\u7B2C\u4E8C\u4E2A</ku-button>\r
    <ku-button @click="onClick(3)">\u7B2C\u4E09\u4E2A</ku-button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
defineOptions({\r
  name: 'BaseKuButton',\r
})\r
\r
const onClick = (num: Number) => { console.log(\`\u6211\u662F\u7B2C \${num} \u4E2A\u81EA\u5B9A\u4E49\u6309\u94AE\`) }\r
<\/script>\r
\r
\r
<style lang="less" scoped>\r
.base-ku-button {\r
  display: grid;\r
  grid-template-columns: 100px 100px 100px;\r
  grid-gap: 20px;\r
}\r
</style>`;export{n as default};
