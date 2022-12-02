<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>

  <section>

    <!-- header -->
    <main-header>

      <!-- import links as slot -->
      <nav>
        <ul class="flex items-center gap-x-4">
            <li><router-link :to="{ name: 'home' }">صفحه اصلی</router-link></li>
            <li><router-link :to="{ name: 'courses' }">دوره ها</router-link></li>
            <li><a href="/">مقالات</a></li>
            <li><a href="/">پادکست ها</a></li>
            <li><a href="/">نقشه راه</a></li>
        </ul>

    </nav>

    </main-header>


    <!-- Router views | main section -->

    <main>
      <RouterView />
    </main>



    <!-- footer -->
      <main-footer></main-footer>

  </section>

</template>

<style lang="scss">
*::selection {
  background-color: #c8c8c8;
  color: #323232;
}

li,
button {
  display: flex;
}

.router-link-active {
  font-weight: 800;
}
</style>
