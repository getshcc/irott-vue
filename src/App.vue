<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section>

    <header>
    
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
  
    </header>
  
    <main>
      <RouterView />
    </main>

  </section>
</template>

<style scoped lang="scss">

section {
  padding: 20px;
}

nav {
  padding-bottom: 16px;

  a {
    margin-right: 14px;
  }
}

</style>
