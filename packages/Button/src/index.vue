<template>
  <button class="ku-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup name="ku-button">
defineEmits(['click']);
</script>

<style scoped>
.ku-button {
  font-size: 12px;
  color: gray;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all ease .3s;
}

.ku-button:hover {
  background-color: gray;
  color: #fff;
}
</style>
