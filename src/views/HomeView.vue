<script>
import HeroSection from '../components/HeroSection.vue';
import ContentsHeader from '../components/ContentsHeader.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { HeroSection, ContentsHeader, ProductCard },
  data: () => ({
    courses: [],
    homeViewCourses: []
  }),
  mounted() {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => {
        this.courses = data;
        this.homeViewCourses = this.courses.slice(-6);
      })
      .catch(err => console.log(err))
  }
}

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

        <main class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-row-2 gap-8 py-5">
            <product-card v-for="course in homeViewCourses" :key="course.id" :content="course"></product-card>
        </main>

      </section>
      
    </main>

  </section>
  
</template>


<style>
select {
  appearance: none;
  background-color: transparent;
}
</style>
