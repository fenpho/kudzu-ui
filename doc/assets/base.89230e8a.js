const n=`<template>\r
  <div class="base-ku-footer">\r
    <ku-footer :footer="footer" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { getImageUrl } from '@kudzu/utils';\r
defineOptions({\r
  name: 'BaseKuFooter',\r
})\r
\r
const footer = {\r
  startTime: '2017',\r
  copyrihgt: 'Fenpho',\r
  list: [\r
    {\r
      name: 'Github',\r
      icon: getImageUrl('../assets/github.png'),\r
      link: 'https://github.com/fenpho'\r
    },\r
    // {\r
    //   name: 'Kudzu',\r
    //   icon: getImageUrl('../assets/kudzu.png'),\r
    //   link: 'https://www.npmjs.com/package/kudzu-ui'\r
    // },\r
  ]\r
}\r
<\/script>\r
\r
\r
<style lang="less" scoped>\r
.base-ku-footer {\r
  \r
}\r
</style>`;export{n as default};
