<template>
  <div class="base-{{ compClassName }}">
    <{{ compClassName }}>{{ compCnName }}</{{ compClassName }}>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BaseKu{{ compName }}',
})
</script>


<style lang="less" scoped>
.base-{{ compClassName }} {
  
}
</style>