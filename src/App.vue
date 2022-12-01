<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <section>

    <!-- import header -->

    <main-header>

      <!-- import links as slot -->
      <nav>
        <ul class="flex items-center gap-x-4">
            <li><router-link :to="{ name: 'home' }">صفحه اصلی</router-link></li>
            <li><a href="/">دوره ها</a></li>
            <li><a href="/">مقالات</a></li>
            <li><a href="/">پادکست ها</a></li>
            <li><a href="/">نقشه راه</a></li>
        </ul>

    </nav>

    </main-header>

    <!-- Router views -->
    <main>
      <RouterView />
    </main>



    <!-- import footer -->

  </section>
</template>

<style scoped lang="scss">
li,
button {
  display: flex;
}

.router-link-active {
  font-weight: 800;
}
</style>


<!-- section {
  padding: 20px;
}

nav {
  padding-bottom: 16px;

  a {
    margin-right: 14px;
  }
} -->