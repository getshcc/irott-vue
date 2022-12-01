<script setup>
import HeroSection from '../components/HeroSection.vue';
import ContentsHeader from '../components/ContentsHeader.vue';
</script>

<template>
  <section class="container mx-auto">

    <!-- import hero section -->
    <hero-section></hero-section>

    <!-- import main contents -->
    <main class="px-5 3xl:px-0">

      <!-- Content: Courses -->
      <section >

        <contents-header>
          <template v-slot:title>
            <h2 class="font-black text-2xl">
              <a href="">دوره ها</a>
            </h2>
          </template>
          <template v-slot:default>
            <option value="newest">
              جدید ترین
            </option>
            <option value="bestselling">
              پرفروش ترین
            </option>
            <option value="mostvisited">
              پربازدید ترین
            </option>
          </template>
        </contents-header>

        <main  class="grid grid-cols-3 grid-row-2 gap-8 py-5">

        </main>

      </section>
      
    </main>

  </section>
  
</template>


<style>
select {
  /* for Firefox 
  -moz-appearance: none;
  /* for Chrome
  -webkit-appearance: none; */
  appearance: none;
  background-color: transparent;
}

/* For IE10 */
</style>
