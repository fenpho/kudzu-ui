<template>
  <div class="base-ku-footer">
    <ku-footer :footer="footer" />
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@kudzu/utils';
defineOptions({
  name: 'BaseKuFooter',
})

const footer = {
  startTime: '2017',
  copyrihgt: 'Fenpho',
  list: [
    {
      name: 'Github',
      icon: getImageUrl('../assets/github.png'),
      link: 'https://github.com/fenpho'
    },
    // {
    //   name: 'Kudzu',
    //   icon: getImageUrl('../assets/kudzu.png'),
    //   link: 'https://www.npmjs.com/package/kudzu-ui'
    // },
  ]
}
</script>


<style lang="less" scoped>
.base-ku-footer {
  
}
</style>