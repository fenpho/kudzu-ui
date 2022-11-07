<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ComponentList from '../packages/list.json';
import { reactive } from 'vue';

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compNameCN
  }))
})

function handleClick(val: number) {
  console.log(val, 666)
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <ku-button @click="handleClick(2)">我是自定义按钮</ku-button>
    </div> -->
  </header>
  <main>
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <article>
      <router-view></router-view>
    </article>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  display: grid;
  grid-template-columns: 20% 1fr;
}

main article {
  flex: 1;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
