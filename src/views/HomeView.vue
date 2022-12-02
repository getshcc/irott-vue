<script>
import HeroSection from '../components/HeroSection.vue';
import ContentsHeader from '../components/ContentsHeader.vue';
import ProductCard from '../components/ProductCard.vue';
import ArticlesCard from '../components/ArticlesCard.vue';
import PodcastsCard from '../components/PodcastsCard.vue';

export default {
  components: { HeroSection, ContentsHeader, ProductCard, ArticlesCard, PodcastsCard },
  data: () => ({
    products: [],
    homeViewProducts: [],
    articles: [],
    homeViewArticles: [],
    podcasts: [],
    homeViewPodcasts: [],
  }),
  mounted() {
    fetch("http://localhost:3000/courses")
      .then(res => res.json())
      .then(data => {
        this.products = data;
        this.homeViewProducts = this.products.slice(-6);
      })
      .catch(err => console.log(err))

    fetch("http://localhost:3000/articles")
      .then(res => res.json())
      .then(data => {
        this.articles = data;
        this.homeViewArticles = this.articles.slice(-4);
      })
      .catch(err => console.log(err))

    fetch("http://localhost:3000/podcasts")
      .then(res => res.json())
      .then(data => {
        this.podcasts = data;
        this.homeViewPodcasts = this.podcasts.slice(2);
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
    <main class="flex flex-col gap-y-10 px-5 3xl:px-0">

      <!-- Content: Products -->
      <section >

        <contents-header>
          <template v-slot:title>
            <h2 class="font-black text-2xl">
              <a href="/courses">دوره ها</a>
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
            <product-card v-for="product in homeViewProducts" :key="product.id" :content="product"></product-card>
        </main>

      </section>

      <!-- Content: Articles -->
      <section>

        <contents-header>
          <template v-slot:title>
            <h2 class="font-black text-2xl">
              <a href="/articles">مقالات</a>
            </h2>
          </template>
          <template v-slot:default>
            <option value="1">پربازدید ترین</option>
            <option value="2">جدید ترین</option>
            <option value="3">قدیمی تر</option>
            <option value="4">پربحث ترین</option>
          </template>
        </contents-header>

        <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
          <articles-card v-for="article in homeViewArticles" :key="article.id" :content="article"></articles-card>
        </main>

      </section>

      <!-- Content: Podcast -->
      
      <section>

        <contents-header>

          <template v-slot:title>
            <h2 class="font-black text-2xl">
              <a href="/podcasts">پادکست ها</a>
            </h2>
          </template>

          <template v-slot:default>
            <option value="a">جدیدترین</option>
            <option value="a">پرشنونده ترین</option>
            <option value="a">پربحث ترین</option>
            <option value="a">محبوب ترین</option>
            <option value="a">قدیمی ترین</option>
          </template>

        </contents-header>


        <section class="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-6 py-5">
          <podcasts-card v-for="podcast in homeViewPodcasts" :key="podcast.id" :content="podcast"></podcasts-card>
        </section>

      </section>

    </main>

    <!-- Guide Section -->
    <div class="w-full h-96 lg:h-[400px] relative bg-guide bg-center">
      <div class="w-full absolute mx-auto top-16">
        <div class="content flex flex-col items-center">
          <h5 class="font-black text-[28px] text-white bg-[#FF5656] px-4 py-2">            
              برای شروع نیاز به راهنمایی دارید؟
          </h5>
          <span id="sms" class="text-red-500 my-3 font-bold">ارسال عدد ۱ به ۵۰۰۰۲۰۳۰۵۴۳۲۱</span>
      </div>
      </div>
      <div class="w-full ">
      </div>
    </div>

  </section>
  
</template>


<style>
select {
  appearance: none;
  background-color: transparent;
}
</style>
